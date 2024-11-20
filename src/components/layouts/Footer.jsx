// src/components/fragments/landingpage/FooterSection.jsx
import React from "react";
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons

function FooterUser() {
  return (
    <footer className="bg-[#697077] py-6 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Teks hak cipta */}
        <p className="text-sm">ObesiFit @ 2024. All rights reserved.</p>

        {/* Sosial Media Icons */}
        <div className="flex gap-4">
          <a href="#" className="text-white hover:text-green-500 transition-all">
            <FaYoutube size={24} />
          </a>
          <a href="#" className="text-white hover:text-green-500 transition-all">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-white hover:text-green-500 transition-all">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-green-500 transition-all">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterUser;
