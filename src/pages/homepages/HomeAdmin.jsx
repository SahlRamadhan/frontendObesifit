import React, { useState, useEffect } from "react";
import SidebarHomeAdmin from "@/components/fragments/homeadmin/SidebarHomeAdmin";
import NavbarAdmin from "@/components/fragments/homeadmin/NavbarAdmin";
import StatsCardsHomeAdmin from "@/components/fragments/homeadmin/StatsCardsHomeAdmin";
import ChartsRowHomeAdmin from "@/components/fragments/homeadmin/ChartsRowHomeAdmin";
import { getAllUsers } from "@/services/users.config";
import { getAllArtikel } from "@/services/artikel.config";
import { getAllVideo } from "@/services/video.config";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalDoctors: 0,
    totalArticles: 0,
    totalVideos: 0,
    activeUsers: 0,
    activeDoctors: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch Users
        const userResponse = await getAllUsers();
        const users = userResponse?.data || [];
        const totalUsers = users.length;
        const totalDoctors = users.filter((user) => user.role_id === 3).length;
        const activeUsers = users.filter((user) => user.isVerified === true).length;
        const activeDoctors = users.filter((user) => user.role_id === 3 && user.isVerifiedByAdmin === true).length;

        // Fetch Articles
        const articleResponse = await getAllArtikel();
        const totalArticles = articleResponse?.length || 0;

        // Fetch Videos
        const videoResponse = await getAllVideo();
        const totalVideos = videoResponse?.length || 0;

        // Set stats
        setStats({
          totalUsers,
          totalDoctors,
          totalArticles,
          totalVideos,
          activeUsers,
          activeDoctors,
        });
      } catch (error) {
        setError("Gagal mengambil data statistik. Silakan coba lagi.");
        console.error("Error fetching statistics:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <p className="text-center">Memuat data statistik...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

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
          <StatsCardsHomeAdmin stats={stats} />

          {/* Charts */}
          <ChartsRowHomeAdmin stats={stats} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
