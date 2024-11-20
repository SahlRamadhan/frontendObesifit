import React, { useState } from "react";

const EditArticle = ({ articleData, onCancel, onSave }) => {
  // State untuk data artikel yang sedang diedit
  const [title, setTitle] = useState(articleData.title);
  const [subtitle, setSubtitle] = useState(articleData.subtitle || "");
  const [content, setContent] = useState(articleData.content || "");
  const [image, setImage] = useState(articleData.image || "");

  const handleSave = () => {
    const updatedArticle = {
      ...articleData,
      title,
      subtitle,
      content,
      image,
    };
    onSave(updatedArticle);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-6">Edit Artikel</h2>

      {/* Image Upload */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Gambar Artikel</label>
        <img
          src={image || "https://via.placeholder.com/200"}
          alt="Article"
          className="w-full h-40 object-cover rounded-lg mb-3"
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Masukkan URL gambar"
          className="w-full p-2 border rounded-lg"
        />
      </div>

      {/* Title Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Judul Artikel</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Masukkan judul artikel"
        />
      </div>

      {/* Subtitle Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Sub Judul Artikel</label>
        <input
          type="text"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Masukkan sub judul artikel"
        />
      </div>

      {/* Content Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Isi Artikel</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded-lg h-40"
          placeholder="Masukkan isi artikel"
        ></textarea>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          onClick={onCancel}
        >
          Batalkan
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          onClick={handleSave}
        >
          Simpan
        </button>
      </div>
    </div>
  );
};

export default EditArticle;
