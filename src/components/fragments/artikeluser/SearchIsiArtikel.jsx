import React, { useState } from "react";
import images1 from "../../../assets/images/Artikel Thumbanail (1).png";
import images2 from "../../../assets/images/Artikel Thumbanail (2).png";
import images3 from "../../../assets/images/Artikel Thumbanail (3).png";
import images4 from "../../../assets/images/Artikel Thumbanail (4).png";
import images5 from "../../../assets/images/Artikel Thumbanail (5).png";
import images6 from "../../../assets/images/Artikel Thumbanail (6).png";
import images7 from "../../../assets/images/Artikel Thumbanail (7).png";
import images8 from "../../../assets/images/Artikel Thumbanail (8).png";

function SearchIsiArtikel() {
  const articles = [
    { id: 1, title: "Memahami Obesitas: Penyebab dan Dampaknya bagi Kesehatan", image: images1 },
    { id: 2, title: "5 Buah Rendah Kalori yang Cocok untuk Diet Obesitas", image: images2 },
    { id: 3, title: "Pentingnya Mengelola Berat Badan untuk Kesehatan Mental", image: images3 },
    { id: 4, title: "Mitos tentang Obat Penurun Berat Badan yang Perlu Diketahui", image: images4 },
    { id: 5, title: "Cara Efektif Mengukur Lemak Tubuh", image: images5 },
    { id: 6, title: "Pola Makan Sehat yang Menyebabkan Obesitas", image: images6 },
    { id: 7, title: "Penyebab dan Dampak Obesitas pada Kesehatan Tubuh", image: images7 },
    { id: 8, title: "Tips untuk Mengatasi Obesitas secara Mental", image: images8 },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = articles.filter((article) => article.title.toLowerCase().includes(term));
    setFilteredArticles(filtered);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-8 py-16">
      <div className="mb-12">
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Cari artikel..." className="w-full py-4 px-6 text-xl border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <a href={`/artikel/${article.id}`} className="block">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[200px] object-cover" // Sesuaikan tinggi gambar
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800 leading-tight">{article.title}</h3>
                </div>
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-xl text-gray-500 col-span-full mt-6">Tidak ada artikel yang ditemukan</p>
        )}
      </div>
    </div>
  );
}

export default SearchIsiArtikel;
