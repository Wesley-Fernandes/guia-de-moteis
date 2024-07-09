import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

export function Homepage() {
  return (
    <section
      className="flex items-center justify-between w-[1280px] mt-1"
      id="Home"
    >
      <div className="flex flex-col gap-3">
        <h1 className="max-w-[546px] font-semibold text-5xl">
          Encontre e reserve o motel perfeito com descontos exclusivos!
        </h1>
        <p className="w-[369px] opacity-80 font-normal text-sm mb-4">
          Baixe o Guia de Motéis GO e aproveite reservas rápidas, pagamentos
          seguros e vantagens imperdíveis
        </p>
        <Button className="w-36">Baixar agora</Button>
      </div>
      <div className=" w-[800px]">
        <Image
          src="/Home-container.png"
          alt="home-image"
          width={800}
          height={800}
          priority
          className="w-full relative z-10 -right-11"
        />
      </div>
    </section>
  );
}
