import React, { useState, useEffect } from "react";
import Modal from "react-modal"; // Install dengan: npm install react-modal
import { FiSearch, FiCheck, FiX } from "react-icons/fi";
import Swal from "sweetalert2";
import { getAllUsers, verifyDokter, rejectDokter } from "@/services/users.config";

Modal.setAppElement("#root"); // Pastikan root adalah elemen utama aplikasi Anda

const FormDaftarDokterAdmin = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDoctorId, setSelectedDoctorId] = useState(null); // Untuk toggle detail dokter
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk modal
  const [currentCertificate, setCurrentCertificate] = useState(""); // Sertifikat yang sedang ditampilkan

  // Ambil data dokter dari backend
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await getAllUsers();
        const dokterData = response.data.filter((user) => user.role.id === 3); // Filter hanya dokter
        setDoctors(dokterData);
      } catch (error) {
        console.error("Gagal mengambil data dokter:", error.message);
        Swal.fire("Error!", "Gagal memuat data dokter.", "error");
      }
    };

    fetchDoctors();
  }, []);

  // Fungsi untuk menangani input pencarian
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Fungsi untuk toggle detail dokter
  const toggleDoctorDetails = (id) => {
    setSelectedDoctorId((prevId) => (prevId === id ? null : id));
  };

  // Fungsi untuk verifikasi dokter
  const handleAcceptDoctor = async (id) => {
    try {
      await verifyDokter(id);
      Swal.fire("Berhasil!", "Dokter berhasil diverifikasi.", "success");
      setDoctors((prevDoctors) => prevDoctors.map((doc) => (doc.id === id ? { ...doc, isVerifiedByAdmin: true } : doc)));
    } catch (error) {
      Swal.fire("Gagal!", "Gagal memverifikasi dokter.", "error");
    }
  };

  // Fungsi untuk menolak dokter
  const handleRejectDoctor = async (id) => {
    try {
      await rejectDokter(id);
      Swal.fire("Berhasil!", "Dokter berhasil ditolak.", "success");
      setDoctors((prevDoctors) => prevDoctors.map((doc) => (doc.id === id ? { ...doc, isVerifiedByAdmin: false } : doc)));
    } catch (error) {
      Swal.fire("Gagal!", "Gagal menolak dokter.", "error");
    }
  };

  // Fungsi untuk membuka modal
  const openModal = (certificateUrl) => {
    setCurrentCertificate(certificateUrl);
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentCertificate("");
  };

  // Filter daftar dokter berdasarkan pencarian
  const filteredDoctors = doctors.filter((doctor) => doctor.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen p-6">
      {/* Header Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Persetujuan Dokter</h2>
          <p className="text-4xl font-bold text-gray-800">{doctors.filter((doctor) => doctor.isVerifiedByAdmin === true).length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Dokter Ditolak</h2>
          <p className="text-4xl font-bold text-gray-800">{doctors.filter((doctor) => doctor.isVerifiedByAdmin === false).length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Pendaftaran Dokter</h2>
          <p className="text-4xl font-bold text-gray-800">{doctors.length}</p>
        </div>
      </div>

      {/* Form Pencarian Dokter */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Temukan Pendaftaran Dokter</h2>
        <div className="mb-4 flex items-center border rounded-lg bg-gray-50">
          <FiSearch className="text-gray-500 mx-3" size={20} />
          <input type="text" placeholder="Cari dokter" value={searchQuery} onChange={handleSearchChange} className="w-full p-3 bg-transparent focus:outline-none" />
        </div>

        {/* Daftar Dokter */}
        <div>
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="relative bg-gray-100 rounded-lg mb-4 shadow-md">
                {/* Informasi Utama */}
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <img src={doctor.images || "/default-profile.jpg"} alt={`Foto profil ${doctor.name}`} className="w-12 h-12 rounded-full" />
                    <span className="font-semibold text-base">{doctor.name}</span>
                  </div>

                  {/* Tombol Lihat Selengkapnya */}
                  <div className="flex justify-center">
                    <button onClick={() => toggleDoctorDetails(doctor.id)} className="text-sm text-blue-500 underline">
                      {selectedDoctorId === doctor.id ? "Tutup" : "Lihat Selengkapnya"}
                    </button>
                  </div>
                  {/* Tombol Aksi */}
                  <div className="flex items-center space-x-3">
                    {doctor.isVerifiedByAdmin === null ? (
                      <>
                        <button onClick={() => handleAcceptDoctor(doctor.id)} className="text-black text-xl">
                          <FiCheck className="text-green-500" size={24} />
                        </button>
                        <button onClick={() => handleRejectDoctor(doctor.id)} className="text-black text-xl">
                          <FiX className="text-red-500" size={24} />
                        </button>
                      </>
                    ) : doctor.isVerifiedByAdmin === true ? (
                      <span className="text-green-500">Terverifikasi</span>
                    ) : (
                      <span className="text-red-500">Tidak Terverifikasi</span>
                    )}
                  </div>
                </div>

                {/* Detail Dokter */}
                {selectedDoctorId === doctor.id && (
                  <div className="bg-white p-4 border-t border-gray-300">
                    <p className="text-sm text-gray-700">
                      <strong>Nama Lengkap:</strong> {doctor.name}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Alamat Email:</strong> {doctor.email}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Nomor Handphone:</strong> {doctor.telepon}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Jenis Profesi:</strong> {doctor.jenis_profesi || "Tidak disebutkan"}
                    </p>
                    <button onClick={() => openModal(doctor.sertifikat)} className="text-sm text-blue-500 underline mt-2">
                      Lihat Dokumen Izin Praktik / Sertifikat
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Dokter tidak ditemukan.</p>
          )}
        </div>
      </div>

      {/* Modal untuk Menampilkan Sertifikat */}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Lihat Dokumen Izin Praktik / Sertifikat" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl w-full">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Lihat Dokumen Izin Praktik / Sertifikat</h2>
          <iframe src={currentCertificate} alt="Dokumen Sertifikat" className="w-full"></iframe>
          <button onClick={closeModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
            Tutup
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default FormDaftarDokterAdmin;
