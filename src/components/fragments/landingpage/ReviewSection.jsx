import React from 'react';
import ReviewCard from './ReviewCard';

const reviewData = [
  {
    name: "Gibran",
    title: "Petugas Negara",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7d0882e9c1599393ff25d055e9b7c42706cfe4cfa9f8b23021897c71f120f04b?placeholderIfAbsent=true&apiKey=0537f3f2a8ab48ea877b83fe9967182f",
    review: "Website ini sangat membantu! Informasi tentang obesitas disajikan dengan jelas dan mudah dipahami. Saya merasa lebih sadar tentang kesehatan saya dan siap untuk membuat perubahan!",
    starsSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/180ff20bf6b5b1f150145419fc84d9d13e49df0ddb468d314c43b5e756096e09?placeholderIfAbsent=true&apiKey=0537f3f2a8ab48ea877b83fe9967182f"
  },
  {
    name: "Komeng",
    title: "Komedian",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e260bacf3778ed4bf79ef57d646442612cd332b6fd360116c98c77df8f41606?placeholderIfAbsent=true&apiKey=0537f3f2a8ab48ea877b83fe9967182f",
    review: "Kalkulator BMI dan kalori harian sangat praktis! Saya bisa dengan cepat mengetahui kebutuhan kalori saya dan merasa lebih termotivasi untuk menjaga pola makan yang sehat.",
    starsSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b4d8bc393a1770fc1a37a29f4ea5a2117b4cb3aa5ed8a08ca340f317451ae09?placeholderIfAbsent=true&apiKey=0537f3f2a8ab48ea877b83fe9967182f"
  },
  {
    name: "Ronaldo",
    title: "Pemain Sepak Bola Professional",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/24fb1e19c0fb422d1c31cf12993765803a86cc421b119d89809100ec205b868b?placeholderIfAbsent=true&apiKey=0537f3f2a8ab48ea877b83fe9967182f",
    review: "Dukungan komunitas di website ini luar biasa! Saya bisa berinteraksi dengan orang-orang yang memiliki pengalaman serupa dan mendapatkan saran langsung dari ahli. Sangat membantu!",
    starsSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8e5d81d38c4037b6a83b44697d1afe98e6293ecef2a2355e332655310c218b7c?placeholderIfAbsent=true&apiKey=0537f3f2a8ab48ea877b83fe9967182f"
  }
];

const ReviewSection = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center self-stretch px-36 py-36 bg-[linear-gradient(100deg,rgba(127,195,176,0.15_7.05%,rgba(78,172,146,0.10)_50.64%))] max-md:px-5 max-md:py-24 bg-[#D5EFE9]">
      <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
        <h2 className="z-10 flex-1 shrink self-stretch pt-0 pb-28 my-auto text-6xl font-semibold tracking-tighter text-black leading-[60px] min-w-[332px] max-md:pb-24 max-md:text-4xl max-md:leading-10">
          Beberapa orang <br /> yang telah terbantu <br /> dengan ObesiFit
        </h2>
        {reviewData.map((review, index) => (
          <div key={index} className="flex flex-col flex-1 shrink self-stretch my-auto rounded-none basis-0 min-w-[332px]">
            <ReviewCard {...review} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;