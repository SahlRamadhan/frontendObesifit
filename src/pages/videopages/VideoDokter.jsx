import React from "react";
import FooterUser from "@/components/fragments/homeuser/FooterUser";
import ImagesintroVideo from "@/components/fragments/videouser/ImagesIntroVideo";
import WelcomeSectionVideo from "@/components/fragments/videouser/WelcomeSectiomVideo";
import SearchIsiVideo from "@/components/fragments/videouser/SearchIsiVideo";
import Navbar from "@/components/fragments/homedokter/NavbarDokter";


export default function VideoDokter() {
  return (
    <>
      <Navbar />
      <ImagesintroVideo/>
      <WelcomeSectionVideo />
      <SearchIsiVideo />
      <FooterUser />
    </>
  );
}
