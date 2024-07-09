import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Whys from "../Whys";

export function Why() {
  return (
    <section
      className="grid grid-cols-2 gap-8 items-center justify-between w-[1280px] mt-8"
      id="Beneficios"
    >
      <article className="grid grid-cols-1 gap-4 col-span-1">
        <Whys.BignessLeft
          alt="Cellphone reserving hotel image"
          height={458}
          width={458}
          src="/mock.png"
          title="Reserva imediata ou para outra data"
          subtitle="Flexibilidade total para planejar sua estadia."
          key="reserve"
        />

        <Whys.ShortnessLeft
          alt="Payments forms image"
          height={349}
          width={309}
          src="/formas-de-pagamento.png"
          subtitle="Facilidade e conveniência no pagamento."
          title="Pagamento com pix e parcelamento"
          key="Payments"
        />
      </article>

      <article className="grid grid-cols-1 gap-4 col-span-1">
        <Whys.ShortnessRight
          alt="footer imagem"
          height={458}
          width={458}
          src="/discount.png"
          subtitle="Economize em suas reservas."
          title="Descontos de até 50%"
          key="Descount"
        />

        <Whys.BignessRight
          alt="cellphone"
          height={458}
          width={458}
          src="/background-phone.png"
          subtitle="A cada 10 selos, uma reserva grátis!"
          title="Acumule selos e ganhe prêmios"
          key="Cellphone"
        />
      </article>
    </section>
  );
}
