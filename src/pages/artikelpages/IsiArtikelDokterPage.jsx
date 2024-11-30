import React from "react";
import NavbarDokter from "@/components/fragments/homedokter/NavbarDokter";
import Imagesintroisiartikel from "@/components/fragments/isiartikeluser/Imagesintroisiartikel";
import FooterUser from "@/components/fragments/homeuser/FooterUser";
import WelcomeIsiArtikelDokter from "@/components/fragments/isiartikeldokter/WelcomeIsiArtikelDokter";
import RelatedArticles from "@/components/fragments/isiartikeluser/RelatedArticles";
import IsiArtikelDokter from "@/components/fragments/isiartikeldokter/IsiartikelDokter";

export default function IsiArtikelDokterPage() {
  return (
    <>
      <NavbarDokter />
      <Imagesintroisiartikel />
      <WelcomeIsiArtikelDokter />
      <IsiArtikelDokter />
      <RelatedArticles />
      <FooterUser />
    </>
  );
}
