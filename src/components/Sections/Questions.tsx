import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { QuestionsToogler } from "./QuestionsToogler";

export function Questions() {
  return (
    <section className="flex justify-between gap-32 w-[1280px] ">
      <div className="col-span-1 flex flex-col gap-4 w-[395px]">
        <h1 className="font-bold text-4xl text-start">Ficou com dúvidas?</h1>
        <p>
          Consulte nossas respostas às perguntas mais frequentes. Encontre
          informações que esclarecem suas dúvidas e compreenda melhor nossos
          serviços e produtos.
        </p>
        <Card className="mt-10 w-[395px]">
          <CardHeader className="flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <rect
                x="2.68137"
                y="4.16406"
                width="17.9982"
                height="17.9982"
                rx="3.5"
                stroke="#F2242B"
              />
              <path
                d="M9.27246 10.8084C9.50948 9.78679 10.4399 9.07849 11.4877 9.12198C12.6604 9.05703 13.6657 9.95062 13.7387 11.1228C13.7387 12.6274 11.5878 13.1236 11.5878 14.1241"
                stroke="#F2242B"
                stroke-width="1.28571"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.713 16.8754C11.7129 16.9444 11.6569 17.0003 11.5879 17.0003C11.5189 17.0002 11.4629 16.9443 11.4629 16.8753C11.4628 16.8062 11.5187 16.7502 11.5878 16.7502C11.621 16.7501 11.6529 16.7633 11.6764 16.7868C11.6998 16.8103 11.713 16.8421 11.713 16.8754"
                stroke="#F2242B"
                stroke-width="1.28571"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </CardHeader>
          <CardContent>
            <span className="font-bold">Precisa de uma ajuda a mais?</span>
            <p>Fale com o nosso time.</p>
          </CardContent>
          <CardFooter>
            <Button>Fale conosco</Button>
          </CardFooter>
        </Card>
      </div>
      <QuestionsToogler />
    </section>
  );
}
