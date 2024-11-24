import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerUser } from "@/services/auth.config"; // Fungsi API untuk register user

export default function FormRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telepon: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {
      name: "",
      email: "",
      telepon: "",
      password: "",
      confirmPassword: "",
    };

    // Validasi Form
    if (!formData.name) newErrors.name = "Nama lengkap wajib diisi";
    if (!formData.email) {
      newErrors.email = "Alamat email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Alamat email tidak valid";
    }
    if (!formData.telepon) newErrors.telepon = "Nomor telepon wajib diisi";
    else if (!/^\d+$/.test(formData.telepon)) {
      newErrors.telepon = "Nomor telepon hanya boleh berisi angka";
    }
    if (!formData.password) newErrors.password = "Kata sandi wajib diisi";
    else if (formData.password.length < 6) {
      newErrors.password = "Kata sandi harus minimal 6 karakter";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi kata sandi wajib diisi";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Kata sandi tidak cocok";
    }

    // Jika ada error, hentikan proses
    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    // Kirim data ke API jika validasi berhasil
    try {
      const response = await registerUser(formData);
      console.log("Pendaftaran berhasil:", response);
      // Setelah berhasil, arahkan ke halaman OTP
      navigate("/verifyotp", { state: { email: formData.email } });
    } catch (error) {
      console.error("Gagal mendaftar:", error);
      setErrors({
        ...newErrors,
        apiError: error.message || "Terjadi kesalahan saat mendaftar",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mt-2">
      <div className="space-y-1">
        <Label htmlFor="name">Nama Lengkap</Label>
        <Input id="name" type="text" placeholder="Masukkan nama lengkap" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      <div className="space-y-1">
        <Label htmlFor="email">Alamat Email</Label>
        <Input id="email" type="email" placeholder="Masukkan alamat email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="space-y-1">
        <Label htmlFor="telepon">Nomor Telepon</Label>
        <Input id="telepon" type="tel" placeholder="Masukkan nomor telepon" value={formData.telepon} onChange={(e) => setFormData({ ...formData, telepon: e.target.value })} />
        {errors.telepon && <p className="text-red-500">{errors.telepon}</p>}
      </div>
      <div className="space-y-1">
        <Label htmlFor="password">Kata Sandi</Label>
        <Input id="password" type="password" placeholder="Masukkan kata sandi" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>
      <div className="space-y-1">
        <Label htmlFor="confirmPassword">Konfirmasi Kata Sandi</Label>
        <Input id="confirmPassword" type="password" placeholder="Masukkan ulang kata sandi" value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
      </div>
      {errors.apiError && <p className="text-red-500">{errors.apiError}</p>}
      <Button type="submit" className="w-full button-primary text-white">
        Daftar Sekarang
      </Button>
    </form>
  );
}
