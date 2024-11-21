import React from "react";
import UserStats from "@/components/fragments/kelolapengguna/UserStats";
import UserList from "@/components/fragments/kelolapengguna/UserList";
import NavbarAdmin from "@/components/fragments/homeadmin/NavbarAdmin";
import SidebarHomeAdmin from "@/components/fragments/homeadmin/SidebarHomeAdmin";

export default function KelolaDokterPage() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <SidebarHomeAdmin />

      {/* Main Content */}
      <div className="flex-1 ml-[250px]">
        <NavbarAdmin />
        <div className="pt-[100px] px-8 pb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Kelola Pengguna</h1>

          {/* Statistik Dokter */}
          <div className="mb-8">
            <UserStats />
          </div>

          <UserList />
        </div>
      </div>
    </div>
  );
}
