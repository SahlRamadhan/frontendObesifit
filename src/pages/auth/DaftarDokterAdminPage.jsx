import React from "react";
import SidebarHomeAdmin from "@/components/fragments/homeadmin/SidebarHomeAdmin";
import NavbarAdmin from "@/components/fragments/homeadmin/NavbarAdmin";
import FormDaftarDokterAdmin from "@/components/fragments/formkelola/FormDaftarDokterAdmin";

const DaftarDokterAdminPage = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="fixed top-0 left-0">
        <SidebarHomeAdmin />
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-[250px] ml-[80px]">
        <NavbarAdmin />
        <div className="pt-[100px] px-6 sm:px-8 pb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Kelola Daftar Dokter</h1>

          {/* Statistik Dokter */}
          <div className="mb-8">
            <FormDaftarDokterAdmin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaftarDokterAdminPage;
