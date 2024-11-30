import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../../services/artikel.config";

function WelcomeIsiArtikelDokter() {
  const { id } = useParams(); // Ambil ID artikel dari URL
  const [articleTitle, setArticleTitle] = useState(""); // State untuk menyimpan judul artikel

  useEffect(() => {
    const fetchArticleTitle = async () => {
      try {
        const data = await getArticleById(id); // Panggil API berdasarkan ID artikel
        setArticleTitle(data.judul); // Simpan judul artikel di state
      } catch (error) {
        console.error("Error fetching article title:", error);
        setArticleTitle("Artikel tidak ditemukan!"); // Tampilkan pesan jika artikel tidak ditemukan
      }
    };

    fetchArticleTitle();
  }, [id]);

  return (
    <section className="text-center py-10 bg-white">
      <h2 className="text-3xl font-semibold">{articleTitle}</h2> {/* Tampilkan judul artikel */}
    </section>
  );
}

export default WelcomeIsiArtikelDokter;
