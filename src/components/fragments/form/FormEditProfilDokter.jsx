import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Swal from "sweetalert2";

export default function FormEditProfilDokter() {
  const [name, setName] = useState("Dr. Riana, S.Kom, S.Pd");
  const [email, setEmail] = useState("dokterriana@gmail.com");
  const [profileImage, setProfileImage] = useState("src/assets/images 2/profil dokter.jpg"); // Gambar profil default

  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Yakin mau simpan perubahan ini?",
      showCancelButton: true,
      confirmButtonText: "Simpan",
      cancelButtonText: "Batalkan",
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#dc3545",
      reverseButtons: true,
      html: `
        <div class="flex flex-col items-center space-y-4">
          <img src="${profileImage}" alt="Custom Image" class="mx-auto" style="width: 100px; height: 100px;">
        </div>
      `,
      customClass: {
        popup: "flex flex-col items-center",
        title: "text-xl font-semibold text-center",
        image: "my-2",
        confirmButton: "bg-green-500 text-white py-2 px-6 rounded-lg mt-4",
        cancelButton: "bg-red-500 text-white py-2 px-6 rounded-lg mt-4",
      },
      preConfirm: () => {
        navigate("/editprofil-dokter"); // Navigasi setelah menyimpan
        return true;
      },
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setProfileImage(fileURL); // Update gambar profil
    }
  };

  return (
    <form className="flex flex-col items-start space-y-6">
      <div className="w-full flex flex-col items-center">
        <img src={profileImage} alt="Foto Profil Dokter" className="w-32 h-32 rounded-full shadow-md" />
        <label htmlFor="upload" className="mt-4 bg-[#415952] text-white py-2 px-5 rounded-[10px] shadow-md cursor-pointer">
          Ganti Foto Profil
        </label>
        <Input id="upload" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
      </div>
      <div className="w-full space-y-4">
        <div>
          <Label htmlFor="name" className="block text-gray-700 font-medium">
            Nama Lengkap atau Username
          </Label>
          <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} disabled className="w-full mt-2 border-gray-300" />
        </div>

        <div className="w-full flex items-end space-x-2 mt-2">
          <div className="flex-grow space-y-2">
            <Label htmlFor="email" className="block text-gray-700 font-medium">
              Alamat Email
            </Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled className="w-full border-gray-300 h-[42px]" />
          </div>
          <Button className="bg-[#415952] text-white h-[42px] px-4 rounded-md" onClick={() => navigate("/gantiemail-dokter")}>
            Ganti Email
          </Button>
        </div>
      </div>

      <div className="flex flex-col space-y-3 w-full mt-6">
        <div className="flex space-x-4">
          <Button className="bg-primary text-white py-2 px-7 rounded-[10px]" onClick={handleSave}>
            Simpan
          </Button>
        </div>
      </div>
    </form>
  );
}
