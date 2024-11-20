import React from "react";
import NavbarAdmin from "@/components/fragments/homeadmin/NavbarAdmin";
import ArticleList from "@/components/fragments/kelolaartikel/ArticleList";
import ArticleStats from "@/components/fragments/kelolaartikel/ArticleStats";
import SidebarKelolaArtikel from "@/components/fragments/kelolaartikel/SidebarKelolaArtikel";

export default function KelolaArtikelPage() {
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
          <ArticleStats />
          <ArticleList />
        </div>
      </div>
    </div>
  );
}
