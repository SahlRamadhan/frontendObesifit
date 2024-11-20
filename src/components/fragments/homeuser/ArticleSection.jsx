import React from "react";
import { Link } from "react-router-dom"; // Tambahkan Link dari react-router-dom
import image1 from "../../../assets/images/Artikel Thumbanail (1).png";
import image2 from "../../../assets/images/Artikel Thumbanail (2).png";
import image3 from "../../../assets/images/Artikel Thumbanail (3).png";
import image4 from "../../../assets/images/Artikel Thumbanail (4).png";
import image5 from "../../../assets/images/Artikel Thumbanail (5).png";
import image6 from "../../../assets/images/Artikel Thumbanail (6).png";
import image7 from "../../../assets/images/Artikel Thumbanail (7).png";
import image8 from "../../../assets/images/Artikel Thumbanail (8).png";

function ArticleSection() {
  const articles = [
    { image: image1, title: "Memahami Obesitas: Penyebab dan Dampaknya bagi Kesehatan", link: "/isiartikeluser" },
    { image: image2, title: "Pentingnya Mengelola Berat Badan untuk Kesehatan Mental", link: "/artikel/2" },
    { image: image3, title: "Mitos tentang Obat Penurun Berat Badan yang Perlu Diketahui", link: "/artikel/3" },
    { image: image4, title: "5 Buah Rendah Kalori yang Cocok untuk Diet Obesitas", link: "/artikel/4" },
    { image: image5, title: "Mitos dan Fakta: Apakah Es Krim Benar-Benar Menyebabkan Obesitas?", link: "/artikel/5" },
    { image: image6, title: "Tanda-tanda Kesehatan Buruk Akibat Obesitas", link: "/artikel/6" },
    { image: image7, title: "Dampak Jangka Panjang Obesitas pada Kualitas Hidup", link: "/artikel/7" },
    { image: image8, title: "Strategi Mental untuk Mengatasi Obesitas", link: "/artikel/8" },
  ];

  return (
    <section className="max-w-screen-2xl mx-auto py-14 bg-white px-4 sm:px-6 lg:px-8 relative">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        {" "}
        {/* Responsif untuk teks dan tombol */}
        <h2 className="text-2xl font-semibold text-left mb-4 sm:mb-0">Kami punya artikel edukasi tentang obesitas untuk kamu!</h2>
        <Link to="/artikeluser">
          {" "}
          {/* Gunakan Link untuk navigasi */}
          <button className="bg-black text-white px-4 py-2 text-lg rounded hover:bg-gray-800">Cek Lebih Banyak</button>
        </Link>
      </div>

      {/* Grid untuk artikel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {" "}
        {/* Responsif: 1, 2, 4 kolom */}
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            {/* Tambahkan tautan di sekitar gambar */}
            <a href={article.link} className="block">
              <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />
            </a>
            <a href={article.link} className="block p-5 text-lg font-medium text-gray-800 hover:text-green-600">
              {article.title}
            </a>
          </div>
        ))}
      </div>

      {/* Separator hijau */}
      <div className="w-full h-1 bg-green-500 my-10"></div>
    </section>
  );
}

export default ArticleSection;
