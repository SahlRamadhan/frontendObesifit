import FormPembayaran2 from "@/components/fragments/formpembayaran/FormPembayaran2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "@/assets/images 2/Pembayaran2.png";

export default function Pembayaran2Page() {
  return (
    <section className="relative z-[100] bg-custom-bg bg-cover bg-center h-screen flex items-center justify-center">
      <Card className="max-w-md px-9 w-full drop-shadow-3xl py-8 rounded-[13px]">
        <CardHeader className="w-full justify-center">
          <CardTitle className="text-center text-xl font-bold">ObesiFit</CardTitle>
          <p className="text-center text-sm">Admin akan segera mengkonfirmasi pembayaran anda</p>
        </CardHeader>

        <div className="flex justify-center">
          <img src={Image} alt="Confirmation Image" className="w-full max-w-xs drop-shadow-2xl py-5 rounded-[13px]" />
        </div>

        <CardContent className="flex flex-col items-center mt-4">
          <FormPembayaran2 />
        </CardContent>
      </Card>
    </section>
  );
}
