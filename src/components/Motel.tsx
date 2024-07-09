/* eslint-disable @next/next/no-img-element */
import React from "react";

interface props {
  backgroundImg: string;
  title: string;
  local: string;
  logo: string;
}
function Motel({ backgroundImg, local, title, logo }: props) {
  console.log(backgroundImg);
  return (
    <li
      className="border flex justify-center px-4 pt-4 rounded-3xl gap-4 shadow-md max-w-[384px] w-[384px] bg-cover animate__animated animate__backInRight items-end"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="flex bg-white p-2 rounded-md mb-6">
        <img src={logo} alt="logo" className="h-14 w-14" />
        <div className="flex flex-col">
          <span className="font-bold">{title}</span>
          <span className="text-sm">{local}</span>
        </div>
      </div>
    </li>
  );
}

export default Motel;
