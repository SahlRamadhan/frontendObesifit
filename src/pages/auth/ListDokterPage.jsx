import FormListDokter from "@/components/fragments/form/FormListDokter";
import bannerImage from "@/assets/images 2/banner dokter.png";
import Navbar from "@/components/fragments/homeuser/NavbarUser";
import FooterUser from "@/components/fragments/homeuser/FooterUser";
import { useNavigate } from "react-router-dom";

export default function ListDokterPage() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Banner Image Below Navbar */}
      <div className="w-full h-80 bg-cover bg-center" style={{ backgroundImage: `url(${bannerImage})` }}></div>

      {/* Konten Utama */}
      <div className="container mx-auto px-4 sm:px-2 mt-8 mb-8">
        {/* Layout Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Bagian Kiri: Informasi */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6">
            {/* Heading */}
            <h1 className="text-xl font-semibold text-gray-900 text-center">Konsultasi di ObesiFit</h1>
            <p className="text-gray-600 mt-2 text-center text-xm">"Temukan solusi untuk pertanyaan kesehatanmu. Ayo, tanya dokter atau ahli kami di sini!"</p>

            {/* Konten Awal */}
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-5">Kenapa Harus Pilih Kami?</h2>
            <div className="space-y-4">
              {/* Bagian 1 */}
              <div className="flex flex-wrap items-start md:flex-nowrap">
                <img src="src/assets/images 2/pilih kami 1.png" alt="Ahli" className="w-1/1 sm:w-full rounded-md mr-4 sm:mr-0 sm:mb-4" />
                <div className="w-3/4 sm:w-full">
                  <h3 className="text-lg font-bold text-gray-800">Ahli yang Siap Bantu</h3>
                  <p className="text-gray-600 text-sm">Di ObesiFit, kamu bisa dapatkan informasi dari dokter dan ahli yang paham banget soal kesehatan! Mereka siap menjawab pertanyaanmu dan memberikan penjelasan yang jelas.</p>
                </div>
              </div>

              {/* Bagian 2 */}
              <div className="flex flex-wrap items-start md:flex-nowrap">
                <img src="src/assets/images 2/pilih kami 2.png" alt="Konsultasi" className="w-1/1 sm:w-full rounded-md mr-4 sm:mr-0 sm:mb-4" />
                <div className="w-3/4 sm:w-full">
                  <h3 className="text-lg font-bold text-gray-800">Konsultasi Santai</h3>
                  <p className="text-gray-600 text-sm">Tanya-tanya seputar kesehatan dengan suasana yang nyaman, tanpa tekanan. Di sini, kamu bisa bebas berpendapat dan merasa lebih rileks saat konsultasi.</p>
                </div>
              </div>

              {/* Bagian 3 */}
              <div className="flex flex-wrap items-start md:flex-nowrap">
                <img src="src/assets/images 2/pilih kami 3.png" alt="Tips" className="w-1/1 sm:w-full rounded-md mr-4 sm:mr-0 sm:mb-4" />
                <div className="w-3/4 sm:w-full">
                  <h3 className="text-lg font-bold text-gray-800">Tips yang Pas</h3>
                  <p className="text-gray-600 text-sm">
                    Dapatkan rekomendasi dan tips yang pas sesuai dengan kebutuhan dan tujuan kesehatanmu! Kami berkomitmen untuk membantu kamu mencapai gaya hidup yang lebih sehat dengan cara yang menyenangkan.
                  </p>
                </div>
              </div>
            </div>

            {/* Konten Tambahan */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Gimana Cara Hubungi Dokter/Ahli?</h2>
            <div className="space-y-8">
              {/* Langkah 1 */}
              <div>
                <h3 className="text-lg font-bold text-gray-800">1. Pilih Dokter/Ahli</h3>
                <p className="text-gray-600 text-sm mt-2">Mulai dengan memilih dokter atau ahli yang kamu suka dari daftar yang ada. Di sini, kamu bisa lihat spesialisasi mereka, jadi pilihlah yang sesuai dengan kebutuhanmu.</p>
                <hr className="border-t border-teal-400 mt-4" />
              </div>

              {/* Langkah 2 */}
              <div>
                <h3 className="text-lg font-bold text-gray-800">2. Tunggu Sebentar</h3>
                <p className="text-gray-600 text-sm mt-2">Setelah memilih, tunggu sebentar ya! Dokter bakal segera siap untuk ngobrol, biasanya dalam hitungan menit. Jadi, jangan khawatir, mereka pasti akan cepat merespons.</p>
                <hr className="border-t border-teal-400 mt-4" />
              </div>

              {/* Langkah 3 */}
              <div>
                <h3 className="text-lg font-bold text-gray-800">3. Mulai Ngobrol</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Setelah terhubung, saatnya ngobrol! Ceritakan kondisi kesehatanmu dengan jelas dan santai. Jangan ragu untuk tanya apa saja yang ada di pikiranmu, dokter di sini siap membantu dan memberikan saran yang tepat!
                </p>
              </div>
            </div>

            {/* Promosi */}
            <div className="mt-8 p-9 bg-white rounded-[80px] border border-gray-300 flex flex-col md:flex-row items-center shadow-md" style={{ height: "auto" }}>
              {/* Kolom Kiri */}
              <div className="flex-1 pr-4 text-center md:text-left">
                <p className="text-gray-700 font-bold text-xm mb-2">Yuk, langganan sekarang bareng ObesiFit!</p>
                <p className="text-gray-600 text-sm">Nikmati akses konsultasi ke dokter dan pakar kami kapan saja, tanpa batas waktu!</p>
                <button className="font-bold mt-4 bg-primary text-white text-sm py-2 px-4 rounded-full hover:bg-teal-600" onClick={() => navigate("/pembayaran-langganan")}>Ayo Berlangganan!</button>
              </div>
              {/* Kolom Kanan */}
              <div className="flex-3 flex justify-center md:justify-end mt-4 md:mt-0">
                <img src="src/assets/images 2/Pembayaran.png" alt="Promo Berlangganan" className="max-w-[300px] h-auto object-contain rounded-[50px] shadow-md" />
              </div>
            </div>
          </div>

          {/* Bagian Kanan: Daftar Dokter */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-300">
            <h2 className="text-xl font-bold text-gray-800 text-center mb-2">Daftar Dokter/Ahli Kami</h2>
            <p className="text-center text-gray-600 mb-8 text-xm">"Pilihan dokter dan ahli kami. Pilih sesuai kebutuhanmu!"</p>
            <FormListDokter />
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterUser />
    </section>
  );
}
