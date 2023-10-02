"use client";
import Image from "next/image";
import logo from "./assets/stellar-xlm-logo.svg";

export default function Home() {
  return (
    <div className="relative h-[100vh]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md z-30">
        <Image
          src={logo}
          width={100}
          height={100}
          alt="logo"
          className="mx-auto w-auto h-20 rounded-lg cursor-pointer hover:scale-110 pt-5"
        />
      </div>
    </div>
  );
}
