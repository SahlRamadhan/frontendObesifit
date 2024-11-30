import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../../services/artikel.config";

function IsiArtikelDokter() {
  const { id } = useParams(); // Ambil ID dari URL
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await getArticleById(id);
        setArticle(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [id]);

  if (isLoading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  if (!article) {
    return <p className="text-red-500 text-center">Artikel tidak ditemukan!</p>;
  }

  return (
    <div className="max-w-screen-lg mx-auto p-6 sm:p-10 bg-white">
      {/* Gambar Utama */}
      {article.articles_files[0]?.images && (
        <div className="mb-8">
          <img src={article.articles_files[0].images} alt={article.judul} className="w-full h-[400px] object-cover rounded-lg" />
        </div>
      )}

      {/* Judul Artikel */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">{article.sub_judul}</h1>

      {/* Konten Artikel */}
      <div className="text-gray-800 text-lg leading-relaxed">
        <p className="mb-6">{article.content}</p>
      </div>
    </div>
  );
}

export default IsiArtikelDokter;
