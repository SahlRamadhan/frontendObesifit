import React from "react";
import SidebarHomeAdmin from "@/components/ui/SidebarHomeAdmin";
import NavbarAdmin from "@/components/ui/NavbarAdmin";
import FormDaftarDokterAdmin from "@/components/fragments/formdokter/FormDaftarDokterAdmin";

const DaftarDokterAdminPage = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarHomeAdmin />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        <NavbarAdmin />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Kelola Pendaftaran Dokter</h1>

          {/* Total Pendaftaran Dokter */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-lg text-gray-600">Total Pendaftaran Dokter</h2>
            <p className="text-2xl font-semibold mt-2">2</p>
          </div>

          {/* Form Daftar Dokter */}
          <FormDaftarDokterAdmin />
        </div>
      </div>
    </div>
  );
};

export default DaftarDokterAdminPage;
