"use client";
import React, { useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import Image from "next/image";
import { BsArrowDownLeftCircleFill } from "react-icons/bs";
import { Button } from "@mui/material";
import { LuPhoneCall } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { Services } from "@/Types";

export default function OurServices() {
  const [isHovered, setIsHovered] = useState<boolean | number>(false);

  const router = useRouter();

  const handleMouseOver = (id: number) => {
    setIsHovered(id);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleCartClick = (item: Services) => {
    router.push(`/services/electrician`);
  };

  return (
    <div className="max-w-layout mx-auto mb-[120px] ">
      <SectionTitle title="Our Services" className="w-full !text-center" />

      <div className="flex flex-wrap gap-5 lg:gap-16 mt-11 md:mx-24 xl:mx-0">
        {serviceItems.map((item) => (
          <div
            key={item.id}
            onMouseOver={() => handleMouseOver(item.id)}
            onMouseOut={handleMouseOut}
            onClick={() => handleCartClick(item)}
            className="mx-auto w-[365px] md:w-[370px] h-[414px] relative overflow-hidden cursor-pointer"
          >
            <Image src={item.img} alt="Our services" fill />
            <div
              className={`absolute bottom-0 left-0 w-full h-[60%] duration-300 bg-gradient-to-t ${
                isHovered === item.id ? "from-primary" : "from-primary/70"
              } 
              to-transparent`}
            />
            <div
              className={`${
                isHovered === item.id ? "bottom-32" : "bottom-10"
              } absolute left-0 w-full h-full  transition-all duration-300  px-6 text-white`}
            >
              <div className="flex justify-between items-end h-full">
                <span className="text-2xl font-semibold">{item.title}</span>
                <BsArrowDownLeftCircleFill className="text-4xl " />
              </div>
              {isHovered === item.id && (
                <p className="text-[17px] mt-5 leading-6 ">
                  {item.description}{" "}
                </p>
              )}
            </div>
          </div>
        ))}
        <div className="w-[370px] h-[414px] mx-auto relative flex flex-col gap-10 items-center justify-center ">
          <Button className="w-[291px] h-[92px] bg-primary hover:bg-primary/70 text-white text-[26px] capitalize rounded-lg">
            Book Your Service
          </Button>
          <p className="text-[26px] font-semibold flex items-center justify-center gap-3">
            <LuPhoneCall />
            <span>08-235520</span>
          </p>
        </div>
      </div>
    </div>
  );
}

const serviceItems = [
  {
    id: 1,
    title: "Electrician",
    img: "/home/services/Image1.png",
    description:
      "Sewer lifting through high pressure is a gentle and environmentally friendly method that quickly solves all kinds of blockages in drains.",
  },
  {
    id: 2,
    title: "Stop In Drains",
    img: "/home/services/Image2.png",
    description:
      "Sewer lifting through high pressure is a gentle and environmentally friendly method that quickly solves all kinds of blockages in drains.",
  },
  {
    id: 3,
    title: "Plumber",
    img: "/home/services/Image3.png",
    description:
      "Sewer lifting through high pressure is a gentle and environmentally friendly method that quickly solves all kinds of blockages in drains.",
  },
  {
    id: 4,
    title: "Washing Machine",
    img: "/home/services/Image4.png",
    description:
      "Sewer lifting through high pressure is a gentle and environmentally friendly method that quickly solves all kinds of blockages in drains.",
  },
  {
    id: 5,
    title: "Camera Inspection",
    img: "/home/services/Image5.png",
    description:
      "Sewer lifting through high pressure is a gentle and environmentally friendly method that quickly solves all kinds of blockages in drains.",
  },
  {
    id: 6,
    title: "Charging Box",
    img: "/home/services/Image6.png",
    description:
      "Sewer lifting through high pressure is a gentle and environmentally friendly method that quickly solves all kinds of blockages in drains.",
  },
  {
    id: 7,
    title: "Electric Car Charger",
    img: "/home/services/Image7.png",
    description:
      "Sewer lifting through high pressure is a gentle and environmentally friendly method that quickly solves all kinds of blockages in drains.",
  },
  {
    id: 8,
    title: "Electrical Installations",
    img: "/home/services/Image8.png",
    description:
      "Sewer lifting through high pressure is a gentle and environmentally friendly method that quickly solves all kinds of blockages in drains.",
  },
];
