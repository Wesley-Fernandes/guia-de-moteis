import Image from "next/image";
import React from "react";
import Comments from "../Comments";
import Banner from "../Banner";
import Motels from "../Motels";

export function Functionalities() {
  return (
    <section
      className="h-flex flex flex-col items-center mt-12 w-[1280px]"
      id="Funcionalidades"
    >
      <h1 className="font-bold text-4xl mb-4 flex items-center gap-1">
        Funcionalidade que você vai
        <span className="text-red-600">amar!</span>
      </h1>
      <Image
        src="/Funcionalidades.png"
        alt=""
        width={1080}
        height={1080}
        className="w-[787px]"
      />
      <Comments />
      <Banner />
      <Motels />
    </section>
  );
}
