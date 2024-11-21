import React, { useState } from "react";
import { FiSearch, FiX, FiEdit } from "react-icons/fi";

const ArticleList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "edit" atau "delete"
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Memahami Obesitas: Penyebab dan Dampaknya bagi Kesehatan",
      subtitle: "Penyebab dan Dampaknya",
      content: "Isi artikel lengkap...",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "5 Buah Rendah Kalori yang Cocok untuk Diet Obesitas",
      subtitle: "Buah rendah kalori",
      content: "Isi artikel lengkap...",
      image: "https://via.placeholder.com/150",
    },
  ]);

  const filteredArticles = articles.filter((article) => article.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleDeleteClick = (article) => {
    setSelectedArticle(article);
    setModalType("delete");
    setIsModalOpen(true);
  };

  const handleEditClick = (article) => {
    setSelectedArticle(article);
    setModalType("edit");
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setArticles((prevArticles) => prevArticles.filter((article) => article.id !== selectedArticle.id));
    setIsModalOpen(false);
  };

  const handleSaveEdit = () => {
    setArticles((prevArticles) => prevArticles.map((article) => (article.id === selectedArticle.id ? selectedArticle : article)));
    setIsModalOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedArticle((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Temukan Artikel</h2>

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
                  <img src={article.image} alt="article" className="w-20 h-12  object-cover rounded-lg" />
                  <div>
                    <h3 className="text-gray-800 font-medium">{article.title}</h3>
                    <p className="text-sm text-gray-500">{article.subtitle}</p>
                  </div>
                </div>
                <div className="flex space-x-3 sm:space-x-4 mt-3 sm:mt-0">
                  <FiEdit className="text-blue-500 cursor-pointer hover:text-blue-700 transition" size={20} onClick={() => handleEditClick(article)} />
                  <FiX className="text-red-500 cursor-pointer hover:text-red-700 transition" size={20} onClick={() => handleDeleteClick(article)} />
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
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-3/4 lg:w-1/3 relative">
            {modalType === "delete" && (
              <>
                <h2 className="text-lg font-bold mb-4 text-center">Yakin ingin menghapus artikel ini?</h2>
                <p className="text-center text-gray-700 mb-6">{selectedArticle?.title}</p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700" onClick={() => setIsModalOpen(false)}>
                    Batalkan
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700" onClick={handleConfirmDelete}>
                    Hapus
                  </button>
                </div>
              </>
            )}
            {modalType === "edit" && (
              <>
                <h2 className="text-lg font-bold mb-4 text-center">Edit Artikel</h2>
                <div className="mb-4">
                  <label className="block font-medium">Gambar Artikel</label>
                  <img src={selectedArticle?.image || "https://via.placeholder.com/150"} alt="Gambar Artikel" className="w-full h-40 object-cover rounded-lg mb-4" />
                  <input type="file" onChange={handleImageChange} className="w-full p-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                  <label className="block font-medium">Judul Artikel</label>
                  <input
                    type="text"
                    value={selectedArticle?.title || ""}
                    onChange={(e) =>
                      setSelectedArticle((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium">Sub Judul</label>
                  <input
                    type="text"
                    value={selectedArticle?.subtitle || ""}
                    onChange={(e) =>
                      setSelectedArticle((prev) => ({
                        ...prev,
                        subtitle: e.target.value,
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
                <div className="flex justify-center space-x-4 mt-4">
                  <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700" onClick={() => setIsModalOpen(false)}>
                    Batalkan
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700" onClick={handleSaveEdit}>
                    Simpan
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleList;
