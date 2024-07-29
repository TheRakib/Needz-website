"use client";
import CallContactButtons from "@/components/Shared/CallContactButtons";
import TextTitle from "@/components/Shared/TextTitle";
import Image from "next/image";
import React, { useState } from "react";
import { PiCheckBold } from "react-icons/pi";

export default function Pressure() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="px-2 max-w-layout mx-auto my-10 flex flex-col md:flex-row justify-between gap-4">
      <div className="flex flex-col gap-11 w-[350px] h-[444px] md:w-[680px] md:h-[594px] relative mx-auto">
        <Image src={"/services/drains-description.png"} alt="worker" fill />
      </div>
      <div className="max-w-[510px] flex flex-col justify-between">
        <div className=" flex flex-col gap-5 ">
          <TextTitle
            className="capitalize"
            title="är tydliga tecken på att det börjar bli dags att spola avloppen innan stoppet blir större. "
          />
          <div className="flex flex-col gap-5 text-[18px] text-black/70 ">
            <p className="text-left leading-7 tracking-tight">
              Att högtrycksspola är en skoningssam lösning och den mest
              effektiva när det kommer till att lösa upp stopp i avlopp. Det går
              till genom att man med hjälp av en slang spolar rent avloppen med
              vatten som högtrycksspolas. Eftersom det endast är varmvatten som
              används så är det inte bara skonsamt för dina rör utan också för
              miljön.
            </p>
          </div>
        </div>
        <div className="max-w-[680px] flex flex-col gap-5 my-4 md:my-0 ">
          <ul className="grid grid-cols-2 gap-1 ">
            {pressureItems.map((item) => (
              <li
                key={item}
                className="col-span-1 w-full text-[18px] flex gap-2 items-center"
              >
                <span>
                  <PiCheckBold className="text-primary text-lg " />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-7 max-w-[344px] ">
          <CallContactButtons />
        </div>
      </div>
    </div>
  );
}

const pressureItems = [
  "Öppet dygnet runt.",
  "Hjälp för både privat personer och företag.",
  "Certifierade tekniker.",
  "På plats inom 2 timmar. ",
];
