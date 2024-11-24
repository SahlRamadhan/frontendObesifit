import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { verifyOtp, resendOtp } from "@/services/auth.config";
import { FiArrowLeft } from "react-icons/fi";

export default function Register2Page() {
  const { state } = useLocation(); // Akses state dari navigasi
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const email = state?.email; // Dapatkan email dari state

  if (!email) {
    Swal.fire("Error", "Email tidak ditemukan, silakan daftar ulang.", "error");
    navigate("/register"); // Kembali ke halaman register jika email tidak ditemukan
    return null;
  }

 const handleSubmit = async (e) => {
   e.preventDefault();

   if (!code) {
     Swal.fire("Error", "Kode OTP wajib diisi.", "error");
     return;
   }

   console.log("Email yang dikirim:", email);
   console.log("OTP yang dikirim:", code);

   setLoading(true);

   try {
     const response = await verifyOtp(email, code);
     console.log("Response dari backend:", response);

     Swal.fire("Berhasil", response.message, "success").then(() => {
       navigate("/login");
     });
   } catch (error) {
     console.error("Error dari backend:", error.response || error);
     Swal.fire("Gagal", error.response?.data?.message || "Kode OTP salah atau kadaluarsa.", "error");
   } finally {
     setLoading(false);
   }
 };


  const handleResendOtp = async () => {
    setResendLoading(true);

    try {
      const response = await resendOtp(email);
      Swal.fire("Berhasil", response.message, "success");
    } catch (error) {
      Swal.fire("Gagal", error.message || "Gagal mengirim ulang kode OTP.", "error");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6 w-full max-w-sm">
      {/* Tombol Back */}
      <button onClick={() => navigate("/register")} className="absolute top-4 left-4 text-xl text-gray-600">
        <FiArrowLeft />
      </button>

      <div className="space-y-1">
        <Label htmlFor="code">Masukkan Kode</Label>

        {/* Input Kode OTP */}
        <div className="flex space-x-2">
          <Input id="code" type="text" placeholder="Masukkan kode" value={code} onChange={(e) => setCode(e.target.value)} disabled={loading} />
          <Button type="button" onClick={handleResendOtp} disabled={resendLoading}>
            {resendLoading ? "Mengirim..." : "Kirim Ulang Kode"}
          </Button>
        </div>
      </div>

      {/* Tombol Submit */}
      <Button type="submit" disabled={loading}>
        {loading ? "Memproses..." : "Konfirmasi"}
      </Button>
    </form>
  );
}
