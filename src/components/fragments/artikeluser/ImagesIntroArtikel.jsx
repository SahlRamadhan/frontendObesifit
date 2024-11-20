import React from 'react';
import bannerImage from '../../../assets/images/Gambar Sampul (5).png'; // Sesuaikan jalur ini

function ImagesintroArtikle() {
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

export default ImagesintroArtikle;
