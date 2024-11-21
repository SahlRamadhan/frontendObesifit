import React from "react";
import SidebarHomeAdmin from "@/components/ui/SidebarHomeAdmin";
import NavbarAdmin from "@/components/ui/NavbarAdmin";
import FormKelolaPembayaran from "@/components/fragments/formkelola/FormKelolaPembayaran";

const KelolaPembayaranPage = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarHomeAdmin />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        <NavbarAdmin />
        <div className="p-6">
          {/* Form Daftar Dokter */}
          <FormKelolaPembayaran />
        </div>
      </div>
    </div>
  );
};

export default KelolaPembayaranPage;
