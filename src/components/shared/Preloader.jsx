"use client";

import { siteSettings } from "@/src/staticData/siteSettings";
import Image from "next/image"; // ✅ Importación añadida

const Preloader = () => {
  return (
    <div id="preloader">
      <div className="loader_line"></div>
      <div className="absolute w-20 h-20 transition-all delay-300 -translate-x-1/2 -translate-y-1/2 rounded-full logo top-1/2 left-1/2 bg-nightBlack border-greyBlack flex-center">
        <Image
          src={siteSettings?.preloader?.image}
          alt="Rus Madrigal"
          width={80} // ajustá según tu diseño
          height={80}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Preloader;