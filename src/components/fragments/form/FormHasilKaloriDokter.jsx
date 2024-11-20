import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function FormHasilKalori() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Hasil Kalori */}
      <div className="text-center">
        <h2 className="text-2xl text-black mt-4">Kalori yang kamu butuhin per hari adalah</h2>
        <p className="text-primary font-bold mt-2 text-[17px]">1644.00 Kalori/Hari</p>
      </div>

      {/* Indikator Kalori */}
      <div className="flex justify-center mt-8">
        <div className="bg-green-100 text-center font-bold text-sm rounded-[14px] px-40 py-8 flex flex-col items-center">
          <img src="src/assets/images 2/kalori.png" alt="Indikator Kalori" className="w-32 h-32 mb-4" />
          <p>Anda Membutuhkan Setidaknya</p>
          <p className="text-primary font-bold mt-2 text-[14px]">1644.00 Kalori/Hari</p>
        </div>
      </div>

      {/* Tombol */}
      <Button onClick={() => navigate("/kalkulatorkalori-dokter")} className="bg-primary text-white font-bold py-2 px-10 rounded-full">
        Cek Ulang
      </Button>
    </div>
  );
}
