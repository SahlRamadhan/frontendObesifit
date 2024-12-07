import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { createTransaksi } from "@/services/transaksi.config"; // Import fungsi createTransaksi
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Swal from "sweetalert2";

export default function FormPembayaranLangganan() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { userData } = useAuth();

  const handlePembayaran = async () => {
    setLoading(true);
    try {
      const data = {
        email: userData.email,
        id_user: userData.id,
      };
      const transaksi = await createTransaksi(data); // Memanggil fungsi createTransaksi
      if (transaksi) {
        Swal.fire({
          icon: "success",
          title: "Kode Pembayaran",
          text: "Kode pembayaran telah dikirim ke email Anda.",
          confirmButtonText: "Lanjutkan",
        }).then(() => {
          navigate("/tatacara-pembayaran", { state: { transaksi } }); // Kirim data transaksi ke halaman berikutnya
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan",
        text: "Gagal membuat transaksi. Silakan coba lagi.",
        confirmButtonText: "Tutup",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <Button className="bg-primary text-white font-bold w-full py-2 rounded-md" size="lg" onClick={handlePembayaran} disabled={loading}>
        {loading ? "Memproses..." : "Lakukan Pembayaran Sekarang"}
      </Button>
    </div>
  );
}
