import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function FormHasilBMI() {
  const navigate = useNavigate();
  const location = useLocation();
  const { bmi, kategori } = location.state || { bmi: null, kategori: null };
  const {userRole} = useAuth();

  const handleRecalculate = () => {
   if (userRole === 2) navigate("/kalkulator-bmi"); // Role User
   if (userRole === 3) navigate("/kalkulatorbmi-dokter"); // Role Dokter
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Hasil BMI */}
      <div className="text-center">
        <p className="inline-block bg-green-100 text-black font-bold text-1xl rounded-full px-9 py-1">{bmi}</p>
        <h2 className="text-2xl text-black mt-4">
          Hasil BMI kamu adalah <span className="font-bold text-green-600">{kategori}</span>
        </h2>
        <p className="text-gray-500 mt-2 text-[15px]">
          {kategori === "Kurus" && "Kurang dari berat badan ideal, coba perbaiki pola makan!"}
          {kategori === "Normal" && "Berat badan ideal, jaga pola makan sehat!"}
          {kategori === "Gemuk" && "Sedikit di atas ideal, jaga pola makan ya!"}
          {kategori === "Obesitas" && "Obesitas, hati-hati dengan kesehatan!"}
        </p>
      </div>

      {/* Indikator BMI */}
      <div className="flex justify-center mt-8">
        <img src="src/assets/images 2/gambar bmi.png" alt="Indikator BMI" className="w-full max-w-2xl rounded-lg" />
      </div>

      {/* Tombol */}
      <Button onClick={handleRecalculate} className="bg-primary text-white font-bold py-2 px-10 rounded-full">
        Cek Ulang
      </Button>
    </div>
  );
}
