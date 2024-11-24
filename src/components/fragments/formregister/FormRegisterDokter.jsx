import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Swal from "sweetalert2";
import { FiArrowLeft } from "react-icons/fi";
import { registerDokter } from "@/services/auth.config";

export default function FormRegisterDokter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telepon: "",
    jenis_profesi: "",
    password: "",
    confirmPassword: "",
    sertifikat: null,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, sertifikat: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {
      name: "",
      email: "",
      telepon: "",
      jenis_profesi: "",
      password: "",
      confirmPassword: "",
      sertifikat: "",
    };

    // Validasi data
    if (!formData.name) newErrors.name = "Nama lengkap wajib diisi";
    if (!formData.email) {
      newErrors.email = "Alamat email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Alamat email tidak valid";
    }
    if (!formData.telepon) {
      newErrors.telepon = "Nomor telepon wajib diisi";
    } else if (!/^\d+$/.test(formData.telepon)) {
      newErrors.telepon = "Nomor telepon hanya boleh berisi angka";
    }
    if (!formData.jenis_profesi) newErrors.jenis_profesi = "Jenis profesi wajib diisi";
    if (!formData.password) {
      newErrors.password = "Kata sandi wajib diisi";
    } else if (formData.password.length < 6) {
      newErrors.password = "Kata sandi harus minimal 6 karakter";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi kata sandi wajib diisi";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Kata sandi tidak cocok";
    }
    if (!formData.sertifikat) {
      newErrors.sertifikat = "Sertifikat wajib diunggah";
    }

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    // Kirim data ke API
    try {
      const response = await registerDokter(formData);

      Swal.fire({
        title: "Pendaftaran Berhasil!",
        html: `
          Admin akan segera mengkonfirmasi pendaftaran anda.
        `,
        confirmButtonText: "Kembali ke Halaman Login",
        confirmButtonColor: "#28a745",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login-dokter");
        }
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        telepon: "",
        jenis_profesi: "",
        password: "",
        confirmPassword: "",
        sertifikat: null,
      });
      setErrors({});
    } catch (error) {
      console.error("Gagal mendaftar:", error);
      setErrors({
        apiError: error.message || "Terjadi kesalahan saat mendaftar",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mt-2">
      <button onClick={() => navigate("/login-dokter")} className="absolute top-4 left-4 text-xl text-gray-600">
        <FiArrowLeft />
      </button>

      <div className="space-y-1">
        <Label htmlFor="name">Nama Lengkap</Label>
        <Input id="name" name="name" type="text" placeholder="Masukkan nama lengkap" value={formData.name} onChange={handleChange} />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="email">Alamat Email Professional</Label>
        <Input id="email" name="email" type="email" placeholder="Masukkan alamat email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="telepon">Nomor Telepon</Label>
        <Input id="telepon" name="telepon" type="tel" placeholder="Masukkan nomor telepon" value={formData.telepon} onChange={handleChange} />
        {errors.telepon && <p className="text-red-500">{errors.telepon}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="jenis_profesi">Jenis Profesi</Label>
        <Input id="jenis_profesi" name="jenis_profesi" type="text" placeholder="Masukkan jenis profesi" value={formData.jenis_profesi} onChange={handleChange} />
        {errors.jenis_profesi && <p className="text-red-500">{errors.jenis_profesi}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Kata Sandi</Label>
        <Input id="password" name="password" type="password" placeholder="Masukkan kata sandi" value={formData.password} onChange={handleChange} />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="confirmPassword">Konfirmasi Kata Sandi</Label>
        <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Masukkan ulang kata sandi" value={formData.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="sertifikat">Unggah Dokumen Sertifikat</Label>
        <Input id="sertifikat" name="sertifikat" type="file" accept=".pdf" onChange={handleFileChange} />
        {errors.sertifikat && <p className="text-red-500">{errors.sertifikat}</p>}
      </div>

      {errors.apiError && <p className="text-red-500">{errors.apiError}</p>}

      <Button type="submit" className="w-full button-primary text-white text-sm">
        Daftar Sekarang
      </Button>
      <Button className="w-full text-primary font-bold" variant="outline" size="lg" onClick={() => navigate("/login-dokter")}>
        Sudah punya akun? Masuk Disini
      </Button>
    </form>
  );
}
