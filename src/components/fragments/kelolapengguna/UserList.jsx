import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

const UserList = () => {
  const [users, setUsers] = useState([
    { name: "Agus", profilePic: "https://via.placeholder.com/40" },
    { name: "Atox Dalang", profilePic: "https://via.placeholder.com/40" },
    { name: "BeyonceASLI", profilePic: "https://via.placeholder.com/40" },
    { name: "DINOKUNING#21", profilePic: "https://via.placeholder.com/40" },
    { name: "Leonardo da Vinci", profilePic: "https://via.placeholder.com/40" },
    { name: "PrabowoKW", profilePic: "https://via.placeholder.com/40" },
    { name: "PEKORAAA", profilePic: "https://via.placeholder.com/40" },
    { name: "Must a nice", profilePic: "https://via.placeholder.com/40" },
    { name: "UpinftIpin", profilePic: "https://via.placeholder.com/40" },
    { name: "ShalehPetarunx", profilePic: "https://via.placeholder.com/40" },
  ]); // State untuk daftar pengguna
  const [searchTerm, setSearchTerm] = useState(""); // State untuk input pencarian

  // Filter daftar pengguna berdasarkan input pencarian
  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Temukan Pengguna</h2>

      {/* Search Bar */}
      <div className="mb-6 flex items-center border rounded-lg bg-gray-50 p-2 shadow-sm">
        <FiSearch className="text-gray-500 mx-3" size={20} />
        <input type="text" placeholder="Cari pengguna berdasarkan nama" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full bg-transparent focus:outline-none p-2" />
      </div>

      {/* Daftar Pengguna */}
      <div>
        {filteredUsers.length > 0 ? (
          <ul className="space-y-4">
            {filteredUsers.map((user, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex items-center space-x-4">
                  <img src={user.profilePic} alt="user" className="w-12 h-12 rounded-full object-cover" />
                  <p className="text-gray-700 font-medium">{user.name}</p>
                </div>
                <FiX
                  className="text-red-500 cursor-pointer hover:text-red-700 transition"
                  size={24}
                  onClick={() => {
                    setUsers(users.filter((u) => u.name !== user.name));
                  }}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">Pengguna tidak ditemukan.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
