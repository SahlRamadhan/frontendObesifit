import React from 'react';
import dokterImage from '../../../assets/images/Fitur (2).png'; // Ganti dengan path gambar yang sesuai
import { useNavigate } from 'react-router-dom';

function DokterUser() {
  const navigate = useNavigate();
  return (
    <section className="max-w-screen-2xl mx-auto py-16 px-6">
      <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-blue-100 rounded-xl p-10 shadow-lg">
        
        {/* Bagian Teks */}
        <div className="flex-1 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Perlu dukungan?</h2>
          <p className="text-lg text-gray-600 mb-6">Tenang aja, kami punya fitur-fitur di bawah ini yang siap membantu kamu!</p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-black transition-colors" onClick={() => navigate("/list-dokter")}>
            Tanya Dokter!
          </button>
        </div>

        {/* Gambar Dokter */}
        <div className="flex-1 flex items-center justify-center">
          <img src={dokterImage} alt="Dokter" className="w-72 h-auto rounded-lg" />
        </div>
      </div>
    </section>
  );
}

export default DokterUser;
