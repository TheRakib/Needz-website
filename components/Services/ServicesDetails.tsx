import React from "react";
import TextTitle from "../Shared/TextTitle";
import { PiCheckBold } from "react-icons/pi";

export default function ServicesDetails() {
  return (
    <div className="max-w-layout mx-auto mt-5 px-2">
      <div className="flex flex-col gap-5 ">
        <div className="max-w-[680px] mr-auto flex flex-col gap-5">
          <TextTitle title="El installationer" />
          <div className="flex flex-col gap-5 text-[18px] text-black/70 ">
            <p>
              Vi på Jour365 förstår att alla har olika behov och unika
              förutsättningar. Därför erbjuder vi ett brett sortiment av
              tjänster; men elektriker som kan anpassa sig efter just dina
              behov.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[18px] font-semibold">
            Våra elektriska tjänster inkluderar bland annat:
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 justify-between gap-y-[10px] gap-x-14 ">
            {serviceItems.map((item) => (
              <li
                key={item.id}
                className=" col-span-1 w-full text-[18px] flex items-center xl:whitespace-nowrap gap-2"
              >
                <span>
                  <PiCheckBold className="text-primary text-lg " />
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-secondary text-[20px] text-center mt-12">
        Har du ett akut elektriskt problem som behöver snabb hjälp? Ring nu på
        08-30 22 41!
      </p>
    </div>
  );
}

const serviceItems = [
  {
    id: 23,
    text: "Vi jobbar bl.a med Installationer av eluttag och belysning",
  },
  {
    id: 1,
    text: "Värmepannor - Felsökning av befintliga installationer",
  },
  {
    id: 2,
    text: "Service och underhåll av befintliga installationer",
  },
  {
    id: 3,
    text: "Installationer och uppgraderingar av elcentraler",
  },
  {
    id: 4,
    text: "Kabeldragning",
  },
  {
    id: 5,
    text: "Jordfelsbrytare",
  },
  {
    id: 6,
    text: "Laddningsstolpar och mycket mer. ",
  },
  // {
  //   id: 7,
  //   text: "Mätning av elektricitet, till exempel vid överbelastning.",
  // },
  // {
  //   id: 8,
  //   text: "Kortslutning",
  // },
  // {
  //   id: 9,
  //   text: "Jordfelsbrytare som löser ut",
  // },
  // {
  //   id: 10,
  //   text: "Laddningsstolpar",
  // },
];
