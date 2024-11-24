import React, { useState, useEffect } from "react";
import { FiSearch, FiCheck, FiX } from "react-icons/fi";
import Swal from "sweetalert2";
import { getAllUsers, verifyDokter, rejectDokter } from "@/services/users.config";

const FormDaftarDokterAdmin = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Ambil data dokter dari backend
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await getAllUsers();
        const dokterData = response.data.filter((user) => user.role.id === 3); // Filter hanya dokter
        setDoctors(dokterData);
      } catch (error) {
        console.error("Gagal mengambil data dokter:", error.message);
      }
    };

    fetchDoctors();
  }, []);

  // Fungsi untuk menangani input pencarian
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
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

  // Filter daftar dokter berdasarkan pencarian
  const filteredDoctors = doctors.filter((doctor) => doctor.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
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
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Temukan Pendaftaran Dokter</h2>
        <div className="mb-4 flex items-center border rounded-lg bg-gray-50">
          <FiSearch className="text-gray-500 mx-3" size={20} />
          <input type="text" placeholder="Cari dokter" value={searchQuery} onChange={handleSearchChange} className="w-full p-3 bg-transparent focus:outline-none" />
        </div>

        {/* Daftar Dokter */}
        <div>
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="relative flex flex-col bg-gray-100 p-4 rounded-lg mb-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img src={`http://localhost:4000/public/images/${doctor.images}`} alt="profil dokter" className="w-10 h-10 rounded-full mr-4" />
                    <span className="font-semibold text-sm">{doctor.name}</span>
                  </div>
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
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Dokter tidak ditemukan.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormDaftarDokterAdmin;
