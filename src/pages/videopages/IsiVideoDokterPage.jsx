import React from "react";
import FooterUser from "@/components/fragments/homeuser/FooterUser";
import Navbar from "@/components/fragments/homedokter/NavbarDokter";
import Imagesintroisiartikel from "@/components/fragments/isiartikeluser/Imagesintroisiartikel";
import RelatedVideo from "@/components/fragments/isivideouser/RelatedVideo";
import IsiVideoUser from "@/components/fragments/isivideouser/IsiVideoUser";

export default function IsiVideoDokterPage() {
  return (
    <>
      <Navbar />
      <Imagesintroisiartikel />
      <IsiVideoUser />
      <RelatedVideo />
      <FooterUser />
    </>
  );
}
