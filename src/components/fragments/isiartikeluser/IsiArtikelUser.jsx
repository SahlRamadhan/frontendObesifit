import React from 'react';

function IsiArtikelUser() {
  const fruits = [
    {
      name: "Apel",
      description: "Apel dikenal sebagai buah rendah kalori yang kaya serat. Satu buah apel ukuran sedang mengandung sekitar 95 kalori dan menyediakan 4 gram serat. Kandungan serat ini membantu memperlambat pencernaan, sehingga rasa kenyang bertahan lebih lama.",
      tips: "Cobalah mengonsumsi apel bersama kulitnya untuk mendapatkan manfaat serat maksimal. Apel dapat dijadikan camilan, dipotong-potong dalam salad, atau dicampur dalam smoothie."
    },
    {
      name: "Semangka",
      description: "Buah yang memiliki kadar air tinggi ini mengandung sedikit kalori, sekitar 30 kalori per 100 gram. Semangka juga kaya akan vitamin C, A, dan antioksidan seperti likopen yang membantu menangkal radikal bebas dalam tubuh.",
      tips: "Semangka bisa dimakan langsung atau dijadikan minuman seperti jus tanpa tambahan gula. Tambahkan sedikit perasan lemon untuk cita rasa yang lebih segar."
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto p-10">
      <img src="/images/banner-buah.png" alt="Buah Rendah Kalori" className="w-full h-[400px] object-cover rounded-lg mb-12" />

      <p className="text-gray-800 text-xl mb-12">
        Obesitas merupakan kondisi yang semakin sering ditemui di era modern, dan salah satu cara mengatasinya adalah dengan menjaga pola makan sehat dan mengonsumsi makanan rendah kalori.
        Berikut adalah lima buah rendah kalori yang cocok untuk diet obesitas:
      </p>

      {fruits.map((fruit, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">{fruit.name}</h2>
          <div className="flex items-center mb-6">
            <img src={fruit.image} alt={fruit.name} className="w-32 h-32 mr-8" />
            <p className="text-gray-700 text-xl">{fruit.description}</p>
          </div>
          <p className="text-gray-600 italic text-lg">Tips Konsumsi: {fruit.tips}</p>
        </div>
      ))}

      <div className="mt-20 p-8 rounded-lg">
        <h3 className="text-3xl font-semibold text-gray-800 mb-8">Mau cari artikel lain?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg shadow-md">
            <img src="/images/artikel1.png" alt="Artikel 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-700 text-xl">Memahami Obesitas: Penyebab dan Dampaknya bagi Kesehatan</p>
          </div>
          <div className="p-6 rounded-lg shadow-md">
            <img src="/images/artikel2.png" alt="Artikel 2" className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-700 text-xl">Pentingnya Mengelola Berat Badan untuk Kesehatan Mental</p>
          </div>
          <div className="p-6 rounded-lg shadow-md">
            <img src="/images/artikel3.png" alt="Artikel 3" className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-700 text-xl">Mitos tentang Obat Penurun Berat Badan yang Perlu Diketahui</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IsiArtikelUser;
