import React from "react";
import NavbarUser from "@/components/fragments/homeuser/NavbarUser"; 
import FooterUser from "@/components/fragments/homeuser/FooterUser";
import ImagesintroVideo from "@/components/fragments/videouser/ImagesIntroVideo";
import WelcomeSectionVideo from "@/components/fragments/videouser/WelcomeSectiomVideo";
import SearchIsiVideo from "@/components/fragments/videouser/SearchIsiVideo";


export default function VideolUser() {
  return (
    <>
      <NavbarUser />
      <ImagesintroVideo/>
      <WelcomeSectionVideo />
      <SearchIsiVideo />
      <FooterUser />
    </>
  );
}
