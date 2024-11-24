import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <p className="text-lg text-gray-600 mt-4">Oops! Halaman yang Anda cari tidak ditemukan.</p>
      </div>
    </div>
  );
};

export default NotFound;
