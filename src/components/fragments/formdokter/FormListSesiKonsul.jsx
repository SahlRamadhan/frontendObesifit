import React, { useState } from "react";
import { FiSearch, FiEye, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input";    
import { Label } from "@/components/ui/label";    

export default function FormListSesiKonsul() {
  const [sessions, setSessions] = useState([
    {
      id: 1,
      name: "Shaleh Petarunx",
      status: "Terakhir online 2 jam yang lalu",
      avatar: "src/assets/images 2/profil konsul 1.jpg",
    },
    {
      id: 2,
      name: "PEKORAAA",
      status: "Online",
      avatar: "src/assets/images 2/profil konsul 2.jpg",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Filter sessions based on search input
  const filteredSessions = sessions.filter((session) =>
    session.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle delete session
  const handleDelete = (id) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data sesi ini akan dihapus secara permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        setSessions((prevSessions) =>
          prevSessions.filter((session) => session.id !== id)
        );
        Swal.fire("Dihapus!", "Data sesi telah dihapus.", "success");
      }
    });
  };

  // Handle view session details
  const handleView = (name) => {
    Swal.fire("Detail Sesi", `Anda sedang melihat sesi: ${name}`, "info");
  };

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
            <li
              key={session.id}
              className={`flex items-center justify-between p-4 rounded-md shadow-sm ${
                session.name === "Shaleh Petarunx"
                  ? "bg-gray-100"
                  : session.name === "PEKORAAA"
                  ? "bg-gray-100"
                  : "bg-gray-50"
              }`}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={session.avatar}
                  alt={session.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">{session.name}</p>
                  <p className="text-sm text-gray-500">{session.status}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  type="button"
                  className="p-2 bg-gray-200 hover:bg-red-200 rounded-md"
                  onClick={() => handleDelete(session.id)}
                >
                  <FiTrash2 className="text-black" size={20} />
                </Button>
                <Button
                  type="button"
                  className="p-2 bg-gray-200 hover:bg-gray-300 rounded-md"
                  onClick={() => handleView(session.name)}
                >
                  <FiEye className="text-gray-600" size={20} />
                </Button>
              </div>
            </li>
          ))
        ) : (
          <li className="text-center text-gray-500">
            Tidak ada sesi yang sesuai.
          </li>
        )}
      </ul>
    </div>
  );
}
