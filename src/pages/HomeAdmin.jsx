import React from "react";
import SidebarHomeAdmin from "@/components/fragments/homeadmin/SidebarHomeAdmin";
import NavbarAdmin from "@/components/fragments/homeadmin/NavbarAdmin";
import StatsCardsHomeAdmin from "@/components/fragments/homeadmin/StatsCardsHomeAdmin";
import ChartsRowHomeAdmin from "@/components/fragments/homeadmin/ChartsRowHomeAdmin";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <SidebarHomeAdmin />

      {/* Konten utama */}
      <div className="flex-1 ml-[250px]">
        <NavbarAdmin />
        <div className="pt-[100px] px-8 pb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

          {/* Statistik Cards */}
          <StatsCardsHomeAdmin />

          {/* Charts */}
          <ChartsRowHomeAdmin />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
