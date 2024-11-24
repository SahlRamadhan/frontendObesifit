import FormKalkulatorKalori from "@/components/fragments/formkalkulator/FormKalkulatorKalori";
import BackgroundImage from "@/assets/images 2/banner kalori.png";
import Navbar from "@/components/fragments/homeuser/NavbarUser";
import FooterUser from "@/components/fragments/homeuser/FooterUser";

export default function KalkulatorKaloriPage() {
  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <div className="flex flex-col items-center mt-2 px-4 md:px-0">
        {/* Banner */}
        <header className="relative w-full">
          <img src={BackgroundImage} alt="Background Kalkulator Kalori" className="w-full h-auto object-cover block" />
          <h1 className="text-2xl md:text-3xl text-center font-semibold text-black mt-7">Ini dia Kalkulator Kalori buat kamu!</h1>
          <p className="text-center mt-4 text-sm md:text-base text-gray-600">Gunakan kalkulator kalori ini untuk cek kebutuhan kalori harianmu. Yuk, mulai pantau asupan kalori dan jaga kesehatan!</p>
        </header>

        {/* Form untuk Kalkulator Kalori */}
        <div className="mt-10 w-full max-w-2xl">
          <FormKalkulatorKalori />
        </div>
      </div>

      {/* Link ke Kalkulator BMI */}
      <div className="text-center font-bold text-primary text-sm md:text-[15px] mt-6 mb-8">
        <a href="/kalkulator-bmi" className="hover:underline">
          Yuk, cek kalkulator BMI
        </a>
      </div>

      {/* Footer */}
      <FooterUser />
    </section>
  );
}
