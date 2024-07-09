import Image from "next/image";
import React from "react";

interface props {
  title: string;
  subtitle: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}
export function BignessRight({
  alt,
  height,
  src,
  subtitle,
  title,
  width,
}: props) {
  return (
    <div className="border p-8 flex items-center flex-col gap-6 rounded-3xl h-[486px] max-h-[486px]  overflow-hidden shadow-md col-span-1">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="relative -top-8"
      />
      <h1 className="text-3xl font-semibold w-[288px] text-center relative -top-8">
        {title}
      </h1>
      <p className="opacity-60 relative -top-8">{subtitle}</p>
    </div>
  );
}
