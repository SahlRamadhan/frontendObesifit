import React, { useState } from "react";
import video1 from "../../../assets/images/Video Thumbnail (1).jpg";
import video2 from "../../../assets/images/Video Thumbnail (2).jpg";
import video3 from "../../../assets/images/Video Thumbnail (3).jpg";
import video4 from "../../../assets/images/Video Thumbnail (4).jpg";
import video5 from "../../../assets/images/Video Thumbnail (5).jpg";
import video6 from "../../../assets/images/Video Thumbnail (6).jpg";
import video7 from "../../../assets/images/Video Thumbnail (7).jpg";
import video8 from "../../../assets/images/Video Thumbnail (8).jpg";

function SearchIsiVideo() {
  const videos = [
    { id: 1, title: "Video 1: Bahaya Obesitas", image: video1 },
    { id: 2, title: "Video 2: Tips Diet Sehat", image: video2 },
    { id: 3, title: "Video 3: Dampak Kesehatan", image: video3 },
    { id: 4, title: "Video 4: Pola Makan Seimbang", image: video4 },
    { id: 5, title: "Video 5: Aktivitas Fisik Harian", image: video5 },
    { id: 6, title: "Video 6: Penyebab Obesitas", image: video6 },
    { id: 7, title: "Video 7: Cara Cegah Obesitas", image: video7 },
    { id: 8, title: "Video 8: Panduan Olahraga", image: video8 },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVideos, setFilteredVideos] = useState(videos);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = videos.filter((video) => video.title.toLowerCase().includes(term));
    setFilteredVideos(filtered);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-8 py-16">
      <div className="mb-12">
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Cari video..." className="w-full py-4 px-6 text-xl border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <a href={`/video/${video.id}`} className="block">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-[200px] object-cover" // Sesuaikan tinggi gambar
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800 leading-tight">{video.title}</h3>
                </div>
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-xl text-gray-500 col-span-full mt-6">Tidak ada video yang ditemukan</p>
        )}
      </div>
    </div>
  );
}

export default SearchIsiVideo;
