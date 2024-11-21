import React from "react";
import { Link } from "react-router-dom";

const SidebarHomeAdmin = () => {
  const menuItems = [
    { name: "Dashboard", icon: "🏠", link: "/homeadmin" },
    { name: "Kelola Pengguna", icon: "👥", link: "/kelolapengguna" },
    { name: "Kelola Dokter", icon: "🩺", link: "/kelola-dokter" },
    { name: "Kelola Artikel", icon: "📄", link: "/kelola-artikel" },
    { name: "Kelola Video", icon: "🎥", link: "/kelola-video" },
    { name: "Kelola Pembayaran", icon: "💳", link: "/kelola-pembayaran" },
    { name: "Kelola Pendaftaran Dokter", icon: "📝", link: "/kelola-pendaftaran-dokter" },
  ];

  return (
    <div className="w-[250px] h-screen bg-white text-black fixed top-0 left-0 pt-[80px]">
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
  );
};

export default SidebarHomeAdmin;
