import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function FormHasilBMI() {
  const navigate = useNavigate();

  const handleRecalculate = () => {
    navigate("/kalkulator-bmi");
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Hasil BMI */}
      <div className="text-center">
        <p className="inline-block bg-green-100 text-black font-bold text-1xl rounded-full px-9 py-1">26.6</p>
        <h2 className="text-2xl text-black mt-4">
          Hasil BMI kamu adalah <span className="font-bold text-green-600">Gemuk</span>
        </h2>
        <p className="text-gray-500 mt-2 text-[15px]">Sedikit di atas ideal, jaga pola makan ya!</p>
      </div>

      {/* Indikator BMI */}
      <div className="flex justify-center mt-8">
        <img src="src/assets/images 2/gambar bmi.png" alt="Indikator BMI" className="w-full max-w-2xl rounded-lg" />
      </div>

      {/* Tombol */}
      <Button onClick={() => navigate("/kalkulatorbmi-dokter")} className="bg-primary text-white font-bold py-2 px-10 rounded-full">
        Cek Ulang
      </Button>
    </div>
  );
}
