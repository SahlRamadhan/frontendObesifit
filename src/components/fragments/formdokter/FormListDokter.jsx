import { FaStar, FaCalendarAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function FormListDokter() {
  const doctors = [
    {
      name: "Dr. Hermina Novida, Sp.PD, KEMD",
      specialization: "Dokter Spesialis",
      experience: 5,
      rating: 4.8,
      image: "src/assets/images 2/dokter 1.png", 
    },
    {
      name: "Dr. Hendra Zufry, Sp.PD, KEMD",
      specialization: "Dokter Spesialis",
      experience: 7,
      rating: 4.9,
      image: "src/assets/images 2/dokter 2.png", 
    },
    {
      name: "Dr. Hoo Yumilia, Sp.PD, KEMD",
      specialization: "Dokter Spesialis",
      experience: 6,
      rating: 4.7,
      image: "src/assets/images 2/profil dokter.jpg", 
    },
    {
      name: "Dr. Johanes Purwoto, Sp.PD, KEMD",
      specialization: "Dokter Spesialis",
      experience: 6,
      rating: 4.9,
      image: "src/assets/images 2/dokter 4.jpg", 
    },
    {
      name: "Dr. Indra Wijaya, Sp.PD, K-EMD",
      specialization: "Dokter Spesialis",
      experience: 6,
      rating: 4.8,
      image: "src/assets/images 2/dokter 5.png", 
    },
    {
      name: "Dr. I Gusti Ngurah Adhiartha, Sp.PD, KEMD",
      specialization: "Dokter Spesialis",
      experience: 8,
      rating: 4.8,
      image: "src/assets/images 2/dokter 6.png", 
    },
    {
      name: "Dr. Daniel Sumarno, Sp.PD-KEMD",
      specialization: "Dokter Spesialis",
      experience: 9,
      rating: 4.9,
      image: "src/assets/images 2/dokter 4.jpg", 
    },
  ];

  return (
    <div className="space-y-6">
      {doctors.map((doctor) => (
        <div key={doctor.name} className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm overflow-hidden transition-transform transform hover:scale-105">
          {/* Gambar Dokter */}
          <img
            src={doctor.image}
            alt={`Foto dari ${doctor.name}`}
            className="w-32 h-32 object-cover rounded-lg shadow-md" // Larger image
          />
          <div className="ml-4 flex-1">
            {/* Nama dan Spesialisasi */}
            <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
            <p className="text-sm text-gray-700">{doctor.specialization}</p>

            {/* Pengalaman dan Rating */}
            <div className="flex items-center mt-2 space-x-2">
              <div className="flex items-center bg-gray-700 text-sm px-2 py-1 rounded-sm text-white">
                <FaCalendarAlt className="text-teal-600 mr-1" />
                <span>{doctor.experience} Tahun</span>
              </div>
              <div className="flex items-center bg-gray-700 text-sm px-2 py-1 rounded-sm text-white">
                <FaStar className="text-yellow-500 mr-1" />
                <span>{doctor.rating}</span>
              </div>
            </div>

            {/* Tombol Konsultasi Below Rating and Experience */}
            <div className="mt-4">
              <Button className="bg-primary hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full text-sm shadow-md">Konsultasi</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
