import FormEditProfil from "@/components/fragments/formedit/FormEditProfil";
import Image from "@/assets/images 2/Profil.jpg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "@/components/fragments/homeuser/NavbarUser";

export default function EditProfilPage() {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Yakin mau keluar dari akun ini?",
      showCancelButton: true,
      confirmButtonText: "Konfirmasi",
      cancelButtonText: "Batalkan",
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#dc3545",
      reverseButtons: true,
      html: `
        <div class="flex flex-col items-center space-y-4">
          <img src="src/assets/images 2/pop up 1.png" alt="Custom Image" class="mx-auto" style="width: 100px; height: 100px;">
        </div>
      `,
      customClass: {
        popup: "flex flex-col items-center",
        title: "text-xl font-semibold text-center",
        image: "my-4",
        confirmButton: "bg-green-500 text-white py-2 px-6 rounded-lg mt-4",
        cancelButton: "bg-red-500 text-white py-2 px-6 rounded-lg mt-4",
      },
      // Action ketika tombol Keluar ditekan
      preConfirm: () => {
        navigate("/homeuser");
        return true;
      },
    });
  };

  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbar showKeluar={false} />

      {/* Konten utama */}
      <div className="flex flex-grow justify-center items-center">
        <div className="w-full max-w-lg p-8">
          <header className="text-center"></header>

          {/* Form untuk pengeditan profil */}
          <div className="mt-8">
            <FormEditProfil />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-start p-12 bg-white shadow-md">
        <button className="bg-[#C90000] text-white py-1 px-8 rounded-[10px]" onClick={handleLogout}>
          Keluar
        </button>
      </footer>
    </section>
  );
}
