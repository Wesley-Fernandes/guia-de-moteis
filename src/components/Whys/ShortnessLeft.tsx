import React from "react";
import Image from "next/image";

interface props {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  subtitle: string;
}
export function ShortnessLeft({
  src,
  alt,
  height,
  width,
  subtitle,
  title,
}: props) {
  return (
    <div className="border flex items-center h-60 overflow-hidden rounded-3xl shadow-lg col-span-1 ">
      <div className="h-full p-8 flex justify-end gap-2 flex-col">
        <h1 className="font-medium text-3xl w-[301px]">{title}</h1>
        <p className="text-xs opacity-80">{subtitle}</p>
      </div>
      <div>
        <Image
          src={src}
          alt={alt}
          height={height}
          width={width}
          className="w-[400px]"
        />
      </div>
    </div>
  );
}
