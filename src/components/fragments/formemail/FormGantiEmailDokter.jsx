import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// Komponen Button, Input, dan Label sederhana
function Button({ children, className, ...props }) {
  return (
    <button
      className={`h-[42px] px-4 rounded-md shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Input({ className, ...props }) {
  return (
    <input
      className={`border border-gray-300 rounded-md w-full px-3 h-[42px] focus:outline-none focus:ring-2 focus:ring-gray-400 ${className}`}
      {...props}
    />
  );
}

function Label({ children, htmlFor, className }) {
  return (
    <label htmlFor={htmlFor} className={`block text-gray-700 font-medium mb-1 ${className}`}>
      {children}
    </label>
  );
}

export default function FormGantiEmailDokter() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "ObesiFit",
      html: `
        Alamat email anda berhasil diganti
        <img src="src/assets/images 2/Pembayaran2.png" alt="Success Image" class="mt-4 mx-auto" style="width: 340px; height: 140px;" />
      `,
      confirmButtonText: "Oke",
      confirmButtonColor: "#28a745",
      customClass: {
        popup: 'flex flex-col items-center',
        title: 'text-xl font-semibold text-center',
        confirmButton: 'bg-green-500 text-white py-2 px-40 rounded-lg mt-4',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/editprofil-dokter');
      }
    });
  };

  return (
    <form className="flex flex-col items-center space-y-6 w-full max-w-md" onSubmit={handleSave}>
      <div className="flex items-end w-full space-x-2">
        <div className="flex-grow space-y-1">
          <Label htmlFor="email">Masukkan Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email"
          />
        </div>
        <Button className="bg-[#415952] text-white">Kirim Kode</Button>
      </div>

      <div className="w-full space-y-1">
        <Label htmlFor="code">Masukkan Kode</Label>
        <Input
          id="code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Masukkan kode"
        />
      </div>

      <div className="w-full space-y-1">
        <Label htmlFor="newEmail">Masukkan Alamat Email Baru</Label>
        <Input
          id="newEmail"
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="Masukkan alamat email baru"
        />
      </div>

      <Button className="bg-primary text-white px-8 py-2 rounded-[10px] shadow-md" type="submit">
        Simpan
      </Button>
    </form>
  );
}
