import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"; // Tambahkan Autoplay
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import gambar
import thumbnail1 from "../../../assets/images/Video Thumbnail (1).jpg";
import thumbnail2 from "../../../assets/images/Video Thumbnail (2).jpg";
import thumbnail3 from "../../../assets/images/Video Thumbnail (3).jpg";
import thumbnail6 from "../../../assets/images/Video Thumbnail (6).jpg";
import thumbnail7 from "../../../assets/images/Video Thumbnail (7).jpg";

function SliderSection3D() {
  return (
    <section className="w-full py-10 bg-gray-100">
      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay]} 
        effect="coverflow" 
        grabCursor={true} 
        centeredSlides={true} 
        slidesPerView={1} 
        loop={true} 
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        coverflowEffect={{
          rotate: 50, 
          stretch: 0, 
          depth: 150, 
          modifier: 1, 
          slideShadows: true, 
        }}
        pagination={{ clickable: true }} 
        breakpoints={{
          640: { slidesPerView: 1 }, 
          768: { slidesPerView: 2 }, 
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <img src={thumbnail1} alt="Thumbnail 1" className="w-full h-[300px] object-cover rounded-lg shadow-lg" />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <img src={thumbnail2} alt="Thumbnail 2" className="w-full h-[300px] object-cover rounded-lg shadow-lg" />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <img src={thumbnail3} alt="Thumbnail 3" className="w-full h-[300px] object-cover rounded-lg shadow-lg" />
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <img src={thumbnail6} alt="Thumbnail 6" className="w-full h-[300px] object-cover rounded-lg shadow-lg" />
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <img src={thumbnail7} alt="Thumbnail 7" className="w-full h-[300px] object-cover rounded-lg shadow-lg" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default SliderSection3D;
