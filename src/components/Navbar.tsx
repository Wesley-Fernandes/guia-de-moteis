import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
function Navbar() {
  return (
    <header className="h-16 border-b flex items-center justify-center w-screen ">
      <div className="h-full flex justify-between items-center w-[1280px] ">
        <Image
          src="/Logotipo.svg"
          alt="logo"
          width={50}
          height={50}
          className="h-12"
        />
        <nav className="flex items-center gap-6">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/#Home">Home</Link>
            </li>
            <li>
              <Link href="/#Beneficios">Beneficios</Link>
            </li>
            <li>
              <Link href="/#Funcionalidades">Funcionalidades</Link>
            </li>
            <li>
              <Link href="/#Perguntas">Perguntas</Link>
            </li>
            <li>
              <Link href="/#Contatos">Contatos</Link>
            </li>
          </ul>
          <Button className="bg-red-600">Baixar</Button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
