import React from 'react';
import SidebarHomeAdmin from '@/components/fragments/homeadmin/SidebarHomeAdmin';
import NavbarAdmin from '@/components/fragments/homeadmin/NavbarAdmin';
import StatsCardsHomeAdmin from '@/components/fragments/homeadmin/StatsCardsHomeAdmin';
import ChartsRowHomeAdmin from '@/components/fragments/homeadmin/ChartsRowHomeAdmin';

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarHomeAdmin />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        <NavbarAdmin />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          <StatsCardsHomeAdmin />
          <ChartsRowHomeAdmin />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
