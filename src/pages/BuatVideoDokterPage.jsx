import React from "react";
import NavbarDokter from "@/components/fragments/homedokter/NavbarDokter";
import WelcomeBuatVideo from "@/components/fragments/buatvideodokter/WelcomeBuatVideo";
import BuatVideoDokter from "@/components/fragments/buatvideodokter/BuatVideoDokter";
import FooterUser from "@/components/fragments/homeuser/FooterUser";


export default function BuatVideoDokterPage() {
  return (
    <>
      <NavbarDokter />
      <WelcomeBuatVideo/>
      <BuatVideoDokter />
      <FooterUser />
      
    </>
  );
}
