import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";

export default function FormLoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [message, setMessage] = useState();
  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = { email: "", password: "" };

    // Validasi email
    if (!email) {
      newErrors.email = "Alamat email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Alamat email tidak valid";
    }

    // Validasi password
    if (!password) {
      newErrors.password = "Kata sandi wajib diisi";
    } else if (password.length < 6) {
      newErrors.password = "Kata sandi harus minimal 6 karakter";
    }

    // Jika ada error, set state
    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    try {
      const credentials = { email, password }; // Dapatkan email dan password dari form
      const expectedRole = 1; // Misalnya, role 2 untuk User

      await login(credentials, expectedRole); // Panggil fungsi login dari AuthContext
      const redirectTo = location.state?.from?.pathname || "/homeadmin";
      navigate(redirectTo, { replace: true });
    } catch (error) {
      setMessage(error.response?.data?.msg || "Terjadi kesalahan saat login.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="email">Alamat Email</Label>
          <Input id="email" type="email" placeholder="Masukkan alamat email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Kata Sandi</Label>
          <Input id="password" type="password" placeholder="Masukkan kata sandi" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Button className="w-full" size="lg" type="submit">
          Masuk
        </Button>
      </div>

      {message && <p className="text-red-500">{message}</p>}
    </form>
  );
}
