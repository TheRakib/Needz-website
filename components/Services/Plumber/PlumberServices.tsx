"use client";
import SecondTitle from "@/components/Shared/SecondTitle";
import Image from "next/image";
import React, { useState } from "react";

type ServiceCardItem = {
  id: number;
  title: string;
  img: string;
  description: string;
};

const TEXT_LENGTH = 140;
export default function PlumberServices() {
  const [expandedDescriptionId, setExpandedDescriptionId] = useState<
    number | null
  >(null);

  const toggleDescription = (id: number) => {
    if (expandedDescriptionId === id) {
      setExpandedDescriptionId(null);
    } else {
      setExpandedDescriptionId(id);
    }
  };

  const renderDescription = (item: ServiceCardItem) => {
    const isExpanded = expandedDescriptionId === item.id;
    return isExpanded
      ? item.description
      : item.description.slice(0, TEXT_LENGTH) +
          (item.description.length > TEXT_LENGTH ? "..." : "");
  };

  return (
    <div className="max-w-maxLayout bg-primary text-white py-[90px] my-[120px] mx-auto px-2">
      <div className="max-w-layout mx-auto">
        <div className="">
          <p className="text-[18px] capitalize text-center text-white/70">
            VVS-tjänster Vi Erbjuder
          </p>
          <SecondTitle
            title="Pålitliga rörmokare, här för att hjälpa dig när du behöver det som mest. Vi anpassar våra tjänster för att möta dina unika behov, dygnet runt."
            className="max-w-[1000px] mx-auto tracking-tighter !leading-[54px] "
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mt-[50px] mx-auto">
          {serviceCardItems.map((item) => (
            <div
              key={item.id}
              className="col-span-1 min-h-[368px] max-w-[287px] min-w-[300px] mx-auto flex flex-col justify-between p-[30px] bg-white text-black rounded-xl"
            >
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <div className="flex h-16 w-16 p-3 shadow-lg shadow-primary/70 rounded-full">
                    <Image
                      src={item.img}
                      width={44}
                      height={44}
                      // className="object-cover w-full h-full rounded-full"
                      alt="service-icon"
                    />
                  </div>
                </div>
                <h3 className="text-[24px] font-semibold">{item.title}</h3>
              </div>
              <div className="flex flex-col">
                <p className="text-black/70 max-w-[217px]">
                  {renderDescription(item)}
                </p>
                {item.description.length > TEXT_LENGTH && (
                  <span
                    className="text-primary underline whitespace-nowrap cursor-pointer"
                    onClick={() => toggleDescription(item.id)}
                  >
                    {expandedDescriptionId === item.id
                      ? "Visa mindre"
                      : "Läs mer"}
                  </span>
                )}
              </div>
            </div>
          ))}
          <a
            href="tel:08302241"
            className="col-span-1 min-h-[368px] flex flex-col items-center justify-center p-[30px] text-white rounded-xl text-[30px] "
          >
            <span className="text-center">Ring:</span>
            <span className="font-semibold text-center">08-302241</span>
          </a>
        </div>
      </div>
    </div>
  );
}

const serviceCardItems = [
  {
    id: 1,
    title: "Jour Elektriker",
    img: "/home/services/plumber/icon1.svg",
    description:
      "Behöver du akut hjälp med dina elektriska installationer? Våra certifierade elektriker finns tillgängliga dygnet runt för att hantera alla typer av elrelaterade nödsituationer. Snabb service och professionell hantering av alla typer av elproblem garanteras.",
  },
  {
    id: 2,
    title: "Värmepumpar",
    img: "/home/services/plumber/icon2.svg",
    description:
      "Vi servar och installerar alla typer av värmepumpar. Att välja en värmepump som värmekälla i ditt hem är en investering, inte bara för din plånbok. Får du inte varmt vatten i fastigheten? Då är det troligen din varmvattenberedare som skapar problem för dig.",
  },
  {
    id: 3,
    title: "Radiatorer och element",
    img: "/home/services/plumber/icon3.svg",
    description:
      "Är alla dina radiatorer kalla? Eller fungerar de felfritt i vissa rum men inte alls i andra? Då behöver du en VVS-tekniker! Får du inte varmt vatten i fastigheten? Då är det troligen din varmvattenberedare som skapar problem för dig.",
  },
  {
    id: 4,
    title: "Stopp i Avlopp",
    img: "/home/services/plumber/icon4.svg",
    description:
      "Upplever du problem med stopp i dina avlopp? Våra erfarna rörmokare är experter på att snabbt identifiera och åtgärda stopp i avloppsrör, vilket säkerställer en smidig och effektiv lösning. Vi använder avancerad teknik för att diagnostisera och rensa blockeringar utan att skada dina rör.",
  },
  {
    id: 5,
    title: "Rörservice",
    img: "/home/services/plumber/icon5.svg",
    description:
      "Underhåll eller reparationer av rören? Inget jobb är för litet eller för stort för oss. Vi erbjuder också service- och underhållsavtal för bostäder. Får du inte varmt vatten i fastigheten? Då är det troligen din varmvattenberedare som skapar problem för dig.",
  },
  {
    id: 6,
    title: "Planering",
    img: "/home/services/plumber/icon6.svg",
    description:
      "Har du planer på att installera nya rör? Behöver du uppgradera ditt värmesystem eller dra ett avlopp till din nya vind? Vi hjälper dig från start till mål! Får du inte varmt vatten i fastigheten? Då är det troligen din varmvattenberedare som skapar problem för dig.",
  },
  {
    id: 7,
    title: "VVS Service",
    img: "/home/services/plumber/icon7.svg",
    description:
      "Vi erbjuder ett brett utbud av VVS-tjänster för alla dina behov. Vårt team av kvalificerade rörmokare är utrustade med de senaste verktygen för att hantera installation, underhåll och reparationer effektivt och professionellt. Inget jobb är för stort eller för litet för oss.",
  },
];
