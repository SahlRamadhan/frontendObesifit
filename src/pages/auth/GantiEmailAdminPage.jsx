import { useNavigate } from "react-router-dom";
import FormGantiEmailAdmin from "@/components/fragments/formemail/FormGantiEmailAdmin";
import Image from "@/assets/images 2/profil admin.jpg";
import NavbarAdmin from "@/components/fragments/homeadmin/NavbarAdmin";

export default function GantiEmailAdminPage() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}

      <NavbarAdmin />

      {/* Konten utama */}
      <div className="flex flex-grow flex-col items-center justify-center">
        {/* Bagian gambar profil */}
        <div className="flex flex-col items-center mb-8">
          <img src={Image} alt="Profil" className="w-32 h-32 rounded-full shadow-lg" />
        </div>

        {/* Form untuk mengganti email */}
        <FormGantiEmailAdmin />
      </div>

      {/* Footer */}
      <footer className="flex justify-start p-12 bg-white shadow-md">
        <button className="bg-[#C90000] text-white py-1 px-8 rounded-[10px]" onClick={() => navigate("/editprofil-admin")}>
          Kembali
        </button>
      </footer>
    </section>
  );
}
