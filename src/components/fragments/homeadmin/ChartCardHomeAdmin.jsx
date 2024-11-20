import React from 'react';

const ChartCardHomeAdmin = ({ title }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Riwayat {title}</h2>
      <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
        {/* Placeholder untuk Chart */}
        <p className="text-gray-400">Chart Placeholder</p>
      </div>
    </div>
  );
};

export default ChartCardHomeAdmin;
