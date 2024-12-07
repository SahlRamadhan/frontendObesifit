import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { getAllTransaksi } from "@/services/transaksi.config";

function Navbar({ showKeluar = true }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk toggle menu
  const [isMobile, setIsMobile] = useState(false); // State untuk mendeteksi mobile view
  const [isPremium, setIsPremium] = useState(false); // State untuk status premium
  const navigate = useNavigate();
  const { logout, userData } = useAuth();

  // Deteksi ukuran layar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile: ukuran layar <= 768px
    };

    handleResize(); // Panggil saat komponen pertama kali dirender
    window.addEventListener("resize", handleResize); // Tambahkan event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Hapus event listener saat komponen di-unmount
    };
  }, []);

 useEffect(() => {
   const checkPremiumStatus = async () => {
     try {
       if (userData) {
         const allTransactions = await getAllTransaksi(); // Panggil endpoint getAllTransaksi

         // Filter transaksi berdasarkan user dan status APPROVED
         const userTransactions = allTransactions.filter(
           (trx) =>
             trx.user.id === userData.id && // Transaksi milik user saat ini
             trx.status.id === 2 && // Status APPROVED
             new Date(trx.end_date) > new Date() // Belum kadaluwarsa
         );

         setIsPremium(userTransactions.length > 0); // Set premium jika ada transaksi yang sesuai
       }
     } catch (error) {
       setIsPremium(false); // Default ke false jika terjadi error
     }
   };

   checkPremiumStatus();
 }, [userData]);

  // Fungsi Logout
  const handleLogout = async () => {
    try {
      await logout(); // Panggil fungsi logout dari AuthContext
      navigate("/login"); // Redirect ke halaman login
    } catch (error) {
      console.error("Logout gagal:", error);
    }
  };

  return (
    <nav className={`${isMobile ? "fixed top-0 left-0 w-full z-50" : ""} flex items-center justify-between px-5 py-6 bg-gray-50 shadow-md md:px-20`}>
      {/* Logo */}
      <div className="text-2xl md:text-4xl font-bold text-black">ObesiFit</div>

      {/* Menu Navigasi untuk Desktop */}
      <div className="hidden md:flex items-center space-x-14 text-gray-700 text-lg md:text-xl font-semibold">
        <ul className="flex space-x-6 md:space-x-12 items-center">
          <li>
            <Link to="/homeuser" className="hover:text-black cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/artikeluser" className="hover:text-black cursor-pointer">
              Artikel
            </Link>
          </li>
          <li>
            <Link to="/videouser" className="hover:text-black cursor-pointer">
              Video
            </Link>
          </li>
          <li>
            <Link to="/kalkulator-bmi" className="hover:text-black cursor-pointer">
              Kalkulator
            </Link>
          </li>
          <li>
            <Link to="/list-dokter" className="hover:text-black cursor-pointer">
              Konsultasi
            </Link>
          </li>
          <li>
            <Link to="/edit-profil">
              <img src={userData && userData.images} alt="Profile" className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer" />
            </Link>
          </li>
          {isPremium && <li className="text-green-600 font-bold">PREMIUM</li>}
          {showKeluar && (
            <li>
              <button onClick={handleLogout} className="px-3 py-1 md:px-4 md:py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-md">
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>

      {/* Hamburger Menu untuk Mobile */}
      <div className="md:hidden flex items-center">
        <button className="text-gray-700 hover:text-black focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </div>

      {/* Fullscreen Menu untuk Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#D5EFE9] bg-opacity-90 flex flex-col items-center justify-center z-50 text-gray-700">
          <ul className="space-y-6 text-xl font-semibold text-center">
            <li>
              <Link to="/homeuser" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/artikeluser" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                Artikel
              </Link>
            </li>
            <li>
              <Link to="/videouser" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                Video
              </Link>
            </li>
            <li>
              <Link to="/kalkulator-bmi" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                Kalkulator
              </Link>
            </li>
            <li>
              <Link to="/list-dokter" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                Konsultasi
              </Link>
            </li>
            <li>
              <Link to="/edit-profil" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                Profil
              </Link>
            </li>
            {isPremium && <li className="text-green-600 font-bold">PREMIUM</li>}
            {showKeluar && (
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="px-3 py-1 text-white bg-red-500 hover:bg-gray-300 rounded-lg shadow-md"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-5 right-5 text-gray-700 text-3xl">
            &times;
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
