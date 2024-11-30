import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function FormHasilKalori() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userRole } = useAuth();
  
  const getKaloriUrl = () => {
    if (userRole === 2) return "/kalkulator-kalori"; // Role User
    if (userRole === 3) return "/kalkulatorkalori-dokter"; // Role Dokter
    return "/kalkulatorkalori"; // Default
  };

  // Mengambil hasil kalori dari state yang dikirim sebelumnya
  const { bmr } = location.state || { bmr: 0 }; // Default jika tidak ada data

  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Hasil Kalori */}
      <div className="text-center">
        <h2 className="text-2xl text-black mt-4">Kalori yang kamu butuhkan per hari adalah</h2>
        <p className="text-primary font-bold mt-2 text-[17px]">{bmr} Kalori/Hari</p>
      </div>

      {/* Indikator Kalori */}
      <div className="flex justify-center mt-8">
        <div className="bg-green-100 text-center font-bold text-sm rounded-[14px] px-40 py-8 flex flex-col items-center">
          <img src="src/assets/images 2/kalori.png" alt="Indikator Kalori" className="w-32 h-32 mb-4" />
          <p>Anda Membutuhkan Setidaknya</p>
          <p className="text-primary font-bold mt-2 text-[14px]">{bmr} Kalori/Hari</p>
        </div>
      </div>

      {/* Tombol */}
      <Button onClick={() => navigate(getKaloriUrl())} className="bg-primary text-white font-bold py-2 px-10 rounded-full">
        Cek Ulang
      </Button>
    </div>
  );
}
