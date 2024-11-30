import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllVideo } from "../../../services/video.config";
import { useAuth } from "@/context/AuthContext";

function RelatedVideo() {
  const [videos, setvideos] = useState([]);
  const { userRole } = useAuth();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getAllVideo();
        if (data) {
          // Acak artikel dan ambil 3 artikel pertama
          const randomVideo = data.sort(() => Math.random() - 0.5).slice(0, 3);
          setvideos(randomVideo);
        }
      } catch (error) {
        console.error("Error fetching related articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const getVideoUrl = (id) => {
    if (userRole === 2) return `/isivideouser/${id}`; // Role User
    if (userRole === 3) return `/isivideodokter/${id}`; // Role Dokter
    return `/video/${id}`; // Default fallback
  };
  const getShortContent = (content, maxLength = 100) => {
    if (!content) return "Penjelasan tidak tersedia.";
    return content.length > maxLength ? `${content.substring(0, maxLength)}...` : content;
  };

  return (
    <div className="mt-16 sm:mt-20 p-6 rounded-lg">
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">Mau cari artikel lain?</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Link to={getVideoUrl(video.id)} key={video.id} className="p-4 sm:p-6 rounded-lg shadow-md block transition-transform transform hover:scale-105">
            <img src={video.video_files[0]?.thumbnail || "https://via.placeholder.com/300"} alt={video.judul} className="w-full h-56 sm:h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-700 text-base sm:text-lg font-semibold">{video.judul}</p>
            <p className="text-gray-500 text-sm sm:text-base">{getShortContent(video.deskripsi)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedVideo;
