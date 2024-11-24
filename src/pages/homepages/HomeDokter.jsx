import React from "react";
import Imagesintro from "@/components/fragments/homeuser/Imagesintro";
import SliderSection from "@/components/fragments/homeuser/SliderSection";
import ArticleSection from "@/components/fragments/homeuser/ArticleSection";
import VideoSection from "@/components/fragments/homeuser/VideoSection";
import KalkulatorUser from "@/components/fragments/homeuser/KalkulatorUser";
import FooterUser from "@/components/fragments/homeuser/FooterUser";
import NavbarDokter from "@/components/fragments/homedokter/NavbarDokter";
import WelcomeSectionDokter from "@/components/fragments/homedokter/WelcomeSectionDokter";
import AksesFiturDokter from "@/components/fragments/homedokter/AksesFiturDokter";

export default function HomeDokter() {
  return (
    <>
      <NavbarDokter />
      <Imagesintro />
      <WelcomeSectionDokter />
      <SliderSection />
      <AksesFiturDokter />
      <ArticleSection />
      <VideoSection />
      <KalkulatorUser />
      <FooterUser />
    </>
  );
}
