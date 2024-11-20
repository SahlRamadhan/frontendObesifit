import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function FormKalkulatorBMI() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const navigate = useNavigate();

  const handleCalculate = (e) => {
    e.preventDefault();

    if (!gender || !age || !height || !weight) {
      Swal.fire({
        icon: "warning",
        title: "Form Belum Lengkap!",
        text: "Harap isi semua data terlebih dahulu.",
      });
      return;
    }

    const bmi = (weight / (height * height)) * 10000;
    Swal.fire({
      icon: "success",
      title: "Hasil BMI Kamu!",
      text: `Nilai BMI: ${bmi.toFixed(2)}`,
    });

    navigate("/halaman-lain");
  };

  return (
    <form className="flex flex-col items-center space-y-14 px-4">
      {/* Gender Selector */}
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-20">
        <div className={`p-4 cursor-pointer ${gender === "male" ? "ring-2 ring-blue-500" : ""} rounded-lg text-center`} onClick={() => setGender("male")}>
          <img src="src/assets/images 2/Laki.png" alt="Laki-Laki" className="w-50 h-50 mx-auto" />
          <p className="text-gray-700 font-bold mt-2">Laki-Laki</p>
        </div>

        <div className={`p-4 cursor-pointer ${gender === "female" ? "ring-2 ring-pink-500" : ""} rounded-lg text-center`} onClick={() => setGender("female")}>
          <img src="src/assets/images 2/Cewe.png" alt="Perempuan" className="w-50 h-50 mx-auto" />
          <p className="text-gray-700 font-bold mt-2">Perempuan</p>
        </div>
      </div>

      {/* Input Fields */}
      <div className="w-full space-y-6">
        <div>
          <Label htmlFor="age" className="block text-gray-700 font-medium">
            Berapa Usia Kamu
          </Label>
          <Input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Masukkan usia kamu" className="w-full mt-2 border-gray-300" />
        </div>

        <div>
          <Label htmlFor="height" className="block text-gray-700 font-medium">
            Berapa Tinggi Kamu (cm)
          </Label>
          <Input id="height" type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Masukkan tinggi badan kamu" className="w-full mt-2 border-gray-300" />
        </div>

        <div>
          <Label htmlFor="weight" className="block text-gray-700 font-medium">
            Berapa Berat Kamu (kg)
          </Label>
          <Input id="weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Masukkan berat badan kamu" className="w-full mt-2 border-gray-300" />
        </div>
      </div>

      {/* Button */}
      <Button onClick={handleCalculate} className="bg-primary text-white py-2 px-10 rounded-full w-full sm:w-auto">
        Lanjutkan
      </Button>
    </form>
  );
}
