import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from "react-router-dom"; // Gunakan useLocation untuk mengambil data dari state
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { uploadBukti } from "@/services/transaksi.config"; // Fungsi API untuk upload bukti

export default function FormTataCaraPembayaran() {
  const location = useLocation(); // Ambil data transaksi dari navigasi
  const navigate = useNavigate();
  const transaksi = location.state?.transaksi; // Ambil data transaksi dari state
  const [image, setImage] = useState(null);
  const [kodePembayaran, setKodePembayaran] = useState(""); // Inisialisasi dengan string kosong
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!transaksi) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Transaksi tidak ditemukan.",
      }).then(() => {
        navigate("/homeuser"); // Redirect jika data transaksi tidak ada
      });
      return;
    }

    // Set kode pembayaran jika tersedia
    if (transaksi.code_pembayaran) {
      setKodePembayaran(transaksi.code_pembayaran);
    }
  }, [transaksi, navigate]);

  const handleUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!kodePembayaran || !image) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Harap masukkan kode pembayaran dan unggah bukti pembayaran.",
      });
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("bukti_pembayaran", image);
      formData.append("code_pembayaran", kodePembayaran);

      // Panggil fungsi uploadBukti dengan ID transaksi
      await uploadBukti(transaksi.id, formData);

      Swal.fire({
        title: "ObesiFit",
        html: `
          Admin akan segera mengkonfirmasi pembayaran Anda
          <img src="src/assets/images 2/Pembayaran2.png" alt="Success Image" class="mt-4 mx-auto" style="width: 340px; height: 140px;" />
        `,
        confirmButtonText: "Kembali ke Dashboard",
        confirmButtonColor: "#28a745",
      }).then(() => {
        navigate("/homeuser");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: error.response?.data?.message || "Terjadi kesalahan saat mengunggah bukti pembayaran.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-[100] bg-custom-bg bg-cover bg-center h-screen flex items-center justify-center">
      <Card className="max-w-md px-4 w-full drop-shadow-3xl py-8 rounded-[13px]">
        <CardHeader className="w-full justify-center">
          <CardTitle className="text-center text-xl font-bold">ObesiFit</CardTitle>
        </CardHeader>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <CardContent className="flex flex-col space-y-4 text-center">
            <h3 className="font-semibold text-[14px]">Cara melakukan Pembayaran Langganan ObesiFit</h3>

            <ol className="text-left space-y-3 text-sm">
              <li>
                1. Masukkan kode pembayaran Anda:
                <div className="flex items-center justify-between mt-1 border px-4 py-2 rounded-md bg-gray-100">
                  <Input
                    type="text"
                    value={kodePembayaran}
                    onChange={(e) => setKodePembayaran(e.target.value)}
                    placeholder="Masukkan kode pembayaran"
                    className="bg-transparent border-none focus:ring-0 focus:outline-none font-semibold flex-grow"
                     // Kode pembayaran hanya untuk ditampilkan, jadi disable input
                  />
                  <span className="text-xs text-gray-500">Kode berlaku 1 hari</span>
                </div>
              </li>
              <li>
                2. Lakukanlah pembayaran pada no rekening admin dibawah:
                <div className="flex items-center justify-between mt-1 border px-2 py-1 rounded-md bg-gray-100">
                  <span className="font-semibold">BCA 809.009.2988</span>
                  <span className="font-semibold">ObesiFit</span>
                </div>
              </li>
              <li>
                3. Upload bukti pembayaran Anda:
                <Input type="file" accept="image/*" onChange={handleUpload} className="mt-2 w-full" />
                {image && <img src={URL.createObjectURL(image)} alt="Preview" className="mt-2 mx-auto h-20 w-20 object-cover border rounded-md" />}
              </li>
            </ol>

            <p className="text-left text-sm mt-4">4. Jika sudah mengupload foto pembayaran, klik tombol di bawah ini.</p>

            <Button onClick={handleSubmit} disabled={loading} className="w-full bg-primary text-white font-semibold rounded-md mt-4">
              {loading ? "Mengunggah..." : "Kirim Bukti Pembayaran"}
            </Button>
          </CardContent>
        )}
      </Card>
    </section>
  );
}
