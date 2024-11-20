import React from "react";
import WelcomeSectionArtikle from "@/components/fragments/artikeluser/WelcomeSectionArtikle";
import SearchIsiArtikel from "@/components/fragments/artikeluser/SearchIsiArtikel";
import FooterUser from "@/components/fragments/homeuser/FooterUser";
import Imagesintroisiartikel from "@/components/fragments/isiartikeluser/Imagesintroisiartikel";
import NavbarDokter from "@/components/fragments/homedokter/NavbarDokter";


export default function ArtikelDokter() {
  return (
    <>
      <NavbarDokter />
      <Imagesintroisiartikel/>
      <WelcomeSectionArtikle />
      <SearchIsiArtikel />
      <FooterUser />
    </>
  );
}
