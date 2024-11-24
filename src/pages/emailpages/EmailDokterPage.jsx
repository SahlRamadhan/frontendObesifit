import FormEmail from "@/components/fragments/formemail/FormEmail";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EmailDokterPage() {
  return (
    <section className="relative z-[100] bg-custom-bg bg-cover bg-center h-screen flex items-center justify-center">
      <Card className="max-w-md px-4 w-full drop-shadow-3xl py-8 rounded-[13px]">
        <CardHeader className="w-full justify-center">
          <CardTitle className="text-center text-xl font-bold flex items-center gap-8">
            <div className="border-t border-gray-300 w-full my-2"></div>
            ObesiFit
            <div className="border-t border-gray-300 w-full my-2"></div>
          </CardTitle>
        </CardHeader>

        <div className="flex flex-col space-y-1 text-center">
          <h3 className="font-semibold text-base">Reset Kata Sandimu</h3>
          <p className="font-light text-[10px] md:text-[10px]">Kami akan mengirimkan kode ke email untuk mereset kata sandi kamu</p>
        </div>

        <CardContent className="flex flex-col space-y-4 mt-4">
          <FormEmail />

          <div className="text-center text-primary text-xs md:text-[14px] font-bold mt-2">
            <a href="/login-dokter">Kembali ke halaman login?</a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
