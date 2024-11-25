import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { updateUser } from "@/services/users.config";
import Swal from "sweetalert2";

export default function FormEditProfil() {
  const { userData, updateUserData } = useAuth(); // Ambil fungsi updateUserData dari AuthContext
  const [name, setName] = useState(userData?.name || ""); // Inisialisasi dari userData
  const [email, setEmail] = useState(userData?.email || "");
  const [phone, setPhone] = useState(userData?.telepon || "");
  const [profileImage, setProfileImage] = useState(null); // Untuk menyimpan file gambar baru

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      // Siapkan form data untuk API
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("telepon", phone);
      if (profileImage instanceof File) {
        formData.append("images", profileImage); // Tambahkan gambar hanya jika ada file baru
      }

      // Panggil API untuk update
      const updatedUser = await updateUser(userData.id, formData);

      // Perbarui data di AuthContext
      updateUserData(updatedUser.data);

      // Tampilkan notifikasi berhasil
      Swal.fire("Berhasil!", "Profil berhasil diperbarui.", "success");
    } catch (error) {
      console.error("Gagal memperbarui profil:", error);
      Swal.fire("Gagal!", "Terjadi kesalahan saat memperbarui profil.", "error");
    }
  };

  return (
    <form className="flex flex-col space-y-6">
      {/* Ganti Foto Profil */}
      <div className="w-full flex flex-col items-center">
        <img src={profileImage ? URL.createObjectURL(profileImage) : userData.images || "/default-profile.jpg"} alt="Foto Profil" className="w-32 h-32 rounded-full shadow-md" />
        <label htmlFor="upload" className="mt-4 bg-gray-700 text-white py-2 px-4 rounded-md cursor-pointer">
          Ganti Foto Profil
        </label>
        <Input id="upload" type="file" accept="images/*" className="hidden" onChange={handleFileChange} />
      </div>

      {/* Nama */}
      <div>
        <Label htmlFor="name">Nama Lengkap</Label>
        <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      {/* Telepon */}
      <div>
        <Label htmlFor="phone">Telepon</Label>
        <Input id="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>

      {/* Tombol Simpan */}
      <Button className="bg-green-500 text-white py-2 px-4 rounded-md" onClick={handleSave}>
        Simpan
      </Button>
    </form>
  );
}
