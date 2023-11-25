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
            title="Dina lokala rörmokare i Stockholm - för privatpersoner och företag"
            className="!text-center"
          />
          <p className="text-[18px] text-black/70 text-center">
            På Jour 365 erbjuder vi omfattande VVS-tjänster till både husägare
            och företag i hela Stockholm. Våra erfarna och certifierade
            rörmokare är redo att hjälpa dig med allt från mindre installationer
            till kompletta renoveringar. Vi är också experter på ventilation,
            uppvärmning och sanitetssystem.
          </p>
        </div>
        <AccordionPic items={serviceAccordions} withBullets />
      </div>
      <div className="mt-[120px] flex flex-col gap-[70px]">
        <div className="text-[20px] max-w-[1005px] mx-auto">
          <p className="text-center">
            Våra erfarna och certifierade rörmokare kan hantera alla typer av
            VVS-problem du kan ha, oavsett hur stora eller små de är. Vi är
            experter på alla typer av VVS-system, inklusive ventilation,
            uppvärmning och sanitet.
          </p>
          <p className="text-secondary text-center">
            Kontakta oss idag för en kostnadsfri offert!
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
