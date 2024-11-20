import React from "react";
import UserStats from "@/components/fragments/kelolapengguna/UserStats";
import UserList from "@/components/fragments/kelolapengguna/UserList";
import NavbarAdmin from "@/components/fragments/homeadmin/NavbarAdmin";
import SidebarKelolaPengguna from "@/components/fragments/kelolapengguna/SidebarKelolaPengguna";

export default function KelolaDokterPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarKelolaPengguna />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Navbar */}
        <NavbarAdmin />

        {/* Content */}
        <div className="p-6 space-y-6">
          <UserStats />
          <UserList />
        </div>
      </div>
    </div>
  );
}
