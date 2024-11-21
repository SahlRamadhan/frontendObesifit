import { useState } from "react";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FormTataCaraPembayaran() {
  const [image, setImage] = useState(null);
  const [kodePembayaran, setKodePembayaran] = useState(""); // Tambahkan state untuk kode pembayaran
  const navigate = useNavigate();

  const handleUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi kode pembayaran dan bukti pembayaran
    if (!kodePembayaran) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Harap masukkan kode pembayaran.",
      });
      return;
    }

    if (!image) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Harap unggah bukti pembayaran terlebih dahulu.",
      });
      return;
    }

    Swal.fire({
      title: "ObesiFit",
      html: `
        Admin akan segera mengkonfirmasi pembayaran anda
        <img src="src/assets/images 2/Pembayaran2.png" alt="Success Image" class="mt-4 mx-auto" style="width: 340px; height: 140px;" />
      `,
      confirmButtonText: "Kembali ke Dashboard",
      confirmButtonColor: "#28a745",
      customClass: {
        popup: "flex flex-col items-center",
        title: "text-xl font-semibold text-center",
        confirmButton: "bg-green-500 text-white py-2 px-35 rounded-lg mt-4",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/homeuser");
      }
    });
  };

  return (
    <section className="relative z-[100] bg-custom-bg bg-cover bg-center h-screen flex items-center justify-center">
      <Card className="max-w-md px-4 w-full drop-shadow-3xl py-8 rounded-[13px]">
        <CardHeader className="w-full justify-center">
          <CardTitle className="text-center text-xl font-bold">ObesiFit</CardTitle>
        </CardHeader>

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

          {/* Tombol Submit */}
          <Button onClick={handleSubmit} className="w-full bg-primary text-white font-semibold rounded-md mt-4">
            Kirim Bukti Pembayaran
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
