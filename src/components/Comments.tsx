"use client";
import React, { useState } from "react";
import Comment from "./Comment";
import { ArrowLeft, ArrowRight } from "lucide-react";

function Comments() {
  const [actor, setActor] = useState(0);

  const data = [
    {
      userImg: "robohash.org/stefan-three",
      name: "John Doe",
      votes: 1,
      description:
        "Ótimo app! Encontrei um hotel muito barato e confortável na minha última viagem.",
    },
    {
      userImg: "robohash.org/stefan-three",
      name: "Jane Smith",
      votes: 2,
      description:
        "Adorei a facilidade de usar o app. Achei uma promoção incrível em um hotel 5 estrelas.",
    },
    {
      userImg: "robohash.org/stefan-three",
      name: "Mike Jones",
      votes: 3,
      description:
        "Consegui reservar um hotel bem em conta para as férias. Recomendo!",
    },
    {
      userImg: "robohash.org/stefan-three",
      name: "Emily Davis",
      votes: 4,
      description:
        "Aplicativo excelente! Achei um hotel barato e perto das principais atrações turísticas.",
    },
    {
      userImg: "robohash.org/stefan-three",
      name: "Chris Brown",
      votes: 5,
      description:
        "Melhor app para encontrar hotéis baratos! Economizei muito na minha última viagem.",
    },
    {
      userImg: "robohash.org/stefan-three",
      name: "Sarah Wilson",
      votes: 1,
      description:
        "Muito útil! Consegui uma ótima oferta de última hora em um hotel próximo ao aeroporto.",
    },
    {
      userImg: "robohash.org/stefan-three",
      name: "David Lee",
      votes: 2,
      description:
        "Gostei bastante do app. Encontrei um hotel barato e com boas avaliações.",
    },
    {
      userImg: "robohash.org/stefan-three",
      name: "Emma Clark",
      votes: 3,
      description:
        "Muito prático! Reservei um hotel econômico rapidamente pelo app.",
    },
    {
      userImg: "robohash.org/stefan-three",
      name: "James White",
      votes: 4,
      description:
        "Aplicativo fantástico! Consegui um ótimo preço em um hotel de última hora.",
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
    <div className="flex flex-col w-full">
      <div className="flex justify-between w-full">
        <h1 className="font-bold text-3xl mb-1">O que estão dizendo?</h1>
        <div className="flex gap-1">
          <button
            className="border-2 disabled:border-red-300 disabled:text-red-300 border-red-600 text-red-500 flex items-center justify-center h-14 w-14 rounded-full"
            onClick={down}
            disabled={actor - 1 <= 0}
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
      <ul className="list-none flex gap-2 w-full overflow-x-hidden py-2">
        {data.map((user, index) => {
          if (index >= actor) {
            return <Comment key={index} {...user} />;
          }
        })}
      </ul>
    </div>
  );
}

export default Comments;
