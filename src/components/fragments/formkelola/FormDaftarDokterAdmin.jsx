import React, { useState } from "react";
import { FiSearch, FiX, FiCheck } from "react-icons/fi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FormDaftarDokterAdmin = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDoctorIndex, setSelectedDoctorIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate();

  const doctors = [{ name: "Dr. Strange" }, { name: "Dr. Mario" }];

  const filteredDoctors = doctors.filter((doctor) => doctor.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleRejectDoctor = (doctorName) => {
    Swal.fire({
      title: "Yakin tolak pendaftaran dokter ini?",
      showCancelButton: true,
      confirmButtonText: "Simpan",
      cancelButtonText: "Batalkan",
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#dc3545",
      reverseButtons: true,
      html: `
      <div class="flex flex-col items-center space-y-4">
        <img src="src/assets/images 2/pop up 1.png" alt="Custom Image" class="mx-auto" style="width: 100px; height: 100px;">
      </div>
    `,
      customClass: {
        popup: "flex flex-col items-center",
        title: "text-xl font-semibold text-center",
        image: "my-4",
        confirmButton: "bg-green-500 text-white py-2 px-6 rounded-lg mt-4",
        cancelButton: "bg-red-500 text-white py-2 px-6 rounded-lg mt-4",
      },
      // Action ketika tombol Keluar ditekan
      preConfirm: () => {
        navigate("/daftardokter-admin");
        return true;
      },
    });
  };

  const handleAcceptDoctor = (doctorName) => {
    Swal.fire({
      title: "Yakin terima pendaftaran dokter ini?",
      showCancelButton: true,
      confirmButtonText: "Simpan",
      cancelButtonText: "Batalkan",
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#dc3545",
      reverseButtons: true,
      html: `
      <div class="flex flex-col items-center space-y-4">
        <img src="src/assets/images 2/pop up 1.png" alt="Custom Image" class="mx-auto" style="width: 100px; height: 100px;">
      </div>
    `,
      customClass: {
        popup: "flex flex-col items-center",
        title: "text-xl font-semibold text-center",
        image: "my-4",
        confirmButton: "bg-green-500 text-white py-2 px-6 rounded-lg mt-4",
        cancelButton: "bg-red-500 text-white py-2 px-6 rounded-lg mt-4",
      },
      // Action ketika tombol Keluar ditekan
      preConfirm: () => {
        navigate("/daftardokter-admin");
        return true;
      },
    });
  };
  const handleShowDocument = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Persetujuan Dokter </h2>
          <p className="text-4xl font-bold text-gray-800">10</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Pendaftaran Dokter</h2>
          <p className="text-4xl font-bold text-gray-800">48</p>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Temukan Pendaftaran Dokter</h2>

        {/* Search Bar */}
        <div className="mb-4 flex items-center border rounded-lg bg-gray-50">
          <FiSearch className="text-gray-500 mx-3" size={20} />
          <input type="text" placeholder="Temukan laporan" value={searchQuery} onChange={handleSearchChange} className="w-full p-3 bg-transparent focus:outline-none" />
        </div>

        {/* Daftar Dokter */}
        <div>
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor, index) => (
              <div key={index} className="relative flex flex-col bg-gray-100 p-4 rounded-lg mb-2 text-gray-400">
                {/* Informasi Singkat Dokter */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img src="src/assets/images 2/pp.jpg" alt="profil dokter" className="w-10 h-10 rounded-full mr-4" />
                    <span className="font-semibold text-sm">{doctor.name}</span>
                  </div>

                  {/* Tombol Aksi */}
                  <div className="flex items-center space-x-3">
                    <button onClick={() => handleRejectDoctor(doctor.name)} className="text-black text-xl">
                      <FiX className="text-red-500" size={24} />
                    </button>
                    <button onClick={() => handleAcceptDoctor(doctor.name)} className="text-black text-xl">
                      <FiCheck className="text-green-500" size={24} />
                    </button>
                  </div>
                </div>

                {/* Tombol Lihat Selengkapnya */}
                <button onClick={() => setSelectedDoctorIndex(selectedDoctorIndex === index ? null : index)} className="text-gray-500 text-sm">
                  {selectedDoctorIndex === index ? "Tutup" : "Lihat Selengkapnya"}
                </button>

                {/* Detail Dokter */}
                {selectedDoctorIndex === index && (
                  <div className="bg-white mt-3 p-3 rounded-lg shadow">
                    <p>
                      <strong>Nama Lengkap :</strong> {doctor.name}
                    </p>
                    <p>
                      <strong>Alamat Email Professional :</strong> mariobros31@business.com
                    </p>
                    <p>
                      <strong>Nomor Handphone :</strong> 089243294023
                    </p>
                    <p>
                      <strong>Jenis Profesi:</strong> Dokter Umum
                    </p>
                    <p className="text-blue-500 mt-2 cursor-pointer" onClick={() => handleShowDocument("src/assets/images 2/izin praktek.jpg")}>
                      Lihat Dokumen Izin Praktik/Sertifikat
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Dokter tidak ditemukan.</p>
          )}
        </div>

        {/* Modal Gambar */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
              <button className="absolute top-2 right-2 text-black text-2xl" onClick={handleCloseModal}>
                <FiX />
              </button>
              <img src={modalImage} alt="Dokumen" className="w-full rounded-lg" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormDaftarDokterAdmin;
