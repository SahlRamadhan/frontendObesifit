import React from "react";
import NavbarUser from "@/components/fragments/homeuser/NavbarUser"; 
import Imagesintro from "@/components/fragments/homeuser/Imagesintro";
import WelcomeSection from "@/components/fragments/homeuser/WelcomeSection";
import SliderSection from "@/components/fragments/homeuser/SliderSection";
import ArticleSection from "@/components/fragments/homeuser/ArticleSection";
import SubscriptionSection from "@/components/fragments/homeuser/SubscriptionSection";
import VideoSection from "@/components/fragments/homeuser/VideoSection";
import KalkulatorUser from "@/components/fragments/homeuser/KalkulatorUser";
import DokterUser from "@/components/fragments/homeuser/DokterUser";
import FooterUser from "@/components/fragments/homeuser/FooterUser";

export default function DashboardPage() {
  return (
    <>
      <NavbarUser />
      <Imagesintro />
      <WelcomeSection />
      <SliderSection />
      <ArticleSection />
      <SubscriptionSection />
      <VideoSection />
      <KalkulatorUser />
      <DokterUser />
      <FooterUser />
    </>
  );
}
