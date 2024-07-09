import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

import "./globals.css";
import "animate.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guia de moteis",
  description:
    "Todos os motéis de São Paulo, Campinas, Rio de Janeiro, Belo Horizonte, Curitiba, Porto Alegre, Recife, Fortaleza e todo o Brasil, com descontos especiais ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
