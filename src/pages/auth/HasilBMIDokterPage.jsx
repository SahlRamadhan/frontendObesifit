import FormHasilBMIDokter from "@/components/fragments/form/FormHasilBMIDokter";
import Navbar from "@/components/fragments/homedokter/NavbarDokter";
import FooterUser from "@/components/fragments/homeuser/FooterUser";

export default function HasilBMIPage() {
  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <main className="flex flex-col items-center flex-grow mt-20">
        <FormHasilBMIDokter />
      </main>

      <FooterUser />
    </section>
  );
}
