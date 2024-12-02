import React from "react";
import FooterUser from "@/components/fragments/homeuser/FooterUser";
import ChatForm from "@/components/fragments/formchat/FormChat";
import Navbar from "@/components/fragments/homedokter/NavbarDokter";

export const ChatDokterPages = () => {
  return (
    <>
      <Navbar />
      <ChatForm />
      <FooterUser />
    </>
  );
};

export default ChatDokterPages;
