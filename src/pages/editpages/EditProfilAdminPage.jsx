import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "@/components/fragments/homeadmin/NavbarAdmin";
import FormEditProfil from "@/components/fragments/formedit/FormEditProfil";
import { useAuth } from "@/context/AuthContext";

export default function EditProfilDokterPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = (e) => {
    try {
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
      }).then((result) => {
        if (result.isConfirmed) {

          navigate("/homeadmin");
        }
      });
    } catch (error) {
      console.error("Gagal memperbarui profil:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Terjadi kesalahan saat memperbarui profil.",
      });
    }
  };

  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbar/>

      {/* Konten utama */}
      <div className="flex flex-grow justify-center items-center">
        <div className="w-full max-w-lg p-8">
          <header className="text-center"></header>

          {/* Bagian gambar profil */}
          <div className="flex flex-col items-center mt-8"></div>

          {/* Form untuk pengeditan profil */}
          <div className="mt-8">
            <FormEditProfil />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-start p-12 bg-white shadow-md">
        <button className="bg-[#C90000] text-white py-1 px-8 rounded-[10px]" onClick={handleLogout}>
          Kembali
        </button>
      </footer>
    </section>
  );
}
