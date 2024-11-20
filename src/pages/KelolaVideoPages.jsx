import React from "react";
import NavbarAdmin from "@/components/fragments/homeadmin/NavbarAdmin";
import SidebarKelolaArtikel from "@/components/fragments/kelolaartikel/SidebarKelolaArtikel";
import VideoStats from "@/components/fragments/kelolavideo/VideoStats";
import VideoList from "@/components/fragments/kelolavideo/VideoList";

export default function KelolaVideoPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarKelolaArtikel />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Navbar */}
        <NavbarAdmin />

        {/* Content */}
        <div className="p-6 space-y-6">
          <VideoStats />
          <VideoList />
        </div>
      </div>
    </div>
  );
}
