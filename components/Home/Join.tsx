import Image from "next/image";
import React from "react";
import "./styles.css";
import Hexagon from "./Hexagon";

export default function Join() {
  return (
    <div className="max-w-layout mx-auto mt-20 mb-16">
      <div className="flex flex-col items-center justify-center">
        <h2 className="uppercase font-semibold text-[25px]">Jour Eliten</h2>
        <h3 className="text-title font-semibold text-center uppercase">
          how it works
        </h3>
      </div>

      <div className="mt-10 flex justify-between">
        {/* 1st */}
        <div className="flex flex-col gap-7 items-center justify-center w-[300px] p-2 relative ">
          <div className="w-[288px] h-[288px] relative rounded-full overflow-hidden">
            <Image alt="join logo" src={"/home/join/icon3.png"} fill />
          </div>
          <div className="absolute -right-5 top-[45%]">
            <Hexagon content="01" />
          </div>
          <p className="font-semibold text-2xl text-center">
            We&apos;re here to help, 24/7 - call or book online!
          </p>
        </div>

        {/* 2nd */}
        <div className="flex flex-col gap-7 items-center justify-center w-[300px] p-2 relative ">
          <div className="w-[288px] h-[288px] relative rounded-full overflow-hidden">
            <Image alt="join logo" src={"/home/join/icon2.png"} fill />
          </div>
          <div className="absolute -right-5 top-[10%]">
            <Hexagon content="01" color="secondary" />
          </div>
          <p className="font-semibold text-2xl text-center">
            Certified technicians to your door in 1 hour or less!
          </p>
        </div>
        {/* 3rd */}
        <div className="flex flex-col gap-7 items-center justify-center w-[300px] p-2 relative ">
          <div className="w-[288px] h-[288px] relative rounded-full overflow-hidden">
            <Image alt="join logo" src={"/home/join/icon1.png"} fill />
          </div>
          <div className="absolute -right-5 top-[45%]">
            <Hexagon content="01" color="[#ffc000]" />
          </div>
          <p className="font-semibold text-2xl text-center">
            Pay your way - installments or invoice
          </p>
        </div>
      </div>
    </div>
  );
}
