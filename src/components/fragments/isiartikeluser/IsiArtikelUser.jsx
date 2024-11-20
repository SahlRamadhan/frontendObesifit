import React from "react";
import images1 from "../../../assets/images/Artikel Thumbanail (7).png";
import images2 from "../../../assets/images/Artikel Thumbanail (1).png";
import images3 from "../../../assets/images/Artikel Thumbanail (6).png";
import images4 from "../../../assets/images/Artikel Thumbanail (8).png";
import { Link } from "react-router-dom";

function IsiArtikelUser() {
  const fruits = [
    {
      name: "Apel",
      description:
        "Apel dikenal sebagai buah rendah kalori yang kaya serat. Satu buah apel ukuran sedang mengandung sekitar 95 kalori dan menyediakan 4 gram serat. Kandungan serat ini membantu memperlambat pencernaan, sehingga rasa kenyang bertahan lebih lama.",
      tips: "Cobalah mengonsumsi apel bersama kulitnya untuk mendapatkan manfaat serat maksimal. Apel dapat dijadikan camilan, dipotong-potong dalam salad, atau dicampur dalam smoothie.",
    },
    {
      name: "Semangka",
      description:
        "Buah yang memiliki kadar air tinggi ini mengandung sedikit kalori, sekitar 30 kalori per 100 gram. Semangka juga kaya akan vitamin C, A, dan antioksidan seperti likopen yang membantu menangkal radikal bebas dalam tubuh.",
      tips: "Semangka bisa dimakan langsung atau dijadikan minuman seperti jus tanpa tambahan gula. Tambahkan sedikit perasan lemon untuk cita rasa yang lebih segar.",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-10">
      <img src={images1} alt="Buah Rendah Kalori" className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg mb-8 sm:mb-12" />

      <p className="text-gray-800 text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12">
        Obesitas merupakan kondisi yang semakin sering ditemui di era modern, dan salah satu cara mengatasinya adalah dengan menjaga pola makan sehat dan mengonsumsi makanan rendah kalori. Berikut adalah lima buah rendah kalori yang cocok
        untuk diet obesitas:
      </p>

      {fruits.map((fruit, index) => (
        <div key={index} className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">{fruit.name}</h2>
          <div className="mb-4">
            <p className="text-gray-700 text-base sm:text-lg">{fruit.description}</p>
          </div>
          <p className="text-gray-600 italic text-base sm:text-lg">Tips Konsumsi: {fruit.tips}</p>
        </div>
      ))}

      <div className="mt-16 sm:mt-20 p-6 rounded-lg">
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">Mau cari artikel lain?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Artikel 1 */}
          <Link to="/artikel/obesitas-penyebab-dampak" className="p-4 sm:p-6 rounded-lg shadow-md block transition-transform transform hover:scale-105">
            <img src={images2} alt="Artikel 1" className="w-full h-40 sm:h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-700 text-base sm:text-lg">Memahami Obesitas: Penyebab dan Dampaknya bagi Kesehatan</p>
          </Link>

          {/* Artikel 2 */}
          <Link to="/artikel/mengelola-berat-badan" className="p-4 sm:p-6 rounded-lg shadow-md block transition-transform transform hover:scale-105">
            <img src={images3} alt="Artikel 2" className="w-full h-40 sm:h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-700 text-base sm:text-lg">Pentingnya Mengelola Berat Badan untuk Kesehatan Mental</p>
          </Link>

          {/* Artikel 3 */}
          <Link to="/artikel/mitos-obat-penurun-berat-badan" className="p-4 sm:p-6 rounded-lg shadow-md block transition-transform transform hover:scale-105">
            <img src={images4} alt="Artikel 3" className="w-full h-40 sm:h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-700 text-base sm:text-lg">Mitos tentang Obat Penurun Berat Badan yang Perlu Diketahui</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IsiArtikelUser;
