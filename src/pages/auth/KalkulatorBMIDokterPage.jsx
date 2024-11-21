import BackgroundImage from "@/assets/images 2/banner bmi.png";
import Navbar from "@/components/fragments/homedokter/NavbarDokter";
import FooterUser from "@/components/fragments/homeuser/FooterUser";
import FormKalkulatorBMIDokter from "@/components/fragments/formkalkulator/FormKalkulatorBMIDokter";

export default function KalkulatorBMIPage() {
  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <div className="flex flex-col items-center mt-2 px-4 md:px-0">
        {/* Banner */}
        <header className="relative w-full">
          <img src={BackgroundImage} alt="Background Kalkulator BMI" className="w-full h-auto object-cover block" />
          <h1 className="text-2xl md:text-3xl text-center font-semibold text-black mt-7">Ini dia Kalkulator BMI buat kamu!</h1>
          <p className="text-center mt-4 text-sm md:text-base text-gray-600">
            Indeks Massa Tubuh (IMT) ini bantu kamu cek berat badan ideal. Juga bisa dipakai untuk pantau IMT anak, praktis buat <br className="hidden md:block" /> jaga kesehatan keluarga!
          </p>
        </header>

        {/* Form untuk Kalkulator */}
        <div className="mt-10 w-full max-w-2xl">
          <FormKalkulatorBMIDokter />
        </div>
      </div>

      {/* Link ke Kalkulator Kalori */}
      <div className="text-center font-bold text-primary text-sm md:text-[15px] mt-6 mb-6">
        <a href="/kalkulatorkalori-dokter" className="hover:underline">
          Yuk, cek kalkulator kalori
        </a>
      </div>

      {/* Footer */}
      <FooterUser />
    </section>
  );
}
