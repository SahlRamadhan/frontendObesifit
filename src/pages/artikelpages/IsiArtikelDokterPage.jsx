import React from "react";
import NavbarDokter from "@/components/fragments/homedokter/NavbarDokter";
import Imagesintroisiartikel from "@/components/fragments/isiartikeluser/Imagesintroisiartikel";
import FooterUser from "@/components/fragments/homeuser/FooterUser";
import WelcomeIsiArtikelDokter from "@/components/fragments/isiartikeldokter/WelcomeIsiArtikelDokter";
import RelatedArticles from "@/components/fragments/isiartikeluser/RelatedArticles";
import IsiArtikelUser from "@/components/fragments/isiartikeluser/IsiArtikelUser";

export default function IsiArtikelDokterPage() {
  return (
    <>
      <NavbarDokter />
      <Imagesintroisiartikel />
      <WelcomeIsiArtikelDokter />
      <IsiArtikelUser />
      <RelatedArticles />
      <FooterUser />
    </>
  );
}
