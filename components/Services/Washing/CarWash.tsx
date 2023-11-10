import React from "react";
import AccordionPic from "../Plumber/AccordionPic";
import { Typography } from "@mui/material";

export default function CarWash() {
  return (
    <div className="max-w-layout mx-auto my-[120px]">
      <AccordionPic
        items={serviceAccordions}
        carWashChildren={
          <Typography className="text-[18px] text-secondary mt-5">
            Call us on 08 – 23 55 20 and we will send out a washing machine
            immediately
          </Typography>
        }
        listStyles="!gap-7"
        title="Car Wash Service"
      />
    </div>
  );
}

const serviceAccordions = [
  {
    id: 1,
    title: "What is a car wash?",
    img: "/services/washing-machine/car-wash.png",
    description: [
      "A flushing truck is a vehicle with a high-pressure flushing and hot water boiler that flushes your drains with hot water and high pressure to flush away dirt and deposits that have blocked the drain.",
      "A flushing truck is the most effective way to get rid of blockages in the drain and solves the problem in 90% of cases. Do you have a blockage in the drain?",
    ],
  },
  {
    id: 2,
    title: "Available 24/7 - calls 365 days a year",
    img: "/services/washing-machine/Available-24.jpg",
    description: [
      "Mechanical exhaust ventilation – With the help of a fan, the air is led out of the house. Air enters through small vents in the wall. This is called the F system.",
      "Mechanical supply and exhaust ventilation – In this system, you have two fans, one that draws air in and one that brings air out. This is called the FT system",
      "Self-draft ventilation – This is a system without fans, instead a ventilation flow is created using indoor and outdoor air.",
    ],
  },
  {
    id: 3,
    title: "When do I need a car wash?",
    img: "/services/washing-machine/When-need.webp",
    description: [
      "Mechanical exhaust ventilation – With the help of a fan, the air is led out of the house. Air enters through small vents in the wall. This is called the F system.",
      "Mechanical supply and exhaust ventilation – In this system, you have two fans, one that draws air in and one that brings air out. This is called the FT system",
      "Self-draft ventilation – This is a system without fans, instead a ventilation flow is created using indoor and outdoor air.",
    ],
  },
];
