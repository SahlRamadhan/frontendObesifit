import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FormKelolaPembayaran = () => {
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const payments = [
    {
      no: 1,
      tanggal: "03/11/2024",
      nama: "Upinfitpin",
      kodeUnik: "N0Z0XBN02O",
      status: "Dikonfirmasi",
      bukti: "src/assets/images 2/tf.png", // Gambar barang bukti
    },
    {
      no: 2,
      tanggal: "03/11/2024",
      nama: "Atox Dalang",
      kodeUnik: "N0Z0XBN02O",
      status: "Belum Dikonfirmasi",
      bukti: "src/assets/images 2/tf.png", // Gambar barang bukti
    },
    // More payments here...
  ];

  const handleAccept = (payment) => {
    Swal.fire({
      title: "Terima pembayaran ini?",
      showCancelButton: true,
      confirmButtonText: "Simpan",
      cancelButtonText: "Batalkan",
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#dc3545",
      reverseButtons: true,
      html: ` 
        <div class="flex flex-col items-center space-y-4">
          <img src="src/assets/images 2/pop up 1.png" alt="Custom Image" class="mx-auto" style="width: 100px; height: 100px;">
        </div> 
      `,
      preConfirm: () => {
        navigate("/kelola-pembayaran");
        return true;
      },
    });
  };

  const handleReject = (payment) => {
    Swal.fire({
      title: "Tolak pembayaran ini?",
      showCancelButton: true,
      confirmButtonText: "Simpan",
      cancelButtonText: "Batalkan",
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#dc3545",
      reverseButtons: true,
      html: ` 
        <div class="flex flex-col items-center space-y-4">
          <img src="src/assets/images 2/pop up 1.png" alt="Custom Image" class="mx-auto" style="width: 100px; height: 100px;">
        </div> 
      `,
      preConfirm: () => {
        navigate("/kelola-pembayaran");
        return true;
      },
    });
  };

  const handleShowDocument = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen px-4 md:px-6">
      {/* Card Kelola Pembayaran */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Pembayaran Konfirmasi</h2>
          <p className="text-4xl font-bold text-gray-800">10</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Pembayaran Belum Konfirmasi</h2>
          <p className="text-4xl font-bold text-gray-800">48</p>
        </div>
      </div>

      {/* Article Cards Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl sm:text-xl font-semibold text-gray-900 mb-4">List Pembayaran</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {payments.map((payment, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-start space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div> {/* Placeholder for image */}
                <div>
                  <h3 className="font-semibold">{payment.nama}</h3>
                  <p className="text-sm text-gray-500">{payment.kodeUnik}</p>
                  <p className="text-sm text-gray-500">{payment.tanggal}</p> {/* Tanggal */}
                </div>
              </div>
              <p className={`text-sm ${payment.status === "Dikonfirmasi" ? "text-green-600" : payment.status === "Ditolak" ? "text-red-600" : "text-yellow-600"}`}>{payment.status}</p>

              {/* Gambar Barang Bukti */}
              <div className="flex flex-col items-start space-y-2">
                <p className="text-sm text-gray-700">Barang Bukti:</p>
                <button className="text-blue-500 underline" onClick={() => handleShowDocument(payment.bukti)}>
                  Lihat Bukti Pembayaran
                </button>
              </div>

              <div className="flex space-x-2">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold" onClick={() => handleAccept(payment)}>
                  Terima
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold" onClick={() => handleReject(payment)}>
                  Tolak
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            {/* Icon Silang di Pojok Kanan Atas */}
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Gambar Bukti */}
            <img src={modalImage} alt="Bukti Pembayaran" className="max-w-full max-h-[600px] mx-auto" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FormKelolaPembayaran;
