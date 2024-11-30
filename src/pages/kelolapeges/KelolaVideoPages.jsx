import React, { useState, useEffect } from "react";
import NavbarAdmin from "@/components/fragments/homeadmin/NavbarAdmin";
import VideoList from "@/components/fragments/kelolavideo/VideoList";
import VideoStats from "@/components/fragments/kelolavideo/VideoStats";
import SidebarHomeAdmin from "@/components/fragments/homeadmin/SidebarHomeAdmin";
import { getAllVideo } from "@/services/video.config";

export default function KelolaVideoPage() {
  const [totalVideos, setTotalVideos] = useState(0);

  // Fetch total video
  const fetchTotalVideos = async () => {
    try {
      const video = await getAllVideo();
      setTotalVideos(video.length);
    } catch (error) {
      console.error("Error fetching total videos:", error);
    }
  };

  // Fetch data awal saat komponen dimuat
  useEffect(() => {
    fetchTotalVideos();
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="fixed top-0 left-0">
        <SidebarHomeAdmin />
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-[250px] ml-[80px]">
        <NavbarAdmin />
        <div className="pt-[100px] px-4 sm:px-8 pb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Kelola Video</h1>

          {/* Statistik Video */}
          <div className="mb-8">
            <VideoStats totalVideos={totalVideos} />
          </div>

          {/* Daftar Video */}
          <VideoList onVideosUpdate={fetchTotalVideos} />
        </div>
      </div>
    </div>
  );
}
