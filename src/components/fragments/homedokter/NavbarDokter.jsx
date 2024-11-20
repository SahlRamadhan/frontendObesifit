import React from 'react';

function NavbarDokter() {
  return (
    <nav className="flex items-center justify-between px-20 py-6 bg-gray-50 shadow-md">
      {/* Logo */}
      <div className="text-4xl font-bold text-black">ObesiFit</div>

      {/* Menu Navigasi */}
      <div className="flex items-center space-x-14 text-gray-700 text-xl font-semibold ml-auto">
        <ul className="flex space-x-12 items-center">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">Tentang Kami</li>
          <li className="hover:text-black cursor-pointer">Fitur</li>
          <li className="hover:text-black cursor-pointer">Testimoni</li>

          {/* Profile Image */}
          <li>
            <img 
              src="your-profile-image-url.jpg" // Ganti dengan URL gambar profil kamu
              alt="Profile" 
              className="w-10 h-10 rounded-full cursor-pointer" 
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarDokter;
