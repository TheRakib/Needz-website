import Image from "next/image";
import React from "react";
import "./styles.css";
import Hexagon from "./Hexagon";
import { twMerge } from "tailwind-merge";
import SectionTitle from "../Shared/SectionTitle";

export default function Join() {
  return (
    <div className="max-w-layout mx-auto mt-20 mb-16">
      <div className="flex flex-col items-center justify-center">
        <h2 className="uppercase font-semibold text-[20px] md:text-[25px]">
          Jour Eliten
        </h2>
        <SectionTitle title="how it works" className="text-center uppercase" />
        {/* <h3 className="text-title font-semibold ">
          
        </h3> */}
      </div>

      <div className="mt-10 relative">
        <div className=" flex flex-col md:flex-wrap lg:flex-nowrap md:flex-row gap-4 md:gap-0 justify-between items-center md:px-16 ">
          {/* 1st */}
          {joinContents.map((content) => (
            <div
              key={content.id}
              className="flex flex-col gap-2 md:gap-7 items-center justify-center w-[300px] p-2 relative "
            >
              <div className="w-[288px] h-[288px] relative rounded-full overflow-hidden">
                <Image alt="join logo" src={content.img} fill />
              </div>
              <div className={twMerge(`absolute ${content.hexagonClass}`)}>
                {/* <Hexagon content="01" /> */}
                {/* hexagon */}
                <div
                  className={`hex relative bg-${content.hexagonColor} after:border-t-${content.hexagonColor} after:border-t-[20px] before:border-b-${content.hexagonColor} before:border-b-[20px]`}
                >
                  <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white font-semibold">
                    {content.id}
                  </p>
                </div>
                {/*  */}
              </div>
              <p className="font-semibold text-2xl text-center">
                {content.title}
              </p>
            </div>
          ))}

          {/* 2nd */}
          {/* <div className="flex flex-col gap-7 items-center justify-center w-[300px] p-2 relative ">
            <div className="w-[288px] h-[288px] relative rounded-full overflow-hidden">
              <Image alt="join logo" src={"/home/join/icon2.png"} fill />
            </div>
            <div className="absolute -right-5 top-[10%]">
              <div
                className={`hex relative bg-secondary after:border-t-secondary after:border-t-[20px] before:border-b-secondary before:border-b-[20px]`}
              >
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white font-semibold">
                  02
                </p>
              </div>
            </div>
            <p className="font-semibold text-2xl text-center">
              Certified technicians to your door in 1 hour or less!
            </p>
          </div> 

          <div className="flex flex-col gap-7 items-center justify-center w-[300px] p-2 relative ">
            <div className="w-[288px] h-[288px] relative rounded-full overflow-hidden">
              <Image alt="join logo" src={"/home/join/icon1.png"} fill />
            </div>
            <div className="absolute -right-5 top-[45%]">
              <div
                className={`hex relative bg-yellow after:border-t-yellow after:border-t-[20px] before:border-b-yellow before:border-b-[20px]`}
              >
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white font-semibold">
                  03
                </p>
              </div>
            </div>
            <p className="font-semibold text-2xl text-center">
              Pay your way - installments or invoice
            </p>
          </div>*/}
        </div>
        <div className="absolute top-[25%] left-0 h-[40%] xl:w-[100%] w-[97%] mr-auto -z-10 hidden lg:block ">
          <Image src={"/home/join/line.png"} alt="line" fill />
        </div>
        <div className="absolute xl:top-[10.5%] top-[15%] right-0 xl:-right-10 h-[50px] w-[55px] xl:h-[80px] xl:w-[85px] -z-10 hidden lg:block">
          <Image src={"/home/join/plain.png"} alt="plane" fill />
        </div>
      </div>
    </div>
  );
}

const joinContents = [
  {
    id: 1,
    title: "We're here to help, 24/7 - call or book online!",
    img: "/home/join/icon3.png",
    hexagonClass: "top-[45%] -right-5",
    hexagonColor: "primary",
  },
  {
    id: 2,
    title: "Certified technicians to your door in 1 hour or less!",
    img: "/home/join/icon2.png",
    hexagonClass: "top-[10%] -right-5",
    hexagonColor: "secondary",
  },
  {
    id: 3,
    title: "Pay your way - installments or invoice",
    img: "/home/join/icon1.png",
    hexagonClass: "top-[45%] -right-5",
    hexagonColor: "yellow",
  },
];
