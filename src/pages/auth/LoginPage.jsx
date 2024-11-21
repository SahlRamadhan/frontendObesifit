import FormLogin from "@/components/fragments/formlogin/FormLogin";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
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
          <h3 className="font-semibold text-base">Bergabunglah dengan Komunitas & Para Ahli</h3>
          <p className="font-light text-[10px] md:text-xs">Dapatkan Dukungan, Pelajari Lebih Dalam tentang Obesitas</p>
        </div>

        <CardContent className="flex flex-col space-y-4 mt-4">
          <Button className="flex items-center justify-start w-full" variant="outline" size="lg">
            <img src="googleicons.svg" className="size-4 mr-2" />
            <span className="flex-1 text-center">Sign in with Google</span>
          </Button>

          <span className="text-center text-[12px] font-light">atau</span>

          <FormLogin />

          <div className="text-center font-bold text-primary text-[14px]">
            <a href="/dashboard">Kembali ke halaman utama</a>
          </div>
          <div className="text-center font-bold text-primary text-[14px]">
            <a href="/email">Lupa Password?</a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
