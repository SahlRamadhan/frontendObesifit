import React from "react";
import FormRegister2 from "@/components/fragments/formregister/FormRegister2";

export default function Register2Page() {
  return (
    <section className="bg-custom-bg2 bg-cover bg-center h-screen flex items-center justify-center">
      <div className="w-full h-full flex flex-col md:flex-row">
        {/* Left Side - Form/Card */}
        <div className="w-full md:w-1/4 p-7 flex flex-col items-center bg-white z-10 relative">
          <div className="text-center w-full">
            <h1 className="text-2xl font-bold my-4">ObesiFit</h1>
            <h3 className="font-semibold text-sm">Konfirmasi Alamat Emailmu</h3>
            <p className="font-light text-[12px]">Kami akan mengirimkan kode ke email untuk konfirmasi pendaftaran kamu</p>
          </div>

          {/* Form Register */}
          <FormRegister2 />
        </div>

        {/* Right Side - Illustration */}
        <div className="w-full md:w-3/4 hidden md:flex items-center justify-center text-center bg-custom-bg2 bg-cover bg-center relative">
          <div className="absolute top-0 mx-auto text-black p-6 rounded-lg w-full max-w-lg text-center mt-6">
            <h3 className="text-2xl font-semibold">Rutin Bersepeda Bisa Menurunkan Risiko Obesitas hingga 50%</h3>
            <p className="text-xs mt-2 font-light">Dapatkan fakta menarik seputar obesitas di Obesifit</p>
          </div>
        </div>
      </div>
    </section>
  );
}
