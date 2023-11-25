import SecondTitle from "@/components/Shared/SecondTitle";
import React from "react";
import CallContactButtons from "@/components/Shared/CallContactButtons";
import AccordionPic from "./AccordionPic";

export default function LocalPlumber() {
  return (
    <div className="max-w-layout mx-auto px-2">
      <div className="">
        <div className="flex flex-col gap-5 items-center justify-center mb-[90px]  max-w-[712px] mx-auto">
          <SecondTitle
            title="Your local plumbers in Stockholm - for homes and businesses"
            className="!text-center"
          />
          <p className="text-[18px] text-black/70 text-center">
            At Jour 365, we offer comprehensive plumbing services to homeowners
            and businesses throughout Stockholm. Our experienced and certified
            plumbers are ready to help you with everything from minor
            installations to complete renovations. We are also experts in
            ventilation, heating, and sanitation systems.
          </p>
        </div>
        <AccordionPic items={serviceAccordions} withBullets />
      </div>
      <div className="mt-[120px] flex flex-col gap-[70px]">
        <div className="text-[20px] max-w-[1005px] mx-auto">
          <p className="text-center">
            Our experienced and certified plumbers can handle any plumbing
            problem you have, no matter how big or small. We are experts in all
            types of plumbing systems, including ventilation, heating, and
            sanitation.
          </p>
          <p className="text-secondary text-center">
            Kontakta oss today for a free quote!
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <CallContactButtons />
        </div>
      </div>
    </div>
  );
}

const serviceAccordions = [
  {
    id: 1,
    title: "Ventilation",
    img: "/services/plumber/Ventilation.png",
    description: [
      "Mechanical exhaust ventilation – With the help of a fan, the air is led out of the house. Air enters through small vents in the wall. This is called the F system.",
      "Mechanical supply and exhaust ventilation – In this system, you have two fans, one that draws air in and one that brings air out. This is called the FT system",
      "Self-draft ventilation – This is a system without fans, instead a ventilation flow is created using indoor and outdoor air.",
    ],
  },
  {
    id: 2,
    title: "Heat",
    img: "/services/plumber/Heat.png",
    description: [
      "Mechanical exhaust ventilation – With the help of a fan, the air is led out of the house. Air enters through small vents in the wall. This is called the F system.",
      "Mechanical supply and exhaust ventilation – In this system, you have two fans, one that draws air in and one that brings air out. This is called the FT system",
      "Self-draft ventilation – This is a system without fans, instead a ventilation flow is created using indoor and outdoor air.",
    ],
  },
  {
    id: 3,
    title: "Sanitation",
    img: "/services/plumber/Sanitation.png",
    description: [
      "Mechanical exhaust ventilation – With the help of a fan, the air is led out of the house. Air enters through small vents in the wall. This is called the F system.",
      "Mechanical supply and exhaust ventilation – In this system, you have two fans, one that draws air in and one that brings air out. This is called the FT system",
      "Self-draft ventilation – This is a system without fans, instead a ventilation flow is created using indoor and outdoor air.",
    ],
  },
];
