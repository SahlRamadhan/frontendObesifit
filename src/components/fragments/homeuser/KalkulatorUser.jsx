import React from "react";
import kalkulatorImage1 from "../../../assets/images/Fitur (4).png"; // Ganti dengan path gambar yang benar
import kalkulatorImage2 from "../../../assets/images/Fitur (5).png"; // Ganti dengan path gambar yang benar
import { useNavigate } from "react-router-dom";

function KalkulatorUser() {
  const navigate = useNavigate();

  return (
    <section className="max-w-screen-2xl mx-auto p-5">
      <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg p-5 gap-6">
        {/* Kalkulator BMI */}
        <div className="flex-1 flex flex-col items-center text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Hitung BMI Kamu di Sini!</h2>
          <p className="text-sm md:text-lg text-gray-600 mb-4">Cek kesehatan berat badanmu dengan cepat. Yuk, hitung sekarang!</p>
          <img src={kalkulatorImage1} alt="Kalkulator BMI" className="w-full max-w-xs h-auto mb-4 rounded-lg" />
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors" onClick={() => navigate("/kalkulator-bmi")}>
            Ayo Hitung!
          </button>
        </div>

        {/* Kalkulator Kalori */}
        <div className="flex-1 flex flex-col items-center text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Hitung Kebutuhan Kalori Harianmu!</h2>
          <p className="text-sm md:text-lg text-gray-600 mb-4">Cek berapa kalori yang kamu butuhkan setiap hari. Yuk, coba hitung!</p>
          <img src={kalkulatorImage2} alt="Kalkulator Kalori" className="w-full max-w-xs h-auto mb-4 rounded-lg" />
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors" onClick={() => navigate("/kalkulator-kalori")}>
            Ayo Hitung!
          </button>
        </div>
      </div>
    </section>
  );
}

export default KalkulatorUser;
