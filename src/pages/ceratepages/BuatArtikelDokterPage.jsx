import React from "react";
import NavbarDokter from "@/components/fragments/homedokter/NavbarDokter";
import BuatArtikelDokter from "@/components/fragments/buatartikeldokter/BuatArtikelDokter";
import WelcomeBuatArtikel from "@/components/fragments/buatartikeldokter/WelcomeBuatArtikel";
import FooterUser from "@/components/fragments/homeuser/FooterUser";


export default function BuatArtikelDokterPage() {
  return (
    <>
      <NavbarDokter />
      <WelcomeBuatArtikel/>
      <BuatArtikelDokter />
      <FooterUser />
      
    </>
  );
}
