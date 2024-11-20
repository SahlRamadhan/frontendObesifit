import React from "react";
import mainbg11 from "../../../assets/images/MainbG1.png";
import { useNavigate } from "react-router-dom";


export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-10 px-6 py-10 relative bg-[#cacbcf26]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
        {/* Left Section (Text and Button) */}
        <div className="relative flex-1 w-full lg:w-[50%] max-w-[832px] mb-10">
          <div className="w-full mb-10">
            {/* Main Title */}
            <p className="font-black text-transparent text-[50px] sm:text-[65px] md:text-[85px] lg:text-[95px] tracking-wide leading-[60px] sm:leading-[80px] md:leading-[90px] lg:leading-[100px]">
              <span className="text-[#0e0f0c]">Pahami Obesitas, </span>
              <span className="text-[#4eac92]">Kendalikan Kesehatanmu</span>
            </p>
            {/* Main Text */}
            <p className="font-semibold text-black text-base sm:text-lg md:text-xl lg:text-xl tracking-wide leading-7 pt-10">Mulai hidup sehat dengan edukasi, konsultasi, dan dukungan dari kami</p>
          </div>

          {/* Button */}
          <div className="w-full flex justify-start">
            <div className="bg-[#4eac92] rounded-xl shadow-md w-full max-w-[291px] h-[74px] flex items-center justify-center">
              <button className="font-bold text-[#eae8e8] text-2xl text-center leading-7 w-full" onClick={() => navigate("/login")}>Langsung Aja</button>
            </div>
          </div>
        </div>

        {/* Right Section (Images and Background) */}
        <div className="relative flex-1 w-full lg:w-[50%] max-w-[828px]">
          <div className="relative w-full h-auto">
            <img className="w-full h-auto object-cover" alt="Mainbg" src={mainbg11} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
