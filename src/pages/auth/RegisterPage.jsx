import * as React from "react";
import FormRegister from "@/components/fragments/formregister/FormRegister";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  return (
    <section className="bg-custom-bg2 bg-cover bg-center h-screen flex items-center justify-center">
      <div className="w-full h-full flex flex-col md:flex-row">
        {/* Left Side - Form/Card */}
        <div className="w-full md:w-1/4 p-7 flex flex-col justify-center items-center bg-white z-10 relative">
          <div className="text-center">
            <h1 className="text-2xl font-bold flex items-center gap-4">
              <div className="border-t border-gray-300 w-full my-7"></div>
              ObesiFit
              <div className="border-t border-gray-300 w-full my-2"></div>
            </h1>
          </div>

          <div className="flex flex-col space-y-1 text-center">
            <h3 className="font-semibold text-sm">Bergabunglah dengan Komunitas & Para Ahli</h3>
            <p className="font-light text-[10px]">Dapatkan Dukungan, Pelajari Lebih Dalam tentang Obesitas</p>
          </div>

          {/* Form Register */}
          <div className="flex flex-col space-y-2 mt-4 w-full max-w-sm">
            <Button className="flex items-center justify-start w-full text-sm py-1 px-2" variant="outline" size="sm">
              <img src="googleicons.svg" className="size-4 mr-2" alt="Google Icon" />
              <span className="flex-1 text-center">Sign in with Google</span>
            </Button>

            <span className="text-center font-light text-[12px]">atau</span>

            <FormRegister />

            <div className="text-center text-primary font-bold text-sm">
              Anda seorang Dokter atau Pakar? <a href="/register-dokter">Daftar disini</a>
            </div>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="w-full md:w-3/4 hidden md:flex items-center justify-center text-center bg-custom-bg2 bg-cover bg-center relative">
          <div className="absolute top-0 mx-auto text-black p-6 rounded-lg w-full max-w-lg text-center mt-6">
            <h3 className="text-2xl font-semibold">Rutin Bersepeda Bisa Menurunkan Risiko Obesitas hingga 50%</h3>
            <p className="text-xs mt-2 font">Dapatkan fakta menarik seputar aktivitas di ObesiFit</p>
          </div>
        </div>
      </div>
    </section>
  );
}
