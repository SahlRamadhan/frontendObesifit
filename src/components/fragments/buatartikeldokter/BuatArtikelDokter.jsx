import React, { useState } from "react";

function BuatArtikelDokter() {
  const [thumbnail, setThumbnail] = useState(null); // Untuk gambar thumbnail
  const [mainImages, setMainImages] = useState([]); // Untuk gambar utama (banyak gambar)
  const [isModalOpen, setIsModalOpen] = useState(false); // Untuk pop-up konfirmasi unggah artikel

  // Upload thumbnail
  const handleThumbnailUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Upload banyak gambar utama
  const handleMainImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const images = files.map((file) => URL.createObjectURL(file));
    setMainImages((prevImages) => [...prevImages, ...images]);
  };

  // Tombol pop-up
  const handleUploadClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleConfirmUpload = () => {
    alert("Artikel berhasil diunggah!");
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-screen-2xl mx-auto p-10">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Fitur</h2>
      <h1 className="text-4xl font-bold text-gray-800 mb-10">
        Buat Artikel Edukasi Kesehatan
      </h1>
      <p className="text-xl text-gray-600 mb-10">
        Berbagi Informasi Penting dan Wawasan Kesehatan kepada Pengguna
      </p>

      {/* Grid untuk Thumbnail dan Gambar Utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Input Thumbnail */}
        <div className="flex flex-col items-center">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt="Thumbnail Artikel"
              className="w-full h-[300px] object-cover rounded-lg mb-4"
            />
          ) : (
            <div className="w-full h-[300px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              <span>Thumbnail Artikel</span>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleThumbnailUpload}
            className="mt-2"
          />
        </div>

        {/* Input Gambar Utama */}
        <div className="flex flex-col items-center">
          <div className="w-full h-[300px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            <span>Gambar Utama Artikel</span>
          </div>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleMainImageUpload}
            className="mt-2"
          />
        </div>
      </div>

      {/* Pratinjau Gambar Utama */}
      {mainImages.length > 0 && (
        <div className="mt-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Gambar Utama</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mainImages.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Gambar Utama ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Form Artikel */}
      <div className="mt-10 space-y-6">
        <div>
          <label className="text-gray-700 text-xl">Judul Artikel</label>
          <input
            type="text"
            placeholder="Judul Artikel"
            className="w-full mt-2 p-4 text-xl bg-gray-100 rounded-lg border border-gray-300 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-gray-700 text-xl">Sub Judul Artikel</label>
          <input
            type="text"
            placeholder="Sub Judul Artikel"
            className="w-full mt-2 p-4 text-xl bg-gray-100 rounded-lg border border-gray-300 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-gray-700 text-xl">Isi Artikel</label>
          <textarea
            rows="6"
            placeholder="Tulis isi artikel di sini..."
            className="w-full mt-2 p-4 text-xl bg-gray-100 rounded-lg border border-gray-300 focus:outline-none resize-none"
          ></textarea>
        </div>
      </div>

      {/* Tombol */}
      <div className="flex justify-between mt-6">
        <button
          className="bg-red-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700"
          onClick={() => alert("Edit artikel dibatalkan!")}
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

      {/* Modal Pop-Up Konfirmasi */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center relative w-[500px] md:w-[600px] lg:w-[700px]">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ✖
            </button>
            <h2 className="text-lg font-bold mb-4">Yakin mau upload artikel?</h2>
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

export default BuatArtikelDokter;
