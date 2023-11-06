import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import Image from "next/image";
import { BsArrowDownLeftCircleFill } from "react-icons/bs";
import { Button } from "@mui/material";
import { LuPhoneCall } from "react-icons/lu";

export default function OurServices() {
  return (
    <div className="max-w-layout mx-auto mb-[120px] ">
      <SectionTitle title="Our Services" className="w-full text-center" />
      <div className="flex flex-wrap gap-16 mt-11">
        {serviceItems.map((item) => (
          <div key={item.id} className="w-[370px] h-[414px] relative ">
            <Image src={item.img} alt="Our services" fill />
            <div
              className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-primary/80 
            to-transparent"
            />
            <div className="absolute bottom-10 left-0 w-full h-full">
              <div className="flex justify-between items-end text-white h-full mx-6">
                <span className="text-2xl font-semibold">{item.title}</span>
                <BsArrowDownLeftCircleFill className="text-white text-4xl " />
              </div>
            </div>
          </div>
        ))}
        <div className="w-[370px] h-[414px] relative flex flex-col gap-10 items-center justify-center ">
          <Button className="w-[291px] h-[92px] bg-primary text-white text-[26px] capitalize rounded-lg">
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
