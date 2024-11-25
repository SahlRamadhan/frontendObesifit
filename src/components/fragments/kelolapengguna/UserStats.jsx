import React from "react";
import { useEffect, useState } from "react";
import { getStatisticUsers } from "@/services/users.config";

const UserStats = () => {
  const [stats, setStats] = useState({ totalUsers: 0, activeUsers: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getStatisticUsers();
      setStats(data);
    };
    fetchStats();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Total Pengguna */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Pengguna</h2>
        <p className="text-4xl font-bold text-gray-800">{stats.totalUsers}</p>
      </div>
      {/* Jumlah Pengguna Aktif */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Jumlah Pengguna Aktif</h2>
        <p className="text-4xl font-bold text-gray-800">{stats.activeUsers}</p>
      </div>
    </div>
  );
};

export default UserStats;
