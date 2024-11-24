import FormPembayaranLangganan from "@/components/fragments/formpembayaran/FormPembayaranLangganan";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "@/assets/images 2/Pembayaran.png";
export default function PembayaranLanggananPage() {
  return (
    <section className="relative z-[100] bg-custom-bg bg-cover bg-center h-screen flex items-center justify-center">
      <Card className="max-w-md px-9 w-full drop-shadow-3xl py-9 rounded-[13px]">
        <CardHeader className="w-full justify-center">
          <CardTitle className="text-center text-xl font-bold flex items-center gap-8">
            <div className="border-t border-gray-300 w-full my-2"></div>
            ObesiFit
            <div className="border-t border-gray-300 w-full my-2"></div>
          </CardTitle>
        </CardHeader>

        <div className="flex flex-col space-y-1 text-center">
          <h3 className="font-semibold text-sm">Konsultasi dengan Para Dokter/Ahli Tanpa Batas</h3>
          <p className="font-semibold text-sm">Hanya dengan Rp. 49,000</p>
        </div>

        <div className="flex justify-center mt-4">
          <img src={Image} alt="Promo Berlangganan" className="w-full max-w-xs drop-shadow-2xl py-5 rounded-[13px]" />
        </div>

        <CardContent className="flex flex-col space-y-4 mt-4">
          <FormPembayaranLangganan />
        </CardContent>
      </Card>
    </section>
  );
}
