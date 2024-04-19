import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className=" px-20 py-2 flex gap-10 items-center ">
      <div className="w-[370px] h-[120px]  relative ">
        <Image src="/logo1.png" fill alt="logo" />
      </div>
      <h1  className="text-4xl font-bold text-blue-600">Lakshmi Narain College of Technology, Indore</h1>
    </div>
  );
}
