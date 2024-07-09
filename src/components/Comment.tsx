/* eslint-disable @next/next/no-img-element */
import React from "react";

interface props {
  userImg: string;
  name: string;
  votes: number;
  description: string;
}
function Comment({ votes, description, userImg, name }: props) {
  return (
    <li className="border px-4 pt-4 rounded-3xl flex flex-col items-center gap-4 shadow-md w-[384px] h-[280px] animate__animated animate__backInRight">
      <div className="flex w-full">
        <img src="/aspas.png" alt="aspas" className="h-14" />
      </div>
      <p className="w-[336px] opacity-70 text-sm">{description}</p>
      <div className="flex gap-3 w-full ">
        {Array.from({ length: votes }).map((_, index) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            key={`star--${index}`}
          >
            <path
              d="M8.10326 0.753265C8.47008 0.0100192 9.52992 0.0100193 9.89674 0.753265L11.7063 4.41975C11.8519 4.7149 12.1335 4.91947 12.4592 4.96679L16.5054 5.55474C17.3256 5.67393 17.6531 6.6819 17.0596 7.26044L14.1318 10.1144C13.8961 10.3441 13.7885 10.6751 13.8442 10.9995L14.5353 15.0294C14.6754 15.8463 13.818 16.4693 13.0844 16.0836L9.46534 14.1809C9.17402 14.0278 8.82598 14.0278 8.53466 14.1809L4.91562 16.0836C4.18199 16.4693 3.32456 15.8463 3.46467 15.0294L4.15585 10.9995C4.21148 10.6751 4.10393 10.3441 3.86825 10.1144L0.940385 7.26044C0.346867 6.6819 0.674378 5.67393 1.4946 5.55474L5.54081 4.96679C5.86652 4.91947 6.14808 4.7149 6.29374 4.41975L8.10326 0.753265Z"
              fill="#FBBC04"
            />
          </svg>
        ))}
      </div>
      <div className="flex w-full items-center gap-4 border-t h-20 ">
        <img
          src={"https://xsgames.co/randomusers/avatar.php?g=male"}
          alt={name}
          className="h-14 w-14 rounded-full"
        />
        <span className="font-bold">{name}</span>
      </div>
    </li>
  );
}

export default Comment;
