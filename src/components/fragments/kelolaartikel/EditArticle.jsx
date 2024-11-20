import React, { useState } from "react";

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
      image: "https://via.placeholder.com/300x150",
    },
    {
      id: 2,
      title: "5 Buah Rendah Kalori yang Cocok untuk Diet Obesitas",
      subtitle: "Buah rendah kalori",
      content: "Isi artikel lengkap...",
      image: "https://via.placeholder.com/300x150",
    },
  ]);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    setArticles((prevArticles) =>
      prevArticles.filter((article) => article.id !== selectedArticle.id)
    );
    setIsModalOpen(false);
  };

  const handleSaveEdit = () => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === selectedArticle.id ? selectedArticle : article
      )
    );
    setIsModalOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedArticle((prev) => ({
          ...prev,
          image: reader.result, // Menyimpan hasil gambar dalam bentuk base64
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Kelola Artikel</h2>
      <input
        type="text"
        placeholder="Cari artikel"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-lg p-3 w-full mb-6"
      />
      <ul className="space-y-4">
        {filteredArticles.map((article) => (
          <li
            key={article.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <img
                src={article.image}
                alt="Thumbnail"
                className="w-16 h-16 rounded-lg"
              />
              <div>
                <h3 className="font-medium text-gray-800">{article.title}</h3>
                <p className="text-sm text-gray-500">{article.subtitle}</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => handleEditClick(article)}
              >
                ✏️
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDeleteClick(article)}
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-2/3 relative">
            {modalType === "delete" && (
              <>
                <h2 className="text-lg font-bold mb-4 text-center">
                  Yakin ingin menghapus artikel ini?
                </h2>
                <p className="text-center">{selectedArticle?.title}</p>
                <div className="flex justify-center space-x-4 mt-6">
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Batalkan
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    onClick={handleConfirmDelete}
                  >
                    Hapus
                  </button>
                </div>
              </>
            )}
            {modalType === "edit" && (
              <>
                <h2 className="text-lg font-bold mb-4 text-center">
                  Edit Artikel
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  {/* Thumbnail */}
                  <div>
                    <label className="block font-medium mb-2">
                      Gambar Artikel
                    </label>
                    <img
                      src={
                        selectedArticle?.image || "https://via.placeholder.com/300x150"
                      }
                      alt="Gambar Artikel"
                      className="w-full h-60 object-cover rounded-lg mb-4"
                    />
                    <input
                      type="file"
                      onChange={handleImageChange}
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  {/* Judul dan Sub Judul */}
                  <div>
                    <div className="mb-4">
                      <label className="block font-medium">Judul Artikel</label>
                      <input
                        type="text"
                        value={selectedArticle?.title}
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
                        value={selectedArticle?.subtitle}
                        onChange={(e) =>
                          setSelectedArticle((prev) => ({
                            ...prev,
                            subtitle: e.target.value,
                          }))
                        }
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                {/* Isi Artikel */}
                <div className="mt-6">
                  <label className="block font-medium">Isi Artikel</label>
                  <textarea
                    value={selectedArticle?.content}
                    onChange={(e) =>
                      setSelectedArticle((prev) => ({
                        ...prev,
                        content: e.target.value,
                      }))
                    }
                    className="w-full p-2 border rounded-lg h-40"
                  ></textarea>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Batalkan
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                    onClick={handleSaveEdit}
                  >
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
