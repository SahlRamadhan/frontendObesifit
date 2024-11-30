import React, { useState, useEffect } from "react";
import { FiSearch, FiEdit, FiTrash, FiArrowLeft } from "react-icons/fi";
import { getAllArtikel, deleteArticle, updateArticle } from "../../../services/artikel.config";
import Swal from "sweetalert2";

const ArticleList = ({ onArticlesUpdate }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articles, setArticles] = useState([]);

  // Fetch data artikel dari server saat komponen dimuat
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getAllArtikel(); // Panggil API untuk mendapatkan artikel
        setArticles(data);
        onArticlesUpdate(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  // Filter artikel berdasarkan pencarian
  const filteredArticles = articles.filter((article) => article.judul.toLowerCase().includes(searchTerm.toLowerCase()));

  // Event ketika tombol Delete di klik
  const handleDeleteClick = async (article) => {
    const result = await Swal.fire({
      title: "Yakin ingin menghapus artikel ini?",
      text: "Artikel yang dihapus tidak bisa dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      try {
        await deleteArticle(article.id); // Panggil API delete
        setArticles((prevArticles) => prevArticles.filter((item) => item.id !== article.id)); // Hapus dari state lokal

        if (onArticlesUpdate) {
          onArticlesUpdate();
        }

        Swal.fire({
          icon: "success",
          title: "Artikel berhasil dihapus!",
          timer: 1500,
          showConfirmButton: false,
        });
      } catch (error) {
        console.error("Error deleting article:", error);
        Swal.fire({
          icon: "error",
          title: "Gagal menghapus artikel!",
          text: error.message,
        });
      }
    }
  };

  // Event ketika tombol Edit di klik
  const handleEditClick = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  // Menyimpan perubahan artikel ke server dan state lokal
  const handleSaveEdit = async () => {
    const result = await Swal.fire({
      title: "Simpan perubahan artikel?",
      text: "Pastikan semua data sudah benar sebelum menyimpan.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Simpan",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      try {
        const formData = new FormData();
        formData.append("judul", selectedArticle.judul);
        formData.append("sub_judul", selectedArticle.sub_judul);
        formData.append("content", selectedArticle.content);

        const files = selectedArticle?.articles_files[0];
        if (files?.newThumbnail) formData.append("thumbnail", files.newThumbnail);
        if (files?.newImages) formData.append("images", files.newImages);

        const response = await updateArticle(selectedArticle.id, formData);
        const updatedArticle = response.article;

        setArticles((prev) =>
          prev.map((article) =>
            article.id === updatedArticle.id
              ? {
                  ...updatedArticle,
                  articles_files: updatedArticle.articles_files.map((file) => ({
                    ...file,
                    images: `${file.images}?t=${new Date().getTime()}`, // Cache-busting URL
                    thumbnail: `${file.thumbnail}?t=${new Date().getTime()}`, // Cache-busting URL
                  })),
                }
              : article
          )
        );

        setIsModalOpen(false);
        Swal.fire({
          icon: "success",
          title: "Artikel berhasil diperbarui!",
          timer: 1500,
          showConfirmButton: false,
        });
      } catch (error) {
        console.error("Error updating article:", error);
        Swal.fire({
          icon: "error",
          title: "Gagal memperbarui artikel!",
          text: error.message,
        });
      }
    }
  };

  // Mengubah gambar artikel
  const handleImageChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedArticle((prev) => {
          const updatedFiles = [...prev.articles_files];
          if (field === "thumbnail") {
            updatedFiles[0] = {
              ...updatedFiles[0],
              thumbnail: reader.result, // Menampilkan data base64 untuk pratinjau
              newThumbnail: file, // File baru yang akan dikirim ke server
            };
          } else if (field === "images") {
            updatedFiles[0] = {
              ...updatedFiles[0],
              images: reader.result, // Menampilkan data base64 untuk pratinjau
              newImages: file, // File baru yang akan dikirim ke server
            };
          }
          return { ...prev, articles_files: updatedFiles };
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md max-w-screen-lg mx-auto">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Temukan Artikel</h2>

      <button className="mb-6 flex items-center text-gray-600 hover:text-gray-900" onClick={() => window.history.back()}>
        <FiArrowLeft className="mr-2" />
        Kembali
      </button>

      {/* Search Bar */}
      <div className="mb-6 flex items-center border rounded-lg bg-gray-50 p-2 shadow-sm">
        <FiSearch className="text-gray-500 mx-2 sm:mx-3" size={20} />
        <input type="text" placeholder="Cari artikel berdasarkan judul" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full bg-transparent focus:outline-none p-1 sm:p-2" />
      </div>

      {/* Daftar Artikel */}
      <div>
        {filteredArticles.length > 0 ? (
          <ul className="space-y-3 sm:space-y-4">
            {filteredArticles.map((article) => (
              <li key={article.id} className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <img src={article.articles_files[0]?.thumbnail || "https://via.placeholder.com/150"} alt="article" className="w-20 h-12 object-cover rounded-lg" />
                  <div>
                    <h3 className="text-gray-800 font-medium">{article.judul}</h3>
                    <p className="text-sm text-gray-500">{article.sub_judul}</p>
                  </div>
                </div>
                <div className="flex space-x-3 sm:space-x-4 mt-3 sm:mt-0">
                  <FiEdit className="text-blue-500 cursor-pointer hover:text-blue-700 transition" size={20} onClick={() => handleEditClick(article)} />
                  <FiTrash className="text-red-500 cursor-pointer hover:text-red-700 transition" size={20} onClick={() => handleDeleteClick(article)} />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">Artikel tidak ditemukan.</p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-3/4 lg:w-1/2">
            <h2 className="text-lg font-bold mb-4 text-center">Edit Artikel</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Thumbnail Artikel */}
              <div className="flex flex-col items-center">
                <img
                  src={
                    selectedArticle?.articles_files[0]?.newThumbnail
                      ? URL.createObjectURL(selectedArticle.articles_files[0].newThumbnail) // Pratinjau gambar baru
                      : selectedArticle?.articles_files[0]?.thumbnail || "https://via.placeholder.com/150" // Gambar lama
                  }
                  alt="Gambar Utama"
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <label>
                  <input type="file" onChange={(e) => handleImageChange(e, "thumbnail")} className="hidden" accept="image/*" />
                  <span className="text-sm text-gray-600 cursor-pointer">Pilih Thumbnail</span>
                </label>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={
                    selectedArticle?.articles_files[0]?.newImages
                      ? URL.createObjectURL(selectedArticle.articles_files[0].newImages) // Pratinjau gambar baru
                      : selectedArticle?.articles_files[0]?.images || "https://via.placeholder.com/150" // Gambar lama
                  }
                  alt="Gambar Utama"
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <label>
                  <input type="file" onChange={(e) => handleImageChange(e, "images")} className="hidden" accept="image/*" />
                  <span className="text-sm text-gray-600 cursor-pointer">Pilih Gambar Utama</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-medium">Judul Artikel</label>
              <input
                type="text"
                value={selectedArticle?.judul || ""}
                onChange={(e) =>
                  setSelectedArticle((prev) => ({
                    ...prev,
                    judul: e.target.value,
                  }))
                }
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Sub Judul</label>
              <input
                type="text"
                value={selectedArticle?.sub_judul || ""}
                onChange={(e) =>
                  setSelectedArticle((prev) => ({
                    ...prev,
                    sub_judul: e.target.value,
                  }))
                }
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Isi Artikel</label>
              <textarea
                value={selectedArticle?.content || ""}
                onChange={(e) =>
                  setSelectedArticle((prev) => ({
                    ...prev,
                    content: e.target.value,
                  }))
                }
                className="w-full p-2 border rounded-lg h-40"
              ></textarea>
            </div>
            <div className="flex justify-end space-x-4 mt-4">
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700" onClick={() => setIsModalOpen(false)}>
                Batalkan
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700" onClick={handleSaveEdit}>
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleList;
