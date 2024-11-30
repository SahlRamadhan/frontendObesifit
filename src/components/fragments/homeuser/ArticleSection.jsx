import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllArtikel } from "../../../services/artikel.config";
import { useAuth } from "@/context/AuthContext"; // Import useAuth untuk role pengguna

function ArticleSection() {
  const [articles, setArticles] = useState([]);
  const { userRole } = useAuth(); // Dapatkan role pengguna dari context

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getAllArtikel();
        if (data) {
          const artikelRandom = data.sort(() => Math.random() - 0.5).slice(0, 8);
          setArticles(artikelRandom);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  // Fungsi untuk menentukan URL artikel berdasarkan role
  const getArticleUrl = (id) => {
    if (userRole === 2) return `/isiartikeluser/${id}`; // Role User
    if (userRole === 3) return `/isiartikeldokter/${id}`; // Role Dokter
    return `/artikel/${id}`; // Default fallback
  };

  // Fungsi untuk menentukan URL halaman artikel list berdasarkan role
  const getArticleListUrl = () => {
    if (userRole === 2) return "/artikeluser"; // Role User
    if (userRole === 3) return "/artikeldokter"; // Role Dokter
    return "/artikel"; // Default fallback
  };

  return (
    <section className="max-w-screen-2xl mx-auto py-14 bg-white px-4 sm:px-6 lg:px-8 relative">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-left mb-4 sm:mb-0">Kami punya artikel edukasi tentang obesitas untuk kamu!</h2>
        {/* Gunakan getArticleListUrl untuk menentukan URL sesuai role */}
        <Link to={getArticleListUrl()}>
          <button className="bg-black text-white px-4 py-2 text-lg rounded hover:bg-gray-800">Cek Lebih Banyak</button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            {/* Gunakan getArticleUrl untuk menentukan URL artikel */}
            <a href={getArticleUrl(article.id)} className="block">
              <img src={article.articles_files[0]?.thumbnail} alt={article.judul} className="w-full h-56 object-cover" />
            </a>
            <a href={getArticleUrl(article.id)} className="block p-5 text-lg font-medium text-gray-800 hover:text-green-600">
              {article.judul}
            </a>
          </div>
        ))}
      </div>

      <div className="w-full h-1 bg-green-500 my-10"></div>
    </section>
  );
}

export default ArticleSection;
