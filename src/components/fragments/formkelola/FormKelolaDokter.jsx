import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import Swal from "sweetalert2";

const FormKelolaDokter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const doctors = [
    {
      name: "Dr. Hermina Novida, Sp.PD, KEMD",
      profilePic: "src/assets/images 2/dokter 1.png",
    },
    {
      name: "Dr. Hendra Zufry, Sp.PD, KEMD",
      profilePic: "src/assets/images 2/dokter 2.png",
    },
    {
      name: "Dr. Hoo Yumilia, Sp.PD, KEMD",
      profilePic: "src/assets/images 2/profil dokter.jpg",
    },
    {
      name: "Dr. Johannes Purwoto, Sp.PD, KEMD",
      profilePic: "src/assets/images 2/dokter 4.jpg",
    },
    {
      name: "Dr. Indra Wijaya, Sp.PD, KEMD",
      profilePic: "src/assets/images 2/dokter 5.png",
    },
    {
      name: "Dr. I Gusti Ngurah Adhiartha, Sp.PD, KEMD",
      profilePic: "src/assets/images 2/dokter 6.png",
    },
  ];

  const filteredDoctors = doctors.filter((doctor) => doctor.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleRejectDoctor = (doctorName) => {
    Swal.fire({
      title: `Yakin mau hapus akun dokter ini?`,
      showCancelButton: true,
      confirmButtonText: "Konfirmasi",
      cancelButtonText: "Batalkan",
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#dc3545",
      reverseButtons: true,
      html: `<p>Dokter ${doctorName} akan dihapus dari daftar.</p>`,
      customClass: {
        popup: "flex flex-col items-center",
      },
    });
  };

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      {/* Statistik Dokter */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Dokter</h2>
          <p className="text-4xl font-bold text-gray-800">896</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Jumlah Dokter Aktif</h2>
          <p className="text-4xl font-bold text-gray-800">48</p>
        </div>
      </div>

      {/* Temukan Dokter Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Temukan Dokter</h2>

        {/* Search Bar */}
        <div className="mb-6 flex items-center border rounded-lg bg-gray-50 p-2 shadow-sm">
          <FiSearch className="text-gray-500 mx-3" size={20} />
          <input type="text" placeholder="Cari dokter berdasarkan nama" value={searchQuery} onChange={handleSearchChange} className="w-full bg-transparent focus:outline-none p-2" />
        </div>

        {/* Daftar Dokter */}
        <div>
          {filteredDoctors.length > 0 ? (
            <ul className="space-y-4">
              {filteredDoctors.map((doctor, index) => (
                <li key={index} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
                  <div className="flex items-center space-x-4">
                    <img src={doctor.profilePic} alt="profil dokter" className="w-12 h-12 rounded-full object-cover" />
                    <p className="text-gray-700 font-medium">{doctor.name}</p>
                  </div>
                  <FiX className="text-red-500 cursor-pointer hover:text-red-700 transition" size={24} onClick={() => handleRejectDoctor(doctor.name)} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">Dokter tidak ditemukan.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormKelolaDokter;
