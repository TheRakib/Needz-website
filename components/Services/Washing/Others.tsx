import React from "react";
import AccordionPic from "../Plumber/AccordionPic";
import { Typography } from "@mui/material";

export default function Others() {
  return (
    <div className="max-w-layout mx-auto my-[120px]">
      <AccordionPic
        items={serviceAccordions}
        className="!flex-row-reverse"
        listStyles="!gap-7"
        title="Others"
      />
    </div>
  );
}

const serviceAccordions = [
  {
    id: 1,
    title: "How does a flush work?",
    img: "/services/washing-machine/car-wash.png",
    description: [
      "What a flush truck does is clean your drain with high pressure – a truck comes out and flushes the pipes clean with a high pressure flush of hot water.",
      "A flush contains only hot water, i.e. no unnecessary chemicals or anything else that could be harmful to the environment. A flushing truck is therefore not only the most efficient method, but also the most environmentally friendly method of getting rid of blockages in the drains.",
      "In addition to being gentle on the environment A flushing truck is therefore not only the most efficient method, but also the most environmentally friendly method of getting rid of blockages in the drains.",
    ],
  },
  {
    id: 2,
    title: "Pipe inspection - film your pipes from the inside",
    img: "/services/washing-machine/Available-24.jpg",
    description: [
      "Mechanical exhaust ventilation – With the help of a fan, the air is led out of the house. Air enters through small vents in the wall. This is called the F system.",
      "Mechanical supply and exhaust ventilation – In this system, you have two fans, one that draws air in and one that brings air out. This is called the FT system",
      "Self-draft ventilation – This is a system without fans, instead a ventilation flow is created using indoor and outdoor air.",
    ],
  },
  {
    id: 3,
    title: "What is meant by deviations?",
    img: "/services/washing-machine/When-need.webp",
    description: [
      "Mechanical exhaust ventilation – With the help of a fan, the air is led out of the house. Air enters through small vents in the wall. This is called the F system.",
      "Mechanical supply and exhaust ventilation – In this system, you have two fans, one that draws air in and one that brings air out. This is called the FT system",
      "Self-draft ventilation – This is a system without fans, instead a ventilation flow is created using indoor and outdoor air.",
    ],
  },

  {
    id: 4,
    title: "Sludge suction - an alternative to a washing machine",
    img: "/services/washing-machine/When-need.webp",
    description: [
      "Mechanical exhaust ventilation – With the help of a fan, the air is led out of the house. Air enters through small vents in the wall. This is called the F system.",
      "Mechanical supply and exhaust ventilation – In this system, you have two fans, one that draws air in and one that brings air out. This is called the FT system",
      "Self-draft ventilation – This is a system without fans, instead a ventilation flow is created using indoor and outdoor air.",
    ],
  },
];
