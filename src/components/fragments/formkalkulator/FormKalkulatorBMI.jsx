import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { createKalkulatorBMI } from "@/services/kalkulatorBMI.config"; // Import API service
import { useAuth } from "@/context/AuthContext"; // Import useAuth untuk mendapatkan userData

export default function FormKalkulatorBMI() {
  const { userData, isAuthenticated, userRole } = useAuth(); // Ambil userData dari context
  const [gender, setGender] = useState(""); // Menyimpan nilai jenis kelamin
  const [age, setAge] = useState(""); // Menyimpan usia
  const [height, setHeight] = useState(""); // Menyimpan tinggi badan
  const [weight, setWeight] = useState(""); // Menyimpan berat badan

  const navigate = useNavigate();

  const handleCalculate = async (e) => {
    e.preventDefault();

    // Validasi input data
    if (!gender || !age || !height || !weight) {
      Swal.fire({
        icon: "warning",
        title: "Form Belum Lengkap!",
        text: "Harap isi semua data terlebih dahulu.",
      });
      return;
    }

    // Menghitung BMI
    const bmi = (weight / (height * height)) * 10000;

    // Menyiapkan data untuk dikirim ke API
    const data = {
      id_jenis_kelamin: gender === "male" ? 1 : 2, // 1 untuk Laki-Laki, 2 untuk Perempuan
      usia: age,
      tinggi_badan: height,
      berat_badan: weight,
      id_user: userData?.id, // Pastikan `id_user` dikirim dari context
    };

    try {
      // Ambil token dari AuthContext
      
      // Kirimkan data ke API dengan token di header Authorization
      const response = await createKalkulatorBMI(data); // Kirim data dan token ke API
      if (response) {
        Swal.fire({
          icon: "success",
          title: "Hasil BMI Kamu!",
          text: `Nilai BMI: ${bmi.toFixed(2)}. Kategori: ${response.data.kategori}`,
        });
        if (userRole === 2) navigate("/hasilbmi", { state: { bmi: bmi.toFixed(2), kategori: response.data.kategori } }); // Role User
        if (userRole === 3) navigate("/hasilbmi-dokter", { state: { bmi: bmi.toFixed(2), kategori: response.data.kategori } }); // Role Dokter
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Terjadi kesalahan",
        text: "Gagal menghitung BMI, coba lagi nanti.",
      });
    }
  };

  if (!isAuthenticated) {
    // Jika user belum login, arahkan ke halaman login
    navigate("/login");
  }

  return (
    <form className="flex flex-col items-center space-y-14 px-4">
      {/* Gender Selector */}
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-20">
        <div className={`p-4 cursor-pointer ${gender === "male" ? "ring-2 ring-blue-500" : ""} rounded-lg text-center`} onClick={() => setGender("male")}>
          <img src="src/assets/images 2/Laki.png" alt="Laki-Laki" className="w-50 h-50 mx-auto" />
          <p className="text-gray-700 font-bold mt-2">Laki-Laki</p>
        </div>

        <div className={`p-4 cursor-pointer ${gender === "female" ? "ring-2 ring-pink-500" : ""} rounded-lg text-center`} onClick={() => setGender("female")}>
          <img src="src/assets/images 2/Cewe.png" alt="Perempuan" className="w-50 h-50 mx-auto" />
          <p className="text-gray-700 font-bold mt-2">Perempuan</p>
        </div>
      </div>

      {/* Input Fields */}
      <div className="w-full space-y-6">
        <div>
          <Label htmlFor="age" className="block text-gray-700 font-medium">
            Berapa Usia Kamu
          </Label>
          <Input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Masukkan usia kamu" className="w-full mt-2 border-gray-300" />
        </div>

        <div>
          <Label htmlFor="height" className="block text-gray-700 font-medium">
            Berapa Tinggi Kamu (cm)
          </Label>
          <Input id="height" type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Masukkan tinggi badan kamu" className="w-full mt-2 border-gray-300" />
        </div>

        <div>
          <Label htmlFor="weight" className="block text-gray-700 font-medium">
            Berapa Berat Kamu (kg)
          </Label>
          <Input id="weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Masukkan berat badan kamu" className="w-full mt-2 border-gray-300" />
        </div>
      </div>

      {/* Button */}
      <Button onClick={handleCalculate} className="bg-primary text-white py-2 px-10 rounded-full w-full sm:w-auto">
        Lanjutkan
      </Button>
    </form>
  );
}
