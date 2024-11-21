import React from "react";
import SidebarHomeAdmin from "@/components/fragments/homeadmin/SidebarHomeAdmin";
import NavbarAdmin from "@/components/fragments/homeadmin/NavbarAdmin";
import FormKelolaDokter from "@/components/fragments/formkelola/FormKelolaDokter";

const KelolaDokterPage = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <SidebarHomeAdmin />

      {/* Main Content */}
      <div className="flex-1 ml-[250px]">
        <NavbarAdmin />
        <div className="pt-[100px] px-8 pb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Kelola Dokter</h1>

          <div className="mb-8">
            <FormKelolaDokter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KelolaDokterPage;
