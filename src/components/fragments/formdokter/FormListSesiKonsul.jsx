import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiEye, FiX } from "react-icons/fi";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { fetchSession, closeSession } from "@/services/chat.config";
import { useAuth } from "@/context/AuthContext";
import socket from "@/services/socket.io"; // Import konfigurasi Socket.IO

export default function FormListSesiKonsul() {
  const [sessions, setSessions] = useState([]); // State untuk daftar sesi
  const [searchTerm, setSearchTerm] = useState(""); // State untuk pencarian
  const navigate = useNavigate();
  const { userData } = useAuth(); // Ambil data user dari context

  useEffect(() => {
    const loadSessions = async () => {
      if (!userData) return;

      try {
        const role = userData.role_id === 3 ? "dokter" : "user"; // Tentukan role user
        const response = await fetchSession(role, userData.id);
        setSessions(response.sessions || []);
      } catch (error) {
        console.error("Gagal memuat sesi konsultasi:", error);
        Swal.fire("Error!", "Gagal memuat sesi konsultasi.", "error");
      }
    };

    loadSessions();

    // Mendengarkan event notifikasi pesan baru
    socket.on("newMessageNotification", (notification) => {
      console.log("Pesan baru diterima:", notification);

      // Tandai sesi dengan pesan baru
      setSessions((prevSessions) =>
        prevSessions.map((session) =>
          session.id === notification.session_id
            ? { ...session, hasNewMessage: true } // Tambahkan indikator pesan baru
            : session
        )
      );
    });

    return () => {
      socket.off("newMessageNotification"); // Hapus listener saat komponen unmount
    };
  }, [userData]);

  const handleView = (sessionId) => {
    // Reset notifikasi pesan baru
    setSessions((prevSessions) => prevSessions.map((session) => (session.id === sessionId ? { ...session, hasNewMessage: false } : session)));

    navigate(`/chat/dokter/${sessionId}`); // Navigasi ke halaman chat
  };

  const handleCloseSession = async (sessionId) => {
    Swal.fire({
      title: "Akhiri sesi?",
      text: "Sesi ini akan diakhiri!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, akhiri!",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await closeSession(sessionId);
          setSessions((prevSessions) => prevSessions.map((session) => (session.id === sessionId ? { ...session, status: "inactive" } : session)));
          Swal.fire("Berhasil!", "Sesi telah diakhiri.", "success");
        } catch (error) {
          console.error("Gagal mengakhiri sesi:", error);
          Swal.fire("Error!", "Gagal mengakhiri sesi.", "error");
        }
      }
    });
  };

  const filteredSessions = Array.isArray(sessions) ? sessions.filter((session) => session.user?.name?.toLowerCase().includes(searchTerm.toLowerCase())) : [];

  return (
    <div className="bg-white border border-gray-300 shadow-md rounded-md p-4">
      <div className="mb-4">
        <Label htmlFor="search" className="block text-black font-semibold mt-2">
          Temukan Sesi Konsultasi
        </Label>
        <div className="relative mt-4">
          <Input
            type="text"
            id="search"
            placeholder="Temukan laporan"
            className="w-full border-gray-200 rounded-md shadow-sm pl-10 pr-4 py-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
      </div>
      <ul className="space-y-4">
        {filteredSessions.length > 0 ? (
          filteredSessions.map((session) => (
            <li key={session.id} className="flex items-center justify-between p-4 rounded-md shadow-sm bg-gray-100">
              <div className="flex items-center space-x-4">
                <img src={session.user?.images || "/placeholder-image.png"} alt={session.user?.name || "User"} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-medium">{session.user?.name}</p>
                  <p className={`text-sm ${session.hasNewMessage ? "text-red-500 font-bold" : "text-gray-500"}`}>{session.hasNewMessage ? "Pesan Baru!" : session.status}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button type="button" className="p-2 bg-gray-200 hover:bg-gray-300 rounded-md" onClick={() => handleView(session.id)}>
                  <FiEye className="text-gray-600" size={20} />
                </Button>
                {session.status === "active" && (
                  <Button type="button" className="p-2 bg-red-200 hover:bg-red-300 rounded-md" onClick={() => handleCloseSession(session.id)}>
                    <FiX className="text-red-600" size={20} />
                  </Button>
                )}
              </div>
            </li>
          ))
        ) : (
          <li className="text-center text-gray-500">Belum ada sesi konsultasi yang aktif.</li>
        )}
      </ul>
    </div>
  );
}
