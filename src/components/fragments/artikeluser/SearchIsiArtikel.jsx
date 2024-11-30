import React, { useEffect, useState } from "react";
import { getAllArtikel } from "../../../services/artikel.config"; 
import { useAuth } from "@/context/AuthContext";

function SearchIsiArtikel() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const { userRole } = useAuth();

  // Ambil artikel dari database saat komponen di-mount
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getAllArtikel();
        if (data) {
          setArticles(data);
          setFilteredArticles(data); // Awalnya tampilkan semua artikel
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  // Fungsi pencarian artikel
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = articles.filter(
      (article) => article.judul.toLowerCase().includes(term) // Pastikan properti sesuai dengan data API
    );
    setFilteredArticles(filtered);
  };

  const getArticleUrl = (id) => {
    if (userRole === 2) return `/isiartikeluser/${id}`; // Role User
    if (userRole === 3) return `/isiartikeldokter/${id}`; // Role Dokter
    return `/artikel/${id}`; // Default fallback
  };

  return (
    <div className="max-w-screen-xl mx-auto px-8 py-16">
      {/* Input Pencarian */}
      <div className="mb-12">
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Cari artikel..." className="w-full py-4 px-6 text-xl border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500" />
      </div>

      {/* Grid Artikel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <a href={getArticleUrl(article.id)} className="block">
                <img
                  src={article.articles_files[0]?.thumbnail || "https://via.placeholder.com/300"} // Gambar dari database atau placeholder
                  alt={article.judul}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800 leading-tight">{article.judul}</h3>
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
