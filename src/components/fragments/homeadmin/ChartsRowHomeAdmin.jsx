import React from "react";

const ChartsRowHomeAdmin = () => {
  const chartTitles = ["Jumlah Pengguna Aktif", "Jumlah Artikel", "Jumlah Dokter Aktif", "Jumlah Video"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      {chartTitles.map((title, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">{title}</h2>
          <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Chart Placeholder</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChartsRowHomeAdmin;
