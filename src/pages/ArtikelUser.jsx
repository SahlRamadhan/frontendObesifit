import React from "react";
import NavbarUser from "@/components/fragments/homeuser/NavbarUser"; 
import WelcomeSectionArtikle from "@/components/fragments/artikeluser/WelcomeSectionArtikle";
import SearchIsiArtikel from "@/components/fragments/artikeluser/SearchIsiArtikel";
import FooterUser from "@/components/fragments/homeuser/FooterUser";
import Imagesintroisiartikel from "@/components/fragments/isiartikeluser/Imagesintroisiartikel";


export default function ArtikelUser() {
  return (
    <>
      <NavbarUser />
      <Imagesintroisiartikel/>
      <WelcomeSectionArtikle />
      <SearchIsiArtikel />
      <FooterUser />
    </>
  );
}
