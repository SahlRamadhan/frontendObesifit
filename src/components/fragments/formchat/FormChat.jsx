import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import socket from "@/services/socket.io"; // Konfigurasi Socket.IO
import { fetchChat, fetchSession } from "@/services/chat.config";
import { useAuth } from "@/context/AuthContext";
import { FaArrowLeft, FaTrash } from "react-icons/fa";

export default function ChatForm() {
  const { sessionId } = useParams(); // Ambil sessionId dari URL
  const [messages, setMessages] = useState([]); // State untuk riwayat chat
  const [newMessage, setNewMessage] = useState(""); // State untuk pesan baru
  const [isSending, setIsSending] = useState(false); // Indikator pengiriman pesan
  const [partnerName, setPartnerName] = useState(""); // State untuk nama partner chat
  const { userData } = useAuth(); // Ambil data user dari AuthContext

  // Ambil riwayat chat dan data sesi
  useEffect(() => {
    if (!sessionId || !userData) return;

    const fetchChatData = async () => {
      try {
        // Ambil riwayat chat
        const chatResponse = await fetchChat(sessionId);
        setMessages(chatResponse.chat || []);

        // Ambil data sesi
        const role = userData.role_id === 3 ? "dokter" : "user";
        const sessionResponse = await fetchSession(role, userData.id);

        // Cari sesi yang sesuai dengan sessionId
        const currentSession = sessionResponse.sessions.find((session) => session.id === parseInt(sessionId));

        if (currentSession) {
          // Set nama partner chat (dokter atau user)
          const partner = role === "dokter" ? currentSession.user?.name : currentSession.doctor?.name;
          setPartnerName(partner || "Partner");
        }
      } catch (error) {
        console.error("Error fetching chat or session data:", error.message);
      }
    };

    fetchChatData();
    socket.emit("joinRoom", sessionId);

    // Listener untuk pesan baru
    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Listener untuk pesan yang dihapus
    socket.on("messageDeleted", ({ messageId }) => {
      setMessages((prev) => prev.filter((message) => message.id !== messageId));
    });

    return () => {
      socket.off("receiveMessage");
      socket.off("messageDeleted");
    };
  }, [sessionId, userData]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !userData) return;

    setIsSending(true);
    socket.emit(
      "sendMessage",
      {
        session_id: sessionId,
        sender_id: userData.id,
        message: newMessage,
      },
      (ack) => {
        if (ack?.status === "error") {
          console.error("Pesan gagal terkirim:", ack.error);
        }
        setIsSending(false);
      }
    );

    setNewMessage("");
  };

  const handleDeleteMessage = (messageId) => {
    // Emit event untuk menghapus pesan
    socket.emit("deleteMessage", messageId, (response) => {
      if (response.status === "success") {
        console.log(`Message ${messageId} deleted successfully`);
      } else {
        console.error(`Failed to delete message: ${response.message}`);
      }
    });
  };

  if (!sessionId || !userData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header Chat */}
      <div className="bg-teal-600 text-white p-4 flex items-center">
        <button
          onClick={() => window.history.back()} // Navigasi ke halaman sebelumnya
          className="mr-4 p-2 rounded-full hover:bg-teal-700 transition"
        >
          <FaArrowLeft size={20} /> {/* Ikon Kembali */}
        </button>
        <h3 className="text-lg font-bold">{partnerName}</h3> {/* Nama Partner */}
      </div>

      {/* Messages Section */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-200">
        {messages.length === 0 ? (
          <p className="text-center text-gray-500">Belum ada pesan. Mulailah percakapan!</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className={`flex items-end mb-4 ${msg.sender_id === userData.id ? "justify-end" : "justify-start"}`}>
              {/* Profil Gambar Penerima */}
              {msg.sender_id !== userData.id && <img src={(msg.sender && msg.sender.images) || "/placeholder-image.png"} alt={(msg.sender && msg.sender.name) || "User"} className="w-10 h-10 rounded-full mr-2" />}

              {/* Gelembung Pesan */}
              <div className={`rounded-lg p-3 shadow-md max-w-xs relative ${msg.sender_id === userData.id ? "bg-teal-500 text-white" : "bg-white text-gray-900"}`}>
                <p className="text-sm">{msg.message}</p>
                <span className="text-xs text-gray-600 block mt-1">{msg.created_at ? new Date(msg.created_at).toLocaleTimeString() : "Waktu tidak tersedia"}</span>

                {/* Tombol Hapus Pesan */}
                {msg.sender_id === userData.id && (
                  <button onClick={() => handleDeleteMessage(msg.id)} className="absolute top-1 right-2 text-red-500 hover:text-red-700">
                    <FaTrash size={12} />
                  </button>
                )}
              </div>

              {/* Profil Gambar Pengirim */}
              {msg.sender_id === userData.id && <img src={userData.images || "/placeholder-image.png"} alt={userData.name || "Anda"} className="w-10 h-10 rounded-full ml-2" />}
            </div>
          ))
        )}
      </div>

      {/* Input Section */}
      <div className="p-4 bg-gray-100 flex items-center gap-2">
        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Tulis pesan..." className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
        <button onClick={handleSendMessage} disabled={isSending} className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow-sm disabled:bg-gray-400">
          {isSending ? "Mengirim..." : "Kirim"}
        </button>
      </div>
    </div>
  );
}
