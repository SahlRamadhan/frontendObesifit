import React from 'react';
import bannerImage from '../../../assets/images/Imagesintrouser.png'; // Sesuaikan jalur ini

function Imagesintro() {
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

export default Imagesintro;
