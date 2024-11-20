import React, { useState } from "react";

function BuatVideoDokter() {
  const [uploadedImage, setUploadedImage] = useState(null); // Untuk thumbnail
  const [uploadedVideo, setUploadedVideo] = useState(null); // Untuk video
  const [isModalOpen, setIsModalOpen] = useState(false); // Untuk pop-up konfirmasi

  // Upload thumbnail
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Upload video
  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedVideo(file.name); // Simpan nama file video
    }
  };

  // Modal actions
  const handleUploadClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleConfirmUpload = () => {
    alert("Video berhasil diunggah!");
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-screen-2xl mx-auto p-10 pb-40">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Fitur</h2>
      <h1 className="text-4xl font-bold text-gray-800 mb-10">
        Buat Video Edukasi Kesehatan
      </h1>
      <p className="text-xl text-gray-600 mb-10">
        Berbagi Informasi Penting dan Wawasan Kesehatan kepada Pengguna
      </p>

      {/* Grid untuk Thumbnail dan Video */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Upload Thumbnail */}
        <div className="flex flex-col items-center">
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Thumbnail Video"
              className="w-full h-[300px] object-cover rounded-lg mb-4"
            />
          ) : (
            <div className="w-full h-[300px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              <span>Thumbnail Video</span>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-2"
          />
        </div>

        {/* Upload Video */}
        <div className="flex flex-col items-center">
          <div className="w-full h-[300px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            {uploadedVideo ? <span>{uploadedVideo}</span> : <span>File Video</span>}
          </div>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            className="mt-2"
          />
        </div>
      </div>

      {/* Form Video */}
      <div className="mt-10 space-y-6">
        <div>
          <label className="text-gray-700 text-xl">Judul Video</label>
          <input
            type="text"
            placeholder="Judul Video"
            className="w-full mt-2 p-4 text-xl bg-gray-100 rounded-lg border border-gray-300 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-gray-700 text-xl">Deskripsi</label>
          <textarea
            rows="6"
            placeholder="Tambahkan deskripsi video..."
            className="w-full mt-2 p-4 text-xl bg-gray-100 rounded-lg border border-gray-300 focus:outline-none resize-none"
          ></textarea>
        </div>
      </div>

      {/* Tombol */}
      <div className="flex justify-between mt-6">
        <button
          className="bg-red-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700"
          onClick={() => alert("Edit video dibatalkan!")}
        >
          ✖ Batalkan
        </button>
        <button
          className="bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700"
          onClick={handleUploadClick}
        >
          ⬆ Unggah
        </button>
      </div>

      {/* Modal Konfirmasi */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center relative w-[500px] md:w-[600px] lg:w-[700px]">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ✖
            </button>
            <h2 className="text-lg font-bold mb-4">Yakin mau upload video?</h2>
            <div className="flex justify-between space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={handleCloseModal}
              >
                Batalkan
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                onClick={handleConfirmUpload}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BuatVideoDokter;
