import React from "react";
import NavbarUser from "@/components/fragments/homeuser/NavbarUser"; 
import IsiArtikelUser from "@/components/fragments/isiartikeluser/IsiArtikelUser";
import Imagesintroisiartikel from "@/components/fragments/isiartikeluser/Imagesintroisiartikel";
import FooterUser from "@/components/fragments/homeuser/FooterUser";
import WelcomeIsiArtikelDokter from "@/components/fragments/isiartikeldokter/WelcomeIsiArtikelDokter";

export default function IsiArtikelUserPage() {
  return (
    <>
      <NavbarUser />
      <Imagesintroisiartikel />
      <WelcomeIsiArtikelDokter />
      <IsiArtikelUser />
      <FooterUser />
      </>
  );
}
