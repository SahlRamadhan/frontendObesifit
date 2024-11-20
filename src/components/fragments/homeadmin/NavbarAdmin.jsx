import React from 'react';

const NavbarAdmin = () => {
  return (
    <div className="bg-white flex justify-between items-center p-5 shadow-md">
      <input
        type="text"
        placeholder="Mau cari apa nih?"
        className="border rounded-lg p-2 w-1/3"
      />
      <div className="flex items-center space-x-4">
        <span>🔔</span>
        <img
          src="https://via.placeholder.com/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default NavbarAdmin;
