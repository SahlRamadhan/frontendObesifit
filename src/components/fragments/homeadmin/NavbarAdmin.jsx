import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";

const NavbarAdmin = () => {
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { userData, logout } = useAuth();

  const handleProfileClick = () => {
    navigate("/editprofil-admin");
  };
  // Fungsi Logout
  const handleLogout = async () => {
    try {
      await logout(); // Panggil fungsi logout dari AuthContext
      navigate("/login-admin"); // Redirect ke halaman login
    } catch (error) {
      console.error("Logout gagal:", error);
    }
  };

  return (
    <div className="bg-white flex flex-col md:flex-row justify-between items-center px-4 py-3 shadow-md fixed top-0 left-0 w-full z-10">
      {/* Logo */}
      <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
        <h1 className="text-2xl font-bold text-gray-800">
          <a href="/homeadmin">Obesifit</a>
        </h1>
        <button className="md:hidden text-gray-600 focus:outline-none" onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
          {/* Menu Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Search Bar */}
      <div className={`${isDropdownVisible ? "block" : "hidden"} md:flex w-full md:w-1/3 bg-gray-100 rounded-full px-4 py-2 mt-2 md:mt-0`}>
        <input type="text" placeholder="Mau cari apa nih?" className="w-full bg-transparent text-gray-600 focus:outline-none" />
      </div>

      {/* Right Section */}
      <div className={`${isDropdownVisible ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0 w-full md:w-auto`}>
        {/* Greeting */}
        <h2 className="text-sm font-semibold text-gray-600">Hallo, {userData.name}</h2>

        {/* Profile */}
        <div className="flex items-center space-x-2">
          <img src={userData.images} alt="profile" className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer" onClick={handleProfileClick} />
        </div>

        {/* Logout Button */}
        <button className="bg-red-500 text-white px-6 py-2 text-sm rounded-lg hover:bg-red-600 transition" onClick={handleLogout}>
          Keluar
        </button>
      </div>
    </div>
  );
};

export default NavbarAdmin;
