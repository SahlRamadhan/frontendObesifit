import React from 'react';

function IsiVideoUser() {
  const mainVideo = {
    title: "Benarkah Obesitas Karena Faktor Keturunan?",
    date: "01 November 2024",
    description: "Pernah bertanya-tanya mengapa berat badan sulit dikontrol? Banyak yang percaya bahwa obesitas adalah masalah genetik. Namun, benarkah demikian? Video ini akan mengungkap fakta sebenarnya tentang peran genetik dalam obesitas dan bagaimana gaya hidup juga sangat berpengaruh. Temukan tips-tips efektif untuk menurunkan berat badan meskipun memiliki faktor keturunan obesitas. Jangan lewatkan!",
    image: "/images/main-video-thumbnail.png" // Ganti dengan path gambar yang sesuai
  };

  const otherVideos = [
    {
      title: "Cara Menurunkan Berat Badan demi Cegah Obesitas",
      image: "/images/video1.png" // Ganti dengan path gambar yang sesuai
    },
    {
      title: "4 Masalah Kesehatan Remaja Indonesia termasuk Obesitas",
      image: "/images/video2.png" // Ganti dengan path gambar yang sesuai
    },
    {
      title: "Obesitas: Sekedar Masalah Kecil atau Ancaman Serius?",
      image: "/images/video3.png" // Ganti dengan path gambar yang sesuai
    },
    {
      title: "Lima Penyakit yang Bakal Kamu Temui ketika Kamu Obesitas",
      image: "/images/video4.png" // Ganti dengan path gambar yang sesuai
    }
  ];

  return (
    <div className="max-w-screen-2xl mx-auto p-12 rounded-lg mt-24 mb-48">
      {/* Main Video Section */}
      <div className="mb-12">
        <img
          src={mainVideo.image}
          alt={mainVideo.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        <h1 className="text-4xl font-semibold text-gray-800 mb-3">
          {mainVideo.title}
        </h1>
        <p className="text-gray-500 text-base mb-5">{mainVideo.date}</p>
        <p className="text-gray-700 text-xl">{mainVideo.description}</p>
      </div>

      {/* Other Videos Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 border-b-2 pb-3 border-gray-200">
          Mau cari video lain?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {otherVideos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden"
            >
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-40 object-cover"
              />
              <p className="p-5 text-gray-800 text-lg font-semibold">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IsiVideoUser;
