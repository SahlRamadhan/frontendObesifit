import React, { useState, useEffect } from "react";
import { FiSearch, FiEdit, FiTrash, FiArrowLeft } from "react-icons/fi";
import { getAllVideo, deleteVideo, updateVideo } from "../../../services/video.config";
import Swal from "sweetalert2";

const ListVideoDokter = ({ onVideosUpdate }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  // Fetch video data dari server
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getAllVideo();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  // Filter video berdasarkan pencarian
  const filteredVideos = videos.filter((video) => video.judul.toLowerCase().includes(searchTerm.toLowerCase()));

  // Hapus video
  const handleDeleteClick = async (video) => {
    const result = await Swal.fire({
      title: "Yakin ingin menghapus video ini?",
      text: "Video yang dihapus tidak bisa dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      try {
        await deleteVideo(video.id);
        setVideos((prev) => prev.filter((item) => item.id !== video.id));

        if (onVideosUpdate) {
          onVideosUpdate();
        }
        Swal.fire({
          icon: "success",
          title: "Video berhasil dihapus!",
          timer: 1500,
          showConfirmButton: false,
        });
      } catch (error) {
        console.error("Error deleting video:", error);
        Swal.fire({
          icon: "error",
          title: "Gagal menghapus video!",
          text: error.message,
        });
      }
    }
  };

  // Buka modal edit
  const handleEditClick = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  // Simpan perubahan
  const handleSaveEdit = async () => {
    const result = await Swal.fire({
      title: "Simpan perubahan video?",
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
        formData.append("judul", selectedVideo.judul);
        formData.append("deskripsi", selectedVideo.deskripsi);

        const files = selectedVideo?.video_files[0];
        if (files?.newThumbnail) formData.append("thumbnail", files.newThumbnail);
        if (files?.newVideo) formData.append("url", files.newVideo);

        const response = await updateVideo(selectedVideo.id, formData);
        const updatedVideo = response.video;

        setVideos((prev) =>
          prev.map((video) =>
            video.id === updatedVideo.id
              ? {
                  ...updatedVideo,
                  video_files: updatedVideo.video_files.map((file) => ({
                    ...file,
                    url: `${file.url}?t=${new Date().getTime()}`,
                    thumbnail: `${file.thumbnail}?t=${new Date().getTime()}`,
                  })),
                }
              : video
          )
        );

        setIsModalOpen(false);
        Swal.fire({
          icon: "success",
          title: "Video berhasil diperbarui!",
          timer: 1500,
          showConfirmButton: false,
        });
      } catch (error) {
        console.error("Error updating video:", error);
        Swal.fire({
          icon: "error",
          title: "Gagal memperbarui video!",
          text: error.message,
        });
      }
    }
  };

  // Mengubah file thumbnail atau video
  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedVideo((prev) => {
          const updatedFiles = [...prev.video_files];
          if (field === "thumbnail") {
            updatedFiles[0] = {
              ...updatedFiles[0],
              thumbnail: reader.result, // Base64 untuk pratinjau
              newThumbnail: file, // File asli untuk diupload
            };
          } else if (field === "url") {
            updatedFiles[0] = {
              ...updatedFiles[0],
              url: reader.result, // Base64 untuk pratinjau
              newVideo: file, // File asli untuk diupload
            };
          }
          return { ...prev, video_files: updatedFiles };
        });
      };

      reader.readAsDataURL(file); // Baca file sebagai base64
    }
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md max-w-screen-lg mx-auto">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Temukan Video</h2>

      <button className="mb-6 flex items-center text-gray-600 hover:text-gray-900" onClick={() => window.history.back()}>
        <FiArrowLeft className="mr-2" />
        Kembali
      </button>

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
                  <img src={video.video_files[0]?.thumbnail || "https://via.placeholder.com/150"} alt="Thumbnail" className="w-20 h-12 object-cover rounded-lg" />
                  <div>
                    <h3 className="text-gray-800 font-medium">{video.judul}</h3>
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
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-3/4 lg:w-1/2">
            <h2 className="text-lg font-bold mb-4 text-center">Edit Video</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Thumbnail */}
              <div className="flex flex-col items-center">
                <img
                  src={selectedVideo?.video_files[0]?.newThumbnail ? selectedVideo.video_files[0].thumbnail : selectedVideo?.video_files[0]?.thumbnail || "https://via.placeholder.com/150"}
                  alt="Thumbnail"
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <label>
                  <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, "thumbnail")} className="hidden" />
                  <span className="text-sm text-gray-600 cursor-pointer">Pilih Thumbnail</span>
                </label>
              </div>

              {/* Video */}
              <div className="flex flex-col items-center">
                <video key={selectedVideo?.video_files[0]?.newVideo ? selectedVideo.video_files[0].newVideo.name : selectedVideo?.video_files[0]?.url} controls className="w-full h-40 rounded-md mb-2">
                  <source
                    src={
                      selectedVideo?.video_files[0]?.newVideo
                        ? URL.createObjectURL(selectedVideo.video_files[0].newVideo)
                        : selectedVideo?.video_files[0]?.url
                        ? `${selectedVideo.video_files[0].url}?t=${new Date().getTime()}`
                        : "https://via.placeholder.com/150"
                    }
                    type="video/mp4"
                  />
                </video>

                <label>
                  <input type="file" accept="video/*" onChange={(e) => handleFileChange(e, "url")} className="hidden" />
                  <span className="text-sm text-gray-600 cursor-pointer">Pilih Video</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-medium">Judul Video</label>
              <input
                type="text"
                value={selectedVideo?.judul || ""}
                onChange={(e) =>
                  setSelectedVideo((prev) => ({
                    ...prev,
                    judul: e.target.value,
                  }))
                }
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Deskripsi</label>
              <textarea
                value={selectedVideo?.deskripsi || ""}
                onChange={(e) =>
                  setSelectedVideo((prev) => ({
                    ...prev,
                    deskripsi: e.target.value,
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

export default ListVideoDokter;
