import React from 'react';
import bannerImage from '../../../assets/images/Banner opening 2 (3).png'; // Sesuaikan jalur ini

function ImagesintroVideo() {
    return (
      <div className="flex justify-center w-full overflow-hidden mt-0"> {/* Menghilangkan margin top */}
        <img 
          src={bannerImage} 
          alt="ObesiFit Banner" 
          className="w-full h-auto object-cover" 
        />
      </div>
    );
  }

export default ImagesintroVideo;
