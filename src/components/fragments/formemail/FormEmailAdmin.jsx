import { useState } from "react";
import Swal from "sweetalert2";  // Import SweetAlert2
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";  // Import useNavigate untuk navigasi

export default function FormEmailAdmin() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    code: "",
    newPassword: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();  // Inisialisasi navigate untuk navigasi

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { email: "", code: "", newPassword: "", confirmPassword: "" };

    // Validasi email
    if (!email) {
      newErrors.email = "Alamat email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Alamat email tidak valid";
    }

    // Validasi kode, kata sandi baru, dan konfirmasi kata sandi
    if (!code) newErrors.code = "Kode wajib diisi";
    if (!newPassword) newErrors.newPassword = "Kata sandi baru wajib diisi";
    if (!confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi kata sandi wajib diisi";
    } else if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = "Kata sandi tidak cocok";
    }

    // Jika ada error, set state
    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    // Proses reset kata sandi di sini
    console.log("Password reset submitted!", { email, code, newPassword });

    // Menampilkan pop-up setelah berhasil reset password
    Swal.fire({
      title: "ObesiFit",  
      html: `
        Password anda telah di reset
        <img src="src/assets/images 2/Pembayaran2.png" alt="Success Image" class="mt-4 mx-auto" style="width: 340px; height: 140px;" />
      `,
      confirmButtonText: "Oke",  
      confirmButtonColor: "#28a745", 
      customClass: {
        popup: 'flex flex-col items-center',
        title: 'text-xl font-semibold text-center',
        confirmButton: 'bg-green-500 text-white py-2 px-40 rounded-lg mt-4', 
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // Navigate to login page when 'Oke' is clicked on the pop-up
        navigate('/login-admin');  
      }
    });

    // Reset form setelah submit
    setEmail("");
    setCode("");
    setNewPassword("");
    setConfirmPassword("");
    setErrors({ email: "", code: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="email">Alamat Email</Label>
        <div className="flex space-x-2">
          <Input
            id="email"
            type="email"
            placeholder="Masukkan alamat email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-sm py-1 px-2 flex-1"
          />
          <Button type="button" className="text-white text-[13px] py-1 px-2" size="sm">
            Kirim Kode
          </Button>
        </div>
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="code">Masukkan Kode</Label>
        <Input
          id="code"
          type="text"
          placeholder="Masukkan kode"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="text-sm py-1 px-2"
        />
        {errors.code && <p className="text-red-500">{errors.code}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="newPassword">Kata Sandi Baru</Label>
        <Input
          id="newPassword"
          type="password"
          placeholder="Masukkan kata sandi baru"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="text-sm py-1 px-2"
        />
        {errors.newPassword && <p className="text-red-500">{errors.newPassword}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="confirmPassword">Konfirmasi Kata Sandi Baru</Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Masukkan ulang kata sandi baru"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="text-sm py-1 px-2"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-primary text-white text-sm py-1 px-2"
        size="sm"
      >
        Ganti Password
      </Button>
    </form>
  );
}
