import React from 'react';

const SidebarKelolaArtikel = () => {
  return (
    <div className="w-1/4 h-screen bg-gray-100 p-8">
      {/* Judul Sidebar */}
      <h1 className="text-4xl font-bold mb-10">ObesiFit</h1>
      <ul className="space-y-8">
        {[
          { name: 'Dashboard', icon: '🏠' },
          { name: 'Kelola Pengguna', icon: '👥' },
          { name: 'Kelola Dokter', icon: '🩺' },
          { name: 'Kelola Artikel', icon: '📄' },
          { name: 'Kelola Video', icon: '🎥' },
          { name: 'Kelola Pembayaran', icon: '💳' },
          { name: 'Kelola Pendaftaran Dokter', icon: '📝' },
        ].map((item, index) => (
          <li
            key={index}
            className="flex items-center text-gray-700 hover:text-black cursor-pointer"
          >
            <span className="mr-6 text-3xl">{item.icon}</span> {/* Icon lebih besar */}
            <span className="text-2xl font-semibold">{item.name}</span> {/* Teks lebih besar */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarKelolaArtikel;
