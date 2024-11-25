import React, { useState, useEffect } from "react";
import { FiSearch, FiTrash } from "react-icons/fi";
import Swal from "sweetalert2"; // Pastikan sudah diinstall: npm install sweetalert2
import { getAllUsers, deleteUser } from "@/services/users.config";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch semua pengguna dengan role.id === 2
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        const userData = response.data.filter((user) => user.role.id === 2);
        setUsers(userData);
      } catch (error) {
        console.error("Gagal mengambil data pengguna:", error.message);
      }
    };

    fetchUsers();
  }, []);

  // Fungsi untuk menangani perubahan pencarian
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Fungsi untuk menghapus pengguna dengan SweetAlert
  const handleDeleteUser = async (id, userName) => {
    try {
      // SweetAlert untuk konfirmasi
      const result = await Swal.fire({
        title: "Yakin mau hapus pengguna ini?",
        text: `Pengguna ${userName} akan dihapus dari daftar.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Konfirmasi",
        cancelButtonText: "Batalkan",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        reverseButtons: true,
      });

      if (result.isConfirmed) {
        // Jika dikonfirmasi, hapus pengguna
        await deleteUser(id);

        // Perbarui state setelah penghapusan berhasil
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));

        // Tampilkan notifikasi sukses
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: `Pengguna ${userName} telah dihapus.`,
        });
      }
    } catch (error) {
      console.error("Error deleting user:", error);

      // Tampilkan notifikasi gagal
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Terjadi kesalahan saat menghapus pengguna. Silakan coba lagi.",
      });
    }
  };

  // Filter pengguna berdasarkan pencarian
  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Temukan Pengguna</h2>

      {/* Search Bar */}
      <div className="mb-6 flex items-center border rounded-lg bg-gray-50 p-2 shadow-sm">
        <FiSearch className="text-gray-500 mx-2 sm:mx-3" size={20} />
        <input type="text" placeholder="Cari pengguna berdasarkan nama" value={searchTerm} onChange={handleSearchChange} className="w-full bg-transparent focus:outline-none p-1 sm:p-2" />
      </div>

      {/* Daftar Pengguna */}
      <div>
        {filteredUsers.length > 0 ? (
          <ul className="space-y-3 sm:space-y-4">
            {filteredUsers.map((user, index) => (
              <li key={index} className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <img src={user.images || "/default-profile.jpg"} alt="user" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
                  <p className="text-gray-700 text-sm sm:text-base font-medium">{user.name}</p>
                </div>
                <FiTrash
                  className="text-red-500 cursor-pointer hover:text-red-700 transition"
                  size={24}
                  onClick={() => handleDeleteUser(user.id, user.name)} // Kirim id dan nama pengguna
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
