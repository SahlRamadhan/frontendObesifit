// RegisterDokterPage.jsx

import * as React from "react";
import FormRegisterDokter from "@/components/fragments/formregister/FormRegisterDokter";
import { Button } from "@/components/ui/button";

export default function RegisterDokterPage() {
  return (
    <section className="bg-custom-bg2 bg-cover bg-center flex items-center justify-center">
      <div className="w-full h-full flex flex-col md:flex-row">
        {/* Left Side - Form/Card */}
        <div className="w-full md:w-1/4 p-7 flex flex-col justify-center items-center bg-white z-10 relative">
          <div className="text-center">
            <h1 className="text-2xl font-bold flex items-center gap-4">
              <div className="border-t border-gray-300 w-full"></div>
              ObesiFit
              <div className="border-t border-gray-300 w-full"></div>
            </h1>
          </div>

          <div className="flex flex-col space-y-1 text-center">
            <h3 className="font-semibold text-sm">Bergabunglah sebagai Ahli Kesehatan</h3>
            <p className="font-light text-[10px]">Dukungan masyarakat dengan pengetahuan Anda!</p>
          </div>

          {/* Form Register */}
          <div className="flex flex-col space-y-1 mt-1 w-full max-w-sm">
            <FormRegisterDokter />

            <div className="text-center text-primary font-bold text-sm mt-4">
              <a href="/login">Kembali ke Register Pengguna</a>
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
