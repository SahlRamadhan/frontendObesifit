import React from 'react';
import BuatArtikelImage from '../../../assets/images/buatartikeldokter.png';
import BuatVideoImage from '../../../assets/images/buatvideodokter.png';
import SesiKonsultasiImage from '../../../assets/images/sesikonsultasidokter.png';
import { useNavigate } from 'react-router-dom';

function AksesFiturDokter() {
  const navigate = useNavigate();
  const features = [
    { title: "Buat Artikel", image: BuatArtikelImage, description: "Tulis artikel kesehatan yang bermanfaat.", link: "/artikeldokter" },
    { title: "Buat Video", image: BuatVideoImage, description: "Unggah video edukasi kesehatan.", link: "/videodokter" },
    { title: "Sesi Konsultasi", image: SesiKonsultasiImage, description: "Atur sesi konsultasi dengan pasien.", link: "/sesikonsultasidokter" },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto p-12 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-12">
        Berikut ini fitur-fitur yang bisa Anda akses di Panel Dokter kami.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center bg-white border border-green-300 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <img src={feature.image} alt={feature.title} className="w-32 h-32 mb-6" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
            <p className="text-gray-600 text-center mb-6">{feature.description}</p>
            <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors text-lg" onClick={() => navigate(feature.link)} >
              {feature.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AksesFiturDokter;
