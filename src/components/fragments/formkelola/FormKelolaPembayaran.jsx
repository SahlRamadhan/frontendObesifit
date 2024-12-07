import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { getAllTransaksi, verfiyTransaksi } from "@/services/transaksi.config"; // Import API services

const FormKelolaPembayaran = () => {
  const [payments, setPayments] = useState([]); // State untuk menyimpan data transaksi
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch data transaksi dari backend saat komponen dimount
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const data = await getAllTransaksi(); // Ambil semua transaksi
        setPayments(data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Gagal Memuat Data",
          text: "Terjadi kesalahan saat memuat data transaksi.",
        });
      }
    };
    fetchPayments();
  }, []);

  // Fungsi untuk menerima pembayaran
  const handleAccept = async (payment) => {
    try {
      const result = await Swal.fire({
        title: "Terima pembayaran ini?",
        showCancelButton: true,
        confirmButtonText: "Simpan",
        cancelButtonText: "Batalkan",
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#dc3545",
        reverseButtons: true,
      });

      if (result.isConfirmed) {
        await verfiyTransaksi(payment.id, { status: 2 }); // Kirim status 2 (approved)
        Swal.fire("Berhasil", "Pembayaran telah dikonfirmasi.", "success");
        const updatedPayments = payments.map((p) => (p.id === payment.id ? { ...p, id_status: 2 } : p));
        setPayments(updatedPayments); // Update state lokal
      }
    } catch (error) {
      Swal.fire("Gagal", "Terjadi kesalahan saat memproses pembayaran.", "error");
    }
  };

  // Fungsi untuk menolak pembayaran
  const handleReject = async (payment) => {
    try {
      const result = await Swal.fire({
        title: "Tolak pembayaran ini?",
        showCancelButton: true,
        confirmButtonText: "Simpan",
        cancelButtonText: "Batalkan",
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#dc3545",
        reverseButtons: true,
      });

      if (result.isConfirmed) {
        await verfiyTransaksi(payment.id, { status: 3 }); // Kirim status 3 (rejected)
        Swal.fire("Berhasil", "Pembayaran telah ditolak.", "success");
        const updatedPayments = payments.map((p) => (p.id === payment.id ? { ...p, id_status: 3 } : p));
        setPayments(updatedPayments); // Update state lokal
      }
    } catch (error) {
      Swal.fire("Gagal", "Terjadi kesalahan saat memproses pembayaran.", "error");
    }
  };

  // Fungsi untuk menghitung sisa waktu langganan
  const calculateRemainingDays = (endDate) => {
    const currentDate = new Date();
    const end = new Date(endDate);
    const diffTime = end - currentDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `${diffDays} hari tersisa` : "Langganan berakhir";
  };

  // Fungsi untuk menampilkan bukti pembayaran
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
          <h2 className="text-lg font-semibold mb-2">Total Pembayaran Dikonfirmasi</h2>
          <p className="text-4xl font-bold text-gray-800">{payments.filter((payment) => payment.id_status === 2).length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Pembayaran Belum Dikonfirmasi</h2>
          <p className="text-4xl font-bold text-gray-800">{payments.filter((payment) => payment.id_status === 1).length}</p>
        </div>
      </div>

      {/* List Pembayaran */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl sm:text-xl font-semibold text-gray-900 mb-4">List Pembayaran</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {payments.map((payment, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-start space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full">
                  <img src={payment.user?.images} alt={payment.user?.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold">{payment.user?.name}</h3>
                  <p className="text-sm text-gray-500">{payment.code_pembayaran}</p>
                  <p className="text-sm text-gray-500">{new Date(payment.transaksi_date).toLocaleDateString()}</p>
                </div>
              </div>
              <p className={`text-sm ${payment.id_status === 2 ? "text-green-600" : payment.id_status === 3 ? "text-red-600" : "text-yellow-600"}`}>
                {payment.id_status === 2 ? "Dikonfirmasi" : payment.id_status === 3 ? "Ditolak" : "Belum Dikonfirmasi"}
              </p>

              {/* Gambar Barang Bukti */}
              <div className="flex flex-col items-start space-y-2">
                <p className="text-sm text-gray-700">Bukti Pembayaran:</p>
                <button className="text-blue-500 underline" onClick={() => handleShowDocument(payment.bukti_pembayaran)}>
                  Lihat Bukti Pembayaran
                </button>
              </div>

              {payment.id_status === 2 ? (
                <p className="text-sm text-gray-700">{calculateRemainingDays(payment.end_date)}</p>
              ) : payment.id_status === 3 ? null : (
                <div className="flex space-x-2">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold" onClick={() => handleAccept(payment)}>
                    Terima
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold" onClick={() => handleReject(payment)}>
                    Tolak
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={modalImage} alt="Bukti Pembayaran" className="max-w-full max-h-[600px] mx-auto" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FormKelolaPembayaran;
