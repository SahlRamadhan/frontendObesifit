import React, { useState } from "react";

const VideoList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "edit" atau "delete"
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Benarkah Obesitas Karena Faktor Keturunan?",
      description:
        "Pembahasan tentang hubungan antara faktor genetik dan obesitas.",
      thumbnail: "https://via.placeholder.com/300x150",
    },
    {
      id: 2,
      title: "Tips Mengatur Pola Makan Sehat",
      description: "Panduan lengkap untuk menjaga berat badan ideal.",
      thumbnail: "https://via.placeholder.com/300x150",
    },
  ]);

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    setVideos((prevVideos) =>
      prevVideos.filter((video) => video.id !== selectedVideo.id)
    );
    setIsModalOpen(false);
  };

  const handleSaveEdit = () => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === selectedVideo.id ? selectedVideo : video
      )
    );
    setIsModalOpen(false);
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedVideo((prev) => ({
          ...prev,
          thumbnail: reader.result, // Menyimpan hasil gambar dalam bentuk base64
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Kelola Video</h2>
      <input
        type="text"
        placeholder="Temukan video"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-lg p-3 w-full mb-6"
      />
      <ul className="space-y-4">
        {filteredVideos.map((video) => (
          <li
            key={video.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <img
                src={video.thumbnail}
                alt="thumbnail"
                className="w-16 h-16 rounded-lg"
              />
              <div>
                <h3 className="font-medium text-gray-800">{video.title}</h3>
                <p className="text-sm text-gray-500">{video.description}</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => handleEditClick(video)}
              >
                ✏️
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDeleteClick(video)}
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
                  Yakin ingin menghapus video ini?
                </h2>
                <p className="text-center">{selectedVideo?.title}</p>
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
                <h2 className="text-lg font-bold mb-4 text-center">Edit Video</h2>
                <div className="grid grid-cols-2 gap-6">
                  {/* Thumbnail */}
                 {/* Thumbnail */}
{/* Thumbnail */}
<div>
  <label className="block font-medium">Edit Video</label>
  <img
    src={selectedVideo.thumbnail || "https://via.placeholder.com/300x150"}
    alt="Thumbnail Video"
    className="w-full h-[500px] object-cover rounded-lg mb-4" // Tinggi diatur menjadi 500px
  />
  <input
    type="file"
    onChange={handleThumbnailChange}
    className="w-full p-2 border rounded-lg"
  />
</div>



                  {/* Judul dan Deskripsi */}
                  <div>
                    <div className="mb-4">
                      <label className="block font-medium">Judul Video</label>
                      <input
                        type="text"
                        value={selectedVideo.title}
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
                        value={selectedVideo.description}
                        onChange={(e) =>
                          setSelectedVideo((prev) => ({
                            ...prev,
                            description: e.target.value,
                          }))
                        }
                        className="w-full p-2 border rounded-lg h-24"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
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

export default VideoList;
