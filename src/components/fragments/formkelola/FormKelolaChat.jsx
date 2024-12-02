import React, { useState, useEffect } from "react";
import { FiSearch, FiTrash } from "react-icons/fi";
import Swal from "sweetalert2";
import { getAllSessions, deleteSessionAndMessages } from "@/services/chat.config"; // Ganti dengan path service Anda
import { useAuth } from "@/context/AuthContext";

const FormKelolaSesi = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sessions, setSessions] = useState([]);
  const { userData } = useAuth(); // Pastikan hanya admin yang dapat menghapus sesi

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await getAllSessions(); // Ambil semua sesi
        setSessions(response.sessions || []);
      } catch (error) {
        console.error("Error fetching sessions:", error);
        Swal.fire("Error!", "Gagal memuat sesi konsultasi.", "error");
      }
    };

    fetchSessions();
  }, []);

  const handleDeleteSession = async (sessionId, sessionName) => {
    if (userData?.role_id !== 1) {
      Swal.fire("Error!", "Anda tidak memiliki izin untuk menghapus sesi ini.", "error");
      return;
    }

    try {
      const result = await Swal.fire({
        title: "Hapus sesi?",
        text: `Sesi ${sessionName} akan dihapus beserta seluruh pesan!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, hapus!",
        cancelButtonText: "Batal",
        confirmButtonColor: "#dc3545",
        cancelButtonColor: "#6c757d",
      });

      if (result.isConfirmed) {
        await deleteSessionAndMessages(sessionId); // Fungsi hapus sesi dari backend

        // Perbarui data setelah menghapus
        setSessions((prevSessions) => prevSessions.filter((session) => session.id !== sessionId));

        Swal.fire("Berhasil!", `Sesi ${sessionName} telah dihapus.`, "success");
      }
    } catch (error) {
      console.error("Error deleting session:", error);
      Swal.fire("Error!", "Gagal menghapus sesi.", "error");
    }
  };

  const filteredSessions = sessions.filter((session) => session.user?.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      {/* Statistik Sesi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Sesi</h2>
          <p className="text-4xl font-bold text-gray-800">{sessions.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Sesi Aktif</h2>
          <p className="text-4xl font-bold text-gray-800">{sessions.filter((session) => session.status === "active").length}</p>
        </div>
      </div>

      {/* Temukan Sesi Section */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Temukan Sesi</h2>

        {/* Search Bar */}
        <div className="mb-6 flex items-center border rounded-lg bg-gray-50 p-2 shadow-sm">
          <FiSearch className="text-gray-500 mx-2 sm:mx-3" size={20} />
          <input type="text" placeholder="Cari sesi berdasarkan nama pengguna" value={searchQuery} onChange={handleSearchChange} className="w-full bg-transparent focus:outline-none p-1 sm:p-2" />
        </div>

        {/* Daftar Sesi */}
        <div>
          {filteredSessions.length > 0 ? (
            <ul className="space-y-3 sm:space-y-4">
              {filteredSessions.map((session, index) => (
                <li key={index} className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <img src={session.user?.images || "/placeholder-image.png"} alt="profil pengguna" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
                    <p className="text-gray-700 text-sm sm:text-base font-medium">{session.user?.name}</p>
                  </div>
                  <FiTrash className="text-red-500 cursor-pointer hover:text-red-700 transition" size={24} onClick={() => handleDeleteSession(session.id, session.user?.name)} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">Sesi tidak ditemukan.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormKelolaSesi;
