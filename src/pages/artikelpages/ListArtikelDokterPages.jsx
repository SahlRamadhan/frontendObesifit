import NavbarDokter from "@/components/fragments/homedokter/NavbarDokter";
import FooterUser from "@/components/fragments/homeuser/FooterUser";
import ListArtikelDokter from "@/components/fragments/buatartikeldokter/ListArtikelDokter";
import React from "react";
import WelcomeEditArtikel from "@/components/fragments/buatartikeldokter/WelcomeEditArtikel";

export const ListArtikelDokterPage = () => { 
    return (
        <>
            <NavbarDokter />
            <WelcomeEditArtikel />
            <ListArtikelDokter />
            <FooterUser />
        </>
    )
}

export default ListArtikelDokterPage