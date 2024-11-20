import React, { useState } from "react";
import Swal from "sweetalert2";  
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"; 

export default function FormRegister2() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!code) {
      setError("Kode wajib diisi");
      return;
    }
    setError("");
    console.log("Kode dikirim:", code);

    Swal.fire({
      title: "ObesiFit",  
      html: `
        Akun anda berhasil didaftarkan
        <img src="src/assets/images 2/Pembayaran2.png" alt="Success Image" class="mt-4 mx-auto" style="width: 340px; height: 140px;" />
      `,
      confirmButtonText: "Oke",  
      confirmButtonColor: "#28a745", 
      customClass: {
        popup: 'flex flex-col items-center',
        title: 'text-xl font-semibold text-center',
        confirmButton: 'bg-green-500 text-white py-2 px-35 rounded-lg mt-4', 
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login');  
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6 w-full max-w-sm">
      {/* Icon Back */}
      <button
        onClick={() => navigate("/register")}
        className="absolute top-4 left-4 text-xl text-gray-600"
      >
        <FiArrowLeft />
      </button>
      <div className="space-y-1">
        <Label htmlFor="code">Masukkan Kode</Label>

        {/* Container untuk Input dan Button dalam satu baris */}
        <div className="flex space-x-2">
          <Input
            id="code"
            type="text"
            placeholder="Masukkan kode"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="text-sm py-1 px-2"
          />
          <Button
            className="text-white text-[13px] py-1 px-2"
            size="sm"
            onClick={() => {
              // logika kirim ulang kode jika dibutuhkan
            }}
          >
            Kirim Ulang Kode
          </Button>
        </div>

        {error && <p className="text-red-500">{error}</p>}
      </div>

      <Button
        type="submit"
        className="w-full button-primary text-white text-sm py-1 px-2" onClick={() => navigate("/login")}
      >
        Konfirmasi
      </Button>
    </form>
  );
}
