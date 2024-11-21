import React from "react";
import SidebarHomeAdmin from "@/components/fragments/homeadmin/SidebarHomeAdmin";
import NavbarAdmin from "@/components/fragments/homeadmin/NavbarAdmin";
import StatsCardsHomeAdmin from "@/components/fragments/homeadmin/StatsCardsHomeAdmin";
import ChartsRowHomeAdmin from "@/components/fragments/homeadmin/ChartsRowHomeAdmin";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="fixed top-0 left-0">
        <SidebarHomeAdmin />
      </div>

      {/* Konten utama */}
      <div className="flex-1 md:ml-[250px] ml-[80px]">
        {/* Navbar */}
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
