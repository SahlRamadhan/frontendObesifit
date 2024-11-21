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
    },
    {
      no: 2,
      tanggal: "03/11/2024",
      nama: "Atox Dalang",
      kodeUnik: "N0Z0XBN02O",
      status: "Belum Dikonfirmasi",
    },
    {
      no: 3,
      tanggal: "03/11/2024",
      nama: "Leonardo da Vinci",
      kodeUnik: "N0Z0XBN02O",
      status: "Dikonfirmasi",
    },
    {
      no: 4,
      tanggal: "03/11/2024",
      nama: "Shaleh Petarunx",
      kodeUnik: "N0Z0XBN02O",
      status: "Ditolak",
    },
    {
      no: 5,
      tanggal: "03/11/2024",
      nama: "Must a Nice",
      kodeUnik: "N0Z0XBN02O",
      status: "Belum Dikonfirmasi",
    },
    {
      no: 6,
      tanggal: "03/11/2024",
      nama: "BeyonceASLI",
      kodeUnik: "N0Z0XBN02O",
      status: "Dikonfirmasi",
    },
    {
      no: 7,
      tanggal: "03/11/2024",
      nama: "PEKOORAAA",
      kodeUnik: "N0Z0XBN02O",
      status: "Dikonfirmasi",
    },
    {
      no: 8,
      tanggal: "03/11/2024",
      nama: "PrabowoKW",
      kodeUnik: "N0Z0XBN02O",
      status: "Dikonfirmasi",
    },
    {
      no: 9,
      tanggal: "03/11/2024",
      nama: "Ronaldo7",
      kodeUnik: "N0Z0XBN02O",
      status: "Dikonfirmasi",
    },
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
      customClass: {
        popup: "flex flex-col items-center",
        title: "text-xl font-semibold text-center",
        image: "my-4",
        confirmButton: "bg-green-500 text-white py-2 px-6 rounded-lg mt-4",
        cancelButton: "bg-red-500 text-white py-2 px-6 rounded-lg mt-4",
      },
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
      customClass: {
        popup: "flex flex-col items-center",
        title: "text-xl font-semibold text-center",
        image: "my-4",
        confirmButton: "bg-green-500 text-white py-2 px-6 rounded-lg mt-4",
        cancelButton: "bg-red-500 text-white py-2 px-6 rounded-lg mt-4",
      },
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
    <div className="flex flex-col min-h-screen bg-white p-6">
      {/* Card Kelola Pembayaran */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border border-gray-300">
        <h1 className="text-2xl font-bold mb-6">Kelola Pembayaran</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg text-start">
            <p className="font-semibold text-gray-500">
              Total Pembayaran Dikonfirmasi
            </p>
            <p className="text-2xl font-bold">35</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-start">
            <p className="font-semibold text-gray-500">
              Total Pembayaran Belum Dikonfirmasi
            </p>
            <p className="text-2xl font-bold">3</p>
          </div>
        </div>
      </div>

      {/* Tabel Pembayaran */}
      <div className="bg-white rounded-lg shadow-lg p-7 border border-gray-300">
        <h2 className="text-lg font-bold mb-4">List Pembayaran</h2>
        <table className="table-auto w-full text-center border-collapse text-sm">
          <thead>
            <tr className="bg-[#6926D7] text-white">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Tanggal Waktu</th>
              <th className="px-4 py-2">Nama Pengguna</th>
              <th className="px-4 py-2">Kode Unik</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Bukti Pembayaran</th>
              <th className="px-4 py-2">Konfirmasi</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                } border-t`}
              >
                <td className="px-4 py-2">{payment.no}</td>
                <td className="px-4 py-2">{payment.tanggal}</td>
                <td className="px-4 py-2">{payment.nama}</td>
                <td className="px-4 py-2">{payment.kodeUnik}</td>
                <td
                  className={`px-4 py-2 ${
                    payment.status === "Dikonfirmasi"
                      ? "text-green-600"
                      : payment.status === "Ditolak"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {payment.status}
                </td>
                <td className="px-4 py-2">
                  <button
                    className="text-black"
                    onClick={() =>
                      handleShowDocument("src/assets/images 2/tf.png")
                    }
                  >
                    Lihat Bukti Pembayaran
                  </button>
                </td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold"
                      onClick={() => handleAccept(payment)}
                    >
                      Terima
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold"
                      onClick={() => handleReject(payment)}
                    >
                      Tolak
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            {/* Icon Silang di Pojok Kanan Atas */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Gambar Bukti */}
            <img
              src={modalImage}
              alt="Bukti Pembayaran"
              className="max-w-full max-h-[600px] mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FormKelolaPembayaran;
