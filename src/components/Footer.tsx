/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Footer() {
  return (
    <footer className=" bg-red-600 flex flex-col items-center justify-center w-full">
      <div className="w-[1280px] grid grid-cols-2 py-14 border-b">
        <div className="flex gap-3">
          <img src="/LogotipoWhite.svg" alt="logotipo" className="w-14 h-14" />
          <p className="text-white text-sm font-extralight max-w-[500px]">
            Guia de Motéis GO é uma plataforma que facilita a busca e reserva de
            motéis, oferecendo informações detalhadas e uma experiência
            integrada.
          </p>
        </div>
        <div className="col-span-1 flex flex-col justify-end ">
          <span className="font-medium text-white">
            Receba novidades e ofertas
          </span>
          <div className="flex justify-end gap-2">
            <Input placeholder="Digite seu email" className="bg-white w-full" />
            <Button variant="default" className="bg-zinc-950 hover:bg-zinc-900">
              Inscrever
            </Button>
          </div>
        </div>
      </div>
      <div className="w-[1216px] flex items-center justify-between py-6">
        <small className="text-white">
          2024 - Todos os direitos reservados
        </small>
        <div className="flex items-center gap-1">
          <span className="text-white text-sm">Um aplicativo:</span>
          <img src="/guia.svg" alt="guia" className="w-32" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
