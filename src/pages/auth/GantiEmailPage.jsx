import FormGantiEmail from "@/components/fragments/form/FormGantiEmail";
import Image from "@/assets/images 2/Profil.jpg";
import Navbar from "@/components/fragments/homeuser/NavbarUser";

export default function GantiEmailPage() {
  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbar showKeluar={false} />

      {/* Konten utama */}
      <div className="flex flex-grow flex-col items-center justify-center">
        
        {/* Bagian gambar profil */}
        <div className="flex flex-col items-center mb-8">
          <img src={Image} alt="Profil" className="w-32 h-32 rounded-full shadow-lg" />
        </div>

        {/* Form untuk mengganti email */}
        <FormGantiEmail />
      </div>

      {/* Footer */}
      <footer className="flex justify-start p-10 bg-white shadow-md">
        <button className="bg-[#C90000] text-white py-1 px-7 rounded-[10px]">Kembali</button>
      </footer>
    </section>
  );
}
