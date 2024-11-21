import React from "react";

const StatsCardsHomeAdmin = () => {
  const stats = [
    { title: "Total Pengguna", value: 896 },
    { title: "Total Dokter", value: 28 },
    { title: "Total Artikel", value: 30 },
    { title: "Total Video", value: 30 },
    { title: "Pengguna Aktif", value: 17 },
    { title: "Dokter Aktif", value: 2 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold text-gray-700">{stat.title}</h2>
          <p className="text-4xl font-bold text-gray-800 mt-2">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCardsHomeAdmin;
