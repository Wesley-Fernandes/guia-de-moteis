import { Button } from "@/components/ui/button";

import Sections from "@/components/Sections";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="flex h-[calc(100vh-4rem)] flex-col gap-4 items-center overflow-x-hidden">
      <Sections.Homepage />
      <Sections.Why />
      <Sections.Functionalities />
      <Sections.Questions />
      <Sections.Contact />
      <Footer />
    </main>
  );
}
