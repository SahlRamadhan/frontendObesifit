import NavbarDokter from "@/components/fragments/homedokter/NavbarDokter";
import FooterUser from "@/components/fragments/homeuser/FooterUser";
import React from "react";
import WelcomeEditVideo from "@/components/fragments/buatvideodokter/WelcomeEditVideo";
import ListVideoDokter from "@/components/fragments/buatvideodokter/ListVideoDokter";

export const ListVideoDokterPage = () => {
  return (
    <>
      <NavbarDokter />
      <WelcomeEditVideo />
      <ListVideoDokter />
      <FooterUser />
    </>
  );
};

export default ListVideoDokterPage;
