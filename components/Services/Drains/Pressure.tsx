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
          <TextTitle title="Högtrycksspolning" />
          <div className="flex flex-col gap-5 text-[18px] text-black/70 ">
            <p className="text-left leading-7 tracking-tight">
              Spolning av avlopp med högtryck är en skonsam och miljövänlig
              metod som snabbt löser alla typer av blockeringar i avlopp.
              Spolningen utförs på ett varsamt sätt för att undvika skador på
              avloppssystemet och effektivt sköljer bort allt slam som samlats i
              avloppet. Eftersom endast varmt vatten används, behövs inga
              kemikalier för rengöring. För större stopp kan en spolbil vara ett
              bättre alternativ.
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
  "Öppet dygnet runt",
  "Privatpersoner och företag",
  "Certifierade experter",
  "på plats inom 1 timme",
];
