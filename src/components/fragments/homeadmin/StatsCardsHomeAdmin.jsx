import React from "react";

const StatsCardsHomeAdmin = ({ stats }) => {
  const statItems = [
    { title: "Total Pengguna", value: stats.totalUsers },
    { title: "Total Dokter", value: stats.totalDoctors },
    { title: "Total Artikel", value: stats.totalArticles },
    { title: "Total Video", value: stats.totalVideos },
    { title: "Pengguna Aktif", value: stats.activeUsers },
    { title: "Dokter Aktif", value: stats.activeDoctors },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {statItems.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold text-gray-700">{stat.title}</h2>
          <p className="text-4xl font-bold text-gray-800 mt-2">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCardsHomeAdmin;
