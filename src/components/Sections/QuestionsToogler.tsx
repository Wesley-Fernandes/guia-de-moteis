"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "../ui/tabs";
import { BadgePercent, Calculator, User } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import questions from "./question-mock.json";
export function QuestionsToogler() {
  const [question, setQuestions] = useState<"pagamento" | "conta" | "desconto">(
    "pagamento"
  );
  const toogle = (props: "pagamento" | "conta" | "desconto") => {
    setQuestions(props);
  };
  return (
    <Tabs defaultValue="pagamento" className="w-[696px] col-span-1">
      <TabsList className="w-full grid grid-cols-3 h-14 border ">
        <TabsTrigger
          value="pagamento"
          onClick={() => toogle("pagamento")}
          className="h-[54px] col-span-1 flex gap-2 items-center"
        >
          <Calculator size={20} strokeWidth={1} />
          Reserva e pagamento
        </TabsTrigger>
        <TabsTrigger
          value="conta"
          onClick={() => toogle("conta")}
          className="h-[54px] col-span-1 flex gap-2 items-center"
        >
          <User size={20} strokeWidth={1} />
          Minha conta
        </TabsTrigger>
        <TabsTrigger
          value="desconto"
          onClick={() => toogle("desconto")}
          className="h-[54px] flex gap-2 items-center col-span-1"
        >
          <BadgePercent size={20} strokeWidth={1} />
          Descontos e promoção
        </TabsTrigger>
      </TabsList>

      <TabsContent value="pagamento" className="w-[696px]">
        <Accordion type="single" collapsible className="w-full">
          {questions.conta.map((q, index) => (
            <AccordionItem value={"valor--".concat(String(index))} key={index}>
              <AccordionTrigger className="font-bold">
                {q.title}
              </AccordionTrigger>
              <AccordionContent>{q.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </TabsContent>
      <TabsContent value="conta" className="w-[696px]">
        <Accordion type="single" collapsible className="w-full">
          {questions.pagamento.map((q, index) => (
            <AccordionItem value={"valor--".concat(String(index))} key={index}>
              <AccordionTrigger className="font-bold">
                {q.title}
              </AccordionTrigger>
              <AccordionContent>{q.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </TabsContent>
      <TabsContent value="desconto" className="w-[696px]">
        <Accordion type="single" collapsible className="w-full">
          {questions.desconto.map((q, index) => (
            <AccordionItem value={"valor--".concat(String(index))} key={index}>
              <AccordionTrigger className="font-bold">
                {q.title}
              </AccordionTrigger>
              <AccordionContent>{q.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </TabsContent>
    </Tabs>
  );
}
