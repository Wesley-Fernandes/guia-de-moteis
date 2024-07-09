"use client";
import React, { useState } from "react";
import Comment from "./Comment";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Motel from "./Motel";

function Motels() {
  const [actor, setActor] = useState(0);

  const data = [
    {
      backgroundImg:
        "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
      title: "Hotel Querencia",
      local: "Rio Grande do Sul, Porto Alegre",
      logo: "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/1024px/1f3e8.png",
    },
    {
      backgroundImg:
        "https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg",
      title: "Hotel Sol",
      local: "Bahia, Salvador",
      logo: "https://example.com/images/logo-sol.png",
    },
    {
      backgroundImg:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/900/450/75/dam/wdpro-assets/dlr/places-to-stay/disneyland-hotel/resort-overview/disneyland-hotel-06.jpg?1719924985224",
      title: "Hotel Praia",
      local: "Rio de Janeiro, Copacabana",
      logo: "https://example.com/images/logo-praia.png",
    },
    {
      backgroundImg:
        "https://assets.sunwingtravelgroup.com/image/upload/f_auto,q_auto/sunwing-prod/HotelImages/CUN4HP/16x9/001.jpg",
      title: "Hotel Montanha",
      local: "Minas Gerais, Belo Horizonte",
      logo: "https://example.com/images/logo-montanha.png",
    },
  ];

  const up = () => {
    if (actor + 1 < data.length) {
      setActor((prev) => prev + 1);
    }
  };

  const down = () => {
    if (actor - 1 >= 0) {
      setActor((prev) => prev - 1);
    }
  };
  return (
    <div className="flex flex-col w-full mt-11 mb-14">
      <div className="flex justify-between w-full">
        <h1 className="font-bold text-3xl mb-1">
          Experiências que superam todas as expectativas
        </h1>
        <div className="flex gap-1">
          <button
            className="border-2 disabled:border-red-300 disabled:text-red-300 border-red-600 text-red-500 flex items-center justify-center h-14 w-14 rounded-full"
            onClick={down}
            disabled={actor - 1 < 0}
          >
            <ArrowLeft size={20} strokeWidth={3} />
          </button>

          <button
            className="border-2 disabled:border-red-300 disabled:text-red-300 border-red-600 text-red-500 flex items-center justify-center h-14 w-14 rounded-full"
            onClick={up}
            disabled={actor + 1 >= data.length}
          >
            <ArrowRight size={20} strokeWidth={3} />
          </button>
        </div>
      </div>
      <ul className="list-none flex gap-8 w-full h-[414px] overflow-x-hidden py-2">
        {data.map((motel, index) => {
          if (index >= actor) {
            return <Motel key={index} {...motel} />;
          }
        })}
      </ul>
    </div>
  );
}

export default Motels;
