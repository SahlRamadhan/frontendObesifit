import React from 'react';
import {useAuth} from "@/context/AuthContext";

function WelcomeSection() {

  const{userData} = useAuth();
  return (
    <section className="text-center py-10 bg-white">
      <h2 className="text-3xl font-semibold">Hai, {userData.name} ! Senang melihat Anda di ObesiFit</h2>
      <p className="text-xl mt-4 text-gray-700">Yuk, kita eksplorasi informasi menarik tentang obesitas!</p>
    </section>
  );
}

export default WelcomeSection;
