import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaStethoscope, FaFileAlt, FaVideo, FaComments, FaCreditCard, FaClipboardList } from "react-icons/fa";

const SidebarHomeAdmin = () => {
  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, link: "/homeadmin" },
    { name: "Kelola Pengguna", icon: <FaUsers />, link: "/kelolapengguna" },
    { name: "Kelola Dokter", icon: <FaStethoscope />, link: "/kelola-dokter" },
    { name: "Kelola Artikel", icon: <FaFileAlt />, link: "/kelolaartikel" },
    { name: "Kelola Video", icon: <FaVideo />, link: "/kelolavideo" },
    { name: "Kelola Chat", icon: <FaComments />, link: "/kelolachat" },
    { name: "Kelola Pembayaran", icon: <FaCreditCard />, link: "/kelola-pembayaran" },
    { name: "Kelola Pendaftaran Dokter", icon: <FaClipboardList />, link: "/daftardokter-admin" },
  ];

  return (
    <div className="fixed top-0 left-0 h-full bg-white text-black shadow-lg pt-[80px]">
      {/* Responsive Sidebar */}
      <div className="hidden md:block w-[250px]">
        {/* Sidebar Full View */}
        <ul className="space-y-4 px-6">
          {menuItems.map((item, index) => (
            <li key={index} className="rounded-lg">
              <Link to={item.link} className="flex items-center text-black hover:text-white hover:bg-gray-700 p-3 rounded-lg transition">
                <span className="mr-4 text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:hidden w-[80px]">
        {/* Sidebar Icons Only */}
        <ul className="space-y-4 px-4">
          {menuItems.map((item, index) => (
            <li key={index} className="rounded-lg">
              <Link to={item.link} className="flex justify-center text-black hover:text-white hover:bg-gray-700 p-3 rounded-lg transition">
                <span className="text-xl">{item.icon}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarHomeAdmin;
