import React from "react";
import thumbnail from "../../../assets/images/Video Thumbnail (1).jpg";
import thumbnail2 from "../../../assets/images/Video Thumbnail (2).jpg";
import thumbnail3 from "../../../assets/images/Video Thumbnail (3).jpg";
import thumbnail4 from "../../../assets/images/Video Thumbnail (4).jpg";
import thumbnail5 from "../../../assets/images/Video Thumbnail (5).jpg";

function IsiVideoUser() {
  const mainVideo = {
    title: "Benarkah Obesitas Karena Faktor Keturunan?",
    date: "01 November 2024",
    description:
      "Pernah bertanya-tanya mengapa berat badan sulit dikontrol? Banyak yang percaya bahwa obesitas adalah masalah genetik. Namun, benarkah demikian? Video ini akan mengungkap fakta sebenarnya tentang peran genetik dalam obesitas dan bagaimana gaya hidup juga sangat berpengaruh. Temukan tips-tips efektif untuk menurunkan berat badan meskipun memiliki faktor keturunan obesitas. Jangan lewatkan!",
    videoSrc: "/videos/main-video.mp4", // Path video
    poster: thumbnail, // Path thumbnail
  };

  const otherVideos = [
    {
      title: "Cara Menurunkan Berat Badan demi Cegah Obesitas",
      videoSrc: "/videos/video1.mp4",
      poster: thumbnail2,
    },
    {
      title: "4 Masalah Kesehatan Remaja Indonesia termasuk Obesitas",
      videoSrc: "/videos/video2.mp4",
      poster: thumbnail3,
    },
    {
      title: "Obesitas: Sekedar Masalah Kecil atau Ancaman Serius?",
      videoSrc: "/videos/video3.mp4",
      poster: thumbnail5,
    },
    {
      title: "Lima Penyakit yang Bakal Kamu Temui ketika Kamu Obesitas",
      videoSrc: "/videos/video4.mp4",
      poster: thumbnail4,
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto p-12 rounded-lg mt-24 mb-48">
      {/* Main Video Section */}
      <div className="mb-12">
        <video controls poster={mainVideo.poster} className="w-full h-96 object-cover rounded-lg mb-8">
          <source src={mainVideo.videoSrc} type="video/mp4" />
          Browser Anda tidak mendukung video.
        </video>
        <h1 className="text-4xl font-semibold text-gray-800 mb-3">{mainVideo.title}</h1>
        <p className="text-gray-500 text-base mb-5">{mainVideo.date}</p>
        <p className="text-gray-700 text-xl">{mainVideo.description}</p>
      </div>

      {/* Other Videos Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 border-b-2 pb-3 border-gray-200">Mau cari video lain?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {otherVideos.map((video, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <video controls poster={video.poster} className="w-full h-40 object-cover">
                <source src={video.videoSrc} type="video/mp4" />
                Browser Anda tidak mendukung video.
              </video>
              <p className="p-5 text-gray-800 text-lg font-semibold">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IsiVideoUser;
