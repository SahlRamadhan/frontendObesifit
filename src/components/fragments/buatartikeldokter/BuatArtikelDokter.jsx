import React, { useState,  } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import { createArtikel } from "../../../services/artikel.config";
import { Link } from "react-router-dom";

function BuatArtikelDokter() {
  const [formData, setFormData] = useState({
    judul: "",
    sub_judul: "",
    content: "",
  });
  const [thumbnail, setThumbnail] = useState(null); // Untuk gambar thumbnail
  const [mainImage, setMainImage] = useState(null); // Untuk satu gambar utama

  // Mengelola input teks
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Upload thumbnail
  const handleThumbnailUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setThumbnail(file); // Simpan file untuk dikirim ke server
    }
  };

  // Upload satu gambar utama
  const handleMainImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMainImage(file); // Simpan file untuk dikirim ke server
    }
  };

  // Reset Form setelah berhasil upload
  const resetForm = () => {
    setFormData({
      judul: "",
      sub_judul: "",
      content: "",
    });
    setThumbnail(null);
    setMainImage(null);
  };

  // Konfirmasi dan unggah artikel
  const handleConfirmUpload = async () => {
    if (!formData.judul || !formData.content) {
      Swal.fire("Error", "Judul dan isi artikel wajib diisi!", "error");
      return;
    }
    if (!thumbnail || !mainImage) {
      Swal.fire("Error", "Thumbnail dan gambar utama wajib diunggah!", "error");
      return;
    }

    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Artikel ini akan diunggah!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, unggah!",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const form = new FormData();
        form.append("judul", formData.judul);
        form.append("sub_judul", formData.sub_judul);
        form.append("content", formData.content);
        form.append("thumbnail", thumbnail);
        form.append("images", mainImage);

        try {
          await createArtikel(form);
          Swal.fire("Berhasil!", "Artikel berhasil diunggah!", "success");
          resetForm();
        } catch (error) {
          console.error("Error creating artikel:", error);
          Swal.fire("Error", "Gagal mengunggah artikel!", "error");
        }
      }
    });
  };

  return (
    <div className="max-w-screen-2xl mx-auto p-10 pb-40">
      {/* Header */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Fitur</h2>
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Buat Artikel Edukasi Kesehatan</h1>
      <p className="text-xl text-gray-600 mb-10">Berbagi Informasi Penting dan Wawasan Kesehatan kepada Pengguna</p>

      {/* Grid untuk Thumbnail dan Gambar Utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Input Thumbnail */}
        <div className="flex flex-col items-center">
          {thumbnail ? (
            <img src={URL.createObjectURL(thumbnail)} alt="Thumbnail Artikel" className="w-full h-[300px] object-cover rounded-lg mb-4" />
          ) : (
            <div className="w-full h-[300px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              <span>Thumbnail Artikel</span>
            </div>
          )}
          <input type="file" accept="image/*" onChange={handleThumbnailUpload} className="mt-2" />
        </div>

        {/* Input Gambar Utama */}
        <div className="flex flex-col items-center">
          {mainImage ? (
            <img src={URL.createObjectURL(mainImage)} alt="Gambar Utama" className="w-full h-[300px] object-cover rounded-lg mb-4" />
          ) : (
            <div className="w-full h-[300px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              <span>Gambar Utama Artikel</span>
            </div>
          )}
          <input type="file" accept="image/*" onChange={handleMainImageUpload} className="mt-2" />
        </div>
      </div>

      {/* Form Artikel */}
      <div className="mt-10 space-y-6">
        <div>
          <label className="text-gray-700 text-xl">Judul Artikel</label>
          <input type="text" name="judul" placeholder="Judul Artikel" value={formData.judul} onChange={handleInputChange} className="w-full mt-2 p-4 text-xl bg-gray-100 rounded-lg border border-gray-300 focus:outline-none" />
        </div>
        <div>
          <label className="text-gray-700 text-xl">Sub Judul Artikel</label>
          <input type="text" name="sub_judul" placeholder="Sub Judul Artikel" value={formData.sub_judul} onChange={handleInputChange} className="w-full mt-2 p-4 text-xl bg-gray-100 rounded-lg border border-gray-300 focus:outline-none" />
        </div>
        <div>
          <label className="text-gray-700 text-xl">Isi Artikel</label>
          <textarea
            name="content"
            rows="6"
            placeholder="Tulis isi artikel di sini..."
            value={formData.content}
            onChange={handleInputChange}
            className="w-full mt-2 p-4 text-xl bg-gray-100 rounded-lg border border-gray-300 focus:outline-none resize-none"
          ></textarea>
        </div>
      </div>

      {/* Tombol */}
      <div className="flex justify-start mt-6">
        <button className="bg-red-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700 mr-3" onClick={() => Swal.fire("Dibatalkan", "Proses dibatalkan!", "error")}>
          Batalkan
        </button>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700 mr-3" onClick={handleConfirmUpload}>
          Unggah
        </button>
        <Link to={"/listartikeldokter"} className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
          Edit
        </Link>
      </div>
    </div>
  );
}

export default BuatArtikelDokter;
