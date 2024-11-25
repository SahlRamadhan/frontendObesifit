import React, { useState } from "react";
import { FiSearch, FiEdit, FiTrash } from "react-icons/fi";

const VideoList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "edit" atau "delete"
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Benarkah Obesitas Karena Faktor Keturunan?",
      description: "Pembahasan tentang hubungan antara faktor genetik dan obesitas.",
      thumbnail: "https://via.placeholder.com/300x150",
    },
    {
      id: 2,
      title: "Tips Mengatur Pola Makan Sehat",
      description: "Panduan lengkap untuk menjaga berat badan ideal.",
      thumbnail: "https://via.placeholder.com/300x150",
    },
  ]);

  const filteredVideos = videos.filter((video) => video.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleDeleteClick = (video) => {
    setSelectedVideo(video);
    setModalType("delete");
    setIsModalOpen(true);
  };

  const handleEditClick = (video) => {
    setSelectedVideo(video);
    setModalType("edit");
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setVideos((prevVideos) => prevVideos.filter((video) => video.id !== selectedVideo.id));
    setIsModalOpen(false);
  };

  const handleSaveEdit = () => {
    setVideos((prevVideos) => prevVideos.map((video) => (video.id === selectedVideo.id ? selectedVideo : video)));
    setIsModalOpen(false);
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedVideo((prev) => ({
          ...prev,
          thumbnail: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Temukan Video</h2>

      {/* Search Bar */}
      <div className="mb-6 flex items-center border rounded-lg bg-gray-50 p-2 shadow-sm">
        <FiSearch className="text-gray-500 mx-2 sm:mx-3" size={20} />
        <input type="text" placeholder="Cari video berdasarkan judul" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full bg-transparent focus:outline-none p-1 sm:p-2" />
      </div>

      {/* Daftar Video */}
      <div>
        {filteredVideos.length > 0 ? (
          <ul className="space-y-3 sm:space-y-4">
            {filteredVideos.map((video) => (
              <li key={video.id} className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <img src={video.thumbnail} alt="thumbnail" className="w-20 h-12 object-cover rounded-lg" />
                  <div>
                    <h3 className="text-gray-800 font-medium">{video.title}</h3>
                    <p className="text-sm text-gray-500">{video.description}</p>
                  </div>
                </div>
                <div className="flex space-x-3 sm:space-x-4 mt-3 sm:mt-0">
                  <FiEdit className="text-blue-500 cursor-pointer hover:text-blue-700 transition" size={20} onClick={() => handleEditClick(video)} />
                  <FiTrash className="text-red-500 cursor-pointer hover:text-red-700 transition" size={20} onClick={() => handleDeleteClick(video)} />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">Video tidak ditemukan.</p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 sm:w-3/4 lg:w-1/2">
            {modalType === "delete" && (
              <>
                <h2 className="text-lg font-bold mb-4 text-center">Yakin ingin menghapus video ini?</h2>
                <p className="text-center text-gray-700 mb-6">{selectedVideo?.title}</p>
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
                <h2 className="text-lg font-bold mb-4 text-center">Edit Video</h2>
                <div className="mb-4">
                  <label className="block font-medium">Thumbnail Video</label>
                  <img src={selectedVideo?.thumbnail || "https://via.placeholder.com/300x150"} alt="Thumbnail Video" className="w-full h-40 object-cover rounded-lg mb-4" />
                  <input type="file" onChange={handleThumbnailChange} className="w-full p-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                  <label className="block font-medium">Judul Video</label>
                  <input
                    type="text"
                    value={selectedVideo?.title || ""}
                    onChange={(e) =>
                      setSelectedVideo((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium">Deskripsi</label>
                  <textarea
                    value={selectedVideo?.description || ""}
                    onChange={(e) =>
                      setSelectedVideo((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    className="w-full p-2 border rounded-lg h-24"
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

export default VideoList;
