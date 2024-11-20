import FormHasilKaloriDokter from "@/components/fragments/form/FormHasilKaloriDokter";
import Navbar from "@/components/fragments/homedokter/NavbarDokter";
import FooterUser from "@/components/fragments/homeuser/FooterUser";

export default function HasilKaloriPage() {
  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <main className="flex flex-col items-center flex-grow mt-20">
        <FormHasilKaloriDokter />
      </main>

      {/* Footer */}
      <FooterUser />
    </section>
  );
}
