import React from "react";
import Layouts from "@/components/layouts/Layouts";
import Header from "@/components/fragments/landingpage/Hero";
import Tentang from "@/components/fragments/landingpage/Tentang";
import Fitur from "@/components/fragments/landingpage/Fitur";
import Kalkulator from "@/components/fragments/landingpage/Kalkulator";
import Dokter from "@/components/fragments/landingpage/Dokter";
import ReviewSection from "@/components/fragments/landingpage/ReviewSection";


export default function DashboardPage() {
  return (
    <Layouts>
      <Header />
      <Tentang imageSrc="src\assets\images\Tentang.png" alt="Tentang Kami" />
      <Fitur
        imageSrc="src\assets\images\Artikel.png"
        alt="Artikel terlengkap dan video informatif"
        description="Jelajahi artikel terlengkap dan video informatif tentang obesitas yang dirancang untuk membantu semua kalangan, mulai dari anak-anak hingga dewasa. Dengan berbagai perspektif dan penjelasan yang menarik."
        buttonText="Yuk, Cek!"
      />
      <Kalkulator imageSrc="src\assets\images\Kalkulator.png" alt="Kalkulator BMI & juga kalori harian" buttonText="Yuk, Cek!" />
      <Dokter
        imageSrc="src\assets\images\Dokter.png"
        alt="Dokter Spesialis"
        buttonText="Yuk, Cek!"
        title="Dukungan komunitas & konsultasi ahli"
        description="Bergabunglah dengan komunitas yang saling mendukung dan terhubung dengan para ahli kesehatan untuk mendapatkan saran yang tepat. Dapatkan pengalaman berbagi, motivasi, dan bantuan langsung dalam perjalanan menuju hidup sehat, bersama individu-individu yang memiliki tujuan yang sama."
      />
    

      <ReviewSection/>
    </Layouts>
  );
}
