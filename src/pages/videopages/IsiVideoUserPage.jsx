import React from "react";
import NavbarUser from "@/components/fragments/homeuser/NavbarUser"; 
import IsiVideoUser from "@/components/fragments/isivideouser/IsiVideoUser";
import FooterUser from "@/components/fragments/homeuser/FooterUser";
import Imagesintroisiartikel from "@/components/fragments/isiartikeluser/Imagesintroisiartikel";
import RelatedVideo from "@/components/fragments/isivideodokter/RelatedVideo";

export default function IsiVideoUserPage() {
  return (
    <>
      <NavbarUser />
      <Imagesintroisiartikel />
      <IsiVideoUser />
      <RelatedVideo />
      <FooterUser />
    
      </>
  );
}
