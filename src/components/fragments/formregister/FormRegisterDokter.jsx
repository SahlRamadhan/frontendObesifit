import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Swal from "sweetalert2";
import { FiArrowLeft } from "react-icons/fi";

export default function FormRegisterDokter() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    profession: "",
    password: "",
    confirmPassword: "",
  });

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {
      fullName: "",
      email: "",
      phone: "",
      profession: "",
      password: "",
      confirmPassword: "",
    };

    // Validation logic
    if (!fullName) newErrors.fullName = "Nama lengkap wajib diisi";
    if (!email) {
      newErrors.email = "Alamat email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Alamat email tidak valid";
    }
    if (!phone) newErrors.phone = "Nomor handphone wajib diisi";
    else if (!/^\d+$/.test(phone)) {
      newErrors.phone = "Nomor handphone hanya boleh berisi angka";
    }
    if (!profession) newErrors.profession = "Jenis profesi wajib diisi";
    if (!password) {
      newErrors.password = "Kata sandi wajib diisi";
    } else if (password.length < 6) {
      newErrors.password = "Kata sandi harus minimal 6 karakter";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi kata sandi wajib diisi";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Kata sandi tidak cocok";
    }

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted!", {
      fullName,
      email,
      phone,
      profession,
      password,
      selectedFile,
    });

    Swal.fire({
      title: "ObesiFit",
      html: `
        Admin akan segera mengkonfirmasi pendaftaran anda
        <img src="src/assets/images 2/Pembayaran2.png" alt="Success Image" class="mt-4 mx-auto" style="width: 340px; height: 140px;" />
      `,
      confirmButtonText: "Kembali ke Halaman Register",
      confirmButtonColor: "#28a745",
      customClass: {
        popup: "flex flex-col items-center",
        title: "text-xl font-semibold text-center",
        confirmButton: "bg-green-500 text-white py-2 px-35 rounded-lg mt-4",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login-dokter");
      }
    });

    // Reset form
    setFullName("");
    setEmail("");
    setPhone("");
    setProfession("");
    setPassword("");
    setConfirmPassword("");
    setSelectedFile(null);
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mt-3">
      {/* Icon Back */}
      <button
        onClick={() => navigate("/login-dokter")}
        className="absolute top-4 left-4 text-xl text-gray-600"
      >
        <FiArrowLeft />
      </button>
      <div className="space-y-1">
        <Label htmlFor="fullName">Nama Lengkap</Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Masukkan nama lengkap"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="text-sm py-1 px-2"
        />
        {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="email">Alamat Email Professional</Label>
        <Input
          id="email"
          type="email"
          placeholder="Masukkan alamat email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-sm py-1 px-2"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="phone">Nomor Handphone</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="Masukkan nomor handphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="text-sm py-1 px-2"
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="profession">Jenis Profesi</Label>
        <Input
          id="profession"
          type="text"
          placeholder="Masukkan jenis profesi"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          className="text-sm py-1 px-2"
        />
        {errors.profession && (
          <p className="text-red-500">{errors.profession}</p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Kata Sandi</Label>
        <Input
          id="password"
          type="password"
          placeholder="Masukkan kata sandi"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-sm py-1 px-2"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="confirmPassword">Konfirmasi Kata Sandi</Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Masukkan ulang kata sandi"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="text-sm py-1 px-2"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword}</p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="fileUpload">
          Unggah Dokumen Izin Praktik / Sertifikat
        </Label>
        <Input
          id="fileUpload"
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="text-sm py-1 px-2"
        />
      </div>

      <Button
        type="submit"
        className="w-full button-primary text-white text-sm py-1 px-2"
        size="sm"
      >
        Daftar Sekarang
      </Button>

      <Button
        className="w-full text-primary font-bold"
        variant="outline"
        size="lg"
        onClick={() => navigate("/login-dokter")}
      >
        Sudah punya akun? Masuk Disini
      </Button>
    </form>
  );
}
