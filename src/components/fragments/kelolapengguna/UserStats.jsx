import React from 'react';

const UserStats = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Total Pengguna</h2>
        <p className="text-4xl font-bold text-gray-800">896</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Jumlah Pengguna Aktif</h2>
        <p className="text-4xl font-bold text-gray-800">48</p>
      </div>
    </div>
  );
};

export default UserStats;
