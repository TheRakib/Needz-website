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
            title="Elektrikertjänster för alla"
            className="!text-center"
          />
          <p className="text-[18px] text-black/70 text-center">
            Needz tillhandahåller omfattande elektrikertjänster för både
            privatpersoner och företag i Stockholm. Vårt team av certifierade
            elektriker är beredda att assistera med allt från enkla reparationer
            till omfattande elinstallationer, säkerställande av din säkerhet och
            komfort.
          </p>
        </div>
        <AccordionPic items={serviceAccordions} withBullets />
      </div>
      <div className="mt-[120px] flex flex-col gap-[70px]">
        <div className="text-[20px] max-w-[1005px] mx-auto">
          <p className="text-center">
            Vi har certifierade och erfarna rörmokare för alla typer av jobb,
            stora som små. Kontakta oss redan idag för kostnadsförslag!
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
    title: "Jour Elektriker",
    img: "/services/plumber/Ventilation.png",
    description: [
      "Elavbrott eller elproblem kan inträffa oväntat, krävande omedelbar uppmärksamhet. Våra jourkvalificerade elektriker är redo att ingripa dygnet runt, garanterande snabb respons och effektiva lösningar på alla dina elutmaningar, alltid med målet att vara på plats inom två timmar från din förfrågan.",
    ],
  },
  {
    id: 2,
    title: "Elektrisk Installation & Service",
    img: "/services/plumber/Heat.png",
    description: [
      "Behöver du installation av ny utrustning eller service på befintliga elinstallationer? Vårt erbjudande inkluderar allt från installation av belysning till större elsystem. Våra elektriker, certifierade och med lång erfarenhet, garanterar högsta kvalitet och säkerhet i alla projekt.",
    ],
  },
  {
    id: 3,
    title: "Problemfri Elanvändning",
    img: "/services/plumber/Sanitation.png",
    description: [
      "Uppleva problem med ditt elsystem kan vara frustrerande. Vårt expertteam är specialiserat på att effektivt diagnostisera och åtgärda alla typer av elektriska problem, oavsett om det gäller enstaka uttag eller hela systemet, för att säkerställa din el fungerar smidigt och utan avbrott.",
    ],
  },
];
