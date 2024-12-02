import React from "react";
import NavbarUser from "@/components/fragments/homeuser/NavbarUser";
import FooterUser from "@/components/fragments/homeuser/FooterUser";
import ChatForm from "@/components/fragments/formchat/FormChat";

export const ChatPage = () => {
    return (
        <>
            <NavbarUser />
            <ChatForm />
            <FooterUser />
        </>
    );
};

export default ChatPage;