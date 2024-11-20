import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text }) => {
  const navigate = useNavigate();
  return <button className="px-16 py-6 mt-10 text-2xl font-bold tracking-normal leading-none text-center text-white bg-emerald-400 rounded-2xl shadow-[-74px_75px_30px_rgba(0,0,0,0)] max-md:px-5" onClick={() => navigate("/login")}>{text}</button>;
};

export default Button;
