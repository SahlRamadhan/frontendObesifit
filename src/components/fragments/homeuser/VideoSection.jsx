import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllVideo } from "@/services/video.config";
import { useAuth } from "@/context/AuthContext";


function VideoSection() {
  const [videos, setVideos] = useState([]);
  const { userRole } = useAuth(); // Dapatkan role pengguna dari context

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getAllVideo();
        if (data) {
          const vidoeRandom = data.sort(() => Math.random() - 0.5).slice(0, 8);
          setVideos(vidoeRandom);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  const getvideoUrl = (id) => {
    if (userRole === 2) return `/isivideouser/${id}`; // Role User
    if (userRole === 3) return `/isivideodokter/${id}`; // Role Dokter
    return `/video/${id}`; // Default fallback
  };

  // Fungsi untuk menentukan URL halaman artikel list berdasarkan role
  const getVideoListUrl = () => {
    if (userRole === 2) return "/videouser"; // Role User
    if (userRole === 3) return "/videodokter"; // Role Dokter
    return "/video"; // Default fallback
  };

  return (
    <section className="max-w-screen-2xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
      {/* Button Tonton Video */}
      <div className="flex justify-end mb-8">
        <Link to={getVideoListUrl()}>
          <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-all">Tonton Video</button>
        </Link>
      </div>

      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Lagi males baca artikel?</h2>
        <p className="text-lg text-gray-600">Yuk, cek video edukasi kami yang nggak kalah seru!</p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            {/* Gunakan getvideoUrl untuk menentukan URL artikel */}
            <a href={getvideoUrl(video.id)} >
              <img src={video.video_files[0]?.thumbnail} alt={video.judul} className="w-full h-56 object-cover" />
            </a>
            <a href={getvideoUrl(video.id)} className="block p-5 text-lg font-medium text-gray-800 hover:text-green-600">
              {video.judul}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VideoSection;
