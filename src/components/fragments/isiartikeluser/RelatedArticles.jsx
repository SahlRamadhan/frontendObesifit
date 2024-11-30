import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllArtikel } from "../../../services/artikel.config";
import { useAuth } from "@/context/AuthContext";

function RelatedArticles() {
  const [articles, setArticles] = useState([]);
  const { userRole } = useAuth();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getAllArtikel();
        if (data) {
          // Acak artikel dan ambil 3 artikel pertama
          const randomArticles = data.sort(() => Math.random() - 0.5).slice(0, 3);
          setArticles(randomArticles);
        }
      } catch (error) {
        console.error("Error fetching related articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const getArticleUrl = (id) => {
    if (userRole === 2) return `/isiartikeluser/${id}`; // Role User
    if (userRole === 3) return `/isiartikeldokter/${id}`; // Role Dokter
    return `/artikel/${id}`; // Default fallback
  };
  const getShortContent = (content, maxLength = 100) => {
    if (!content) return "Penjelasan tidak tersedia.";
    return content.length > maxLength ? `${content.substring(0, maxLength)}...` : content;
  };


  return (
    <div className="mt-16 sm:mt-20 p-6 rounded-lg">
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">Mau cari artikel lain?</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link to={getArticleUrl(article.id)} key={article.id} className="p-4 sm:p-6 rounded-lg shadow-md block transition-transform transform hover:scale-105">
            <img src={article.articles_files[0]?.thumbnail || "https://via.placeholder.com/300"} alt={article.judul} className="w-full h-40 sm:h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-700 text-base sm:text-lg font-semibold">{article.judul}</p>
            <p className="text-gray-500 text-sm sm:text-base">{getShortContent(article.content)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedArticles;
