import React from "react";
import subscriptionImage from "../../../assets/images/Penawaran.png"; // Sesuaikan path gambar
import { useNavigate } from "react-router-dom";

function SubscriptionSection() {
  const navigate = useNavigate();

  return (
    <section className="max-w-screen-2xl mx-auto p-5">
      <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg p-5 overflow-hidden">
        {/* Teks Langganan */}
        <div className="flex-1 p-5 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">Yuk, langganan sekarang bareng ObesiFit!</h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">Nikmati akses konsultasi ke dokter dan pakar kami kapan saja, tanpa batas waktu!</p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-black transition-colors" onClick={() => navigate("/pembayaran-langganan")}>
            Ayo Berlangganan!
          </button>
        </div>

        {/* Gambar Langganan */}
        <div className="flex-1 flex items-center justify-center p-5">
          <img src={subscriptionImage} alt="Illustrasi Langganan" className="max-w-full h-auto rounded-lg md:max-w-sm" />
        </div>
      </div>
    </section>
  );
}

export default SubscriptionSection;
