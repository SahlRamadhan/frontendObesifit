import { useNavigate } from "react-router-dom";
import FormGantiEmailDokter from "@/components/fragments/form/FormGantiEmailDokter";
import Image from "@/assets/images 2/profil dokter.jpg";
import Navbar from "@/components/fragments/homedokter/NavbarDokter";

export default function GantiEmailDokterPage() {
  const navigate = useNavigate();  

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
        <FormGantiEmailDokter />
      </div>

      {/* Footer */}
      <footer className="flex justify-start p-10 bg-white shadow-md">
        <button
          className="bg-[#C90000] text-white py-1 px-7 rounded-[10px]"
          onClick={() => navigate("/editprofil-dokter")}  
        >
          Kembali
        </button>
      </footer>
    </section>
  );
}
