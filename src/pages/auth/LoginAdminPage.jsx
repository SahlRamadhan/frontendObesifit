import FormLoginAdmin from "@/components/fragments/formlogin/FormLoginAdmin";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginAdminPage() {
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
          <h3 className="font-semibold text-base">Admin</h3>
          <p className="font-light text-[10px] md:text-xs">Login sebagai admin ObesiFit</p>
        </div>

        <CardContent className="flex flex-col space-y-4 mt-4">
          <FormLoginAdmin />

          <div className="text-center font-bold text-primary text-[14px]">
            <a href="/email-admin">Lupa Password?</a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
