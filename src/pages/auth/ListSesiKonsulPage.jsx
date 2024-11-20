import React from "react";
import FormListSesiKonsul from "@/components/fragments/form/formlistsesikonsul";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Navbar from "@/components/fragments/homedokter/NavbarDokter";
import FooterUser from "@/components/fragments/homeuser/FooterUser";


export default function ListSesiKonsulPage() {
  return (
    <section className="min-h-screen bg-white flex flex-col">
      <header className="bg-white p-2">
        <Navbar />
      </header>
      <main className="flex-grow">
        <div className="container mx-auto py-8">
          <h2 className="text-center text-2xl font-bold">
            List Sesi Konsultasi
          </h2>
          <p className="text-center text-gray-600">
            Berikut beberapa sesi konsultasi yang telah Anda lakukan dengan
            pengguna
          </p>
          <div className="mt-5">
            <FormListSesiKonsul />
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterUser />
    </section>
  );
}
