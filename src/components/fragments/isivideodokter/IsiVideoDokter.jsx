import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVideoById } from "@/services/video.config"; // Pastikan Anda sudah memiliki service API untuk mengambil data video

export const IsiVideoDokter = () => {
  const { id } = useParams(); // Ambil ID dari parameter URL
  const [mainVideo, setMainVideo] = useState(null);

  useEffect(() => {
    const fetchVideoById = async () => {
      try {
        const response = await getVideoById(id); // Panggil API untuk mendapatkan video berdasarkan ID
        if (response) {
          setMainVideo(response); // Simpan data video ke dalam state
        }
      } catch (error) {
        console.error("Error fetching video by ID:", error);
      }
    };

    fetchVideoById();
  }, [id]); // Jalankan setiap kali ID berubah

  useEffect(() => {
    // Atur volume video ke 100% saat komponen dimuat
    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.volume = 1.0; // Volume penuh (100%)
    }
  }, [mainVideo]); // Jalankan setiap kali mainVideo berubah

  return (
    <div className="max-w-screen-2xl mx-auto p-12 rounded-lg mt-24 mb-48">
      {/* Main Video Section */}
      {mainVideo ? (
        <div className="mb-12">
          <video controls poster={mainVideo.video_files?.[0]?.thumbnail} className="w-full h-96 rounded-lg mb-8">
            <source src={mainVideo.video_files?.[0]?.url} type="video/mp4" />
            Browser Anda tidak mendukung video.
          </video>
          <h1 className="text-4xl font-semibold text-gray-800 mb-3">{mainVideo.judul}</h1>
          <p className="text-gray-500 text-base mb-5">{new Date(mainVideo.created_at).toLocaleDateString("id-ID")}</p>
          <p className="text-gray-700 text-xl">{mainVideo.deskripsi}</p>
        </div>
      ) : (
        <p className="text-center text-gray-500">Memuat video...</p>
      )}
    </div>
  );
};

export default IsiVideoDokter;
