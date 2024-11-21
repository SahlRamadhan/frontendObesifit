import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imagesAdmin from "@/assets/images 2/profil admin.jpg";

const NavbarAdmin = () => {
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleProfileClick = () => {
    navigate("/editprofil-admin"); // Ganti dengan path halaman Edit Profil Anda
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible); // Toggle visibilitas dropdown
  };

  return (
    <div className="bg-white flex justify-between items-center px-6 py-4 shadow-md fixed top-0 left-0 w-full z-10">
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl font-bold text-gray-800">ObesiFit</h1>
      </div>
      <input type="text" placeholder="Mau cari apa nih?" className="border rounded-full px-4 py-2 w-1/3 bg-gray-100 text-gray-600 focus:outline-none" />
      <div className="flex items-center space-x-6 relative">
        {/* Notifikasi */}
        <div
          className="flex items-center space-x-2 text-gray-600 cursor-pointer"
          onClick={toggleDropdown} // Tampilkan/semmbunyikan dropdown
        >
          <span>🔔</span>
          <span>Notifikasi</span>
        </div>

        {/* Dropdown Notifikasi */}
        {isDropdownVisible && (
          <div className="absolute top-12 right-0 bg-white shadow-md rounded-lg p-4 w-64">
            <p className="text-gray-700 font-medium">Notifikasi</p>
            <ul className="mt-2 space-y-2">
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Notifikasi 1</li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Notifikasi 2</li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Notifikasi 3</li>
            </ul>
          </div>
        )}

        {/* Profil */}
        <img
          src={imagesAdmin}
          alt="profile"
          className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
          onClick={handleProfileClick} // Tambahkan onClick untuk navigasi
        />

        {/* Tombol Keluar */}
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">Keluar</button>
      </div>
    </div>
  );
};

export default NavbarAdmin;
