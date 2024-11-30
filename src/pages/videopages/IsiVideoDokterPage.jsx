import React from "react";
import FooterUser from "@/components/fragments/homeuser/FooterUser";
import Navbar from "@/components/fragments/homedokter/NavbarDokter";
import Imagesintroisiartikel from "@/components/fragments/isiartikeluser/Imagesintroisiartikel";
import IsiVideoDokter from "@/components/fragments/isivideodokter/IsiVideoDokter";
import RelatedVideo from "@/components/fragments/isivideodokter/RelatedVideo";

export default function IsiVideoDokterPage() {
  return (
    <>
      <Navbar />
      <Imagesintroisiartikel />
      <IsiVideoDokter />
      <RelatedVideo />
      <FooterUser />
    
      </>
  );
}
