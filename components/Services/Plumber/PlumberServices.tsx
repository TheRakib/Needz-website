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
            title="Pålitliga rörmokare dygnet runt i hela stockholm! Vi finns här oavsett vad du behöver hjälp med och oavsett vilken tid på dygnet. "
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
      "Har du ett el-problem som inte kan vänta? Våra certifierade elektriker finns tillgängliga dygnet runt för att hjälpa dig med alla olika sorters problem som kan uppkoma. Vi garanterar snabb service och proffsigt bemötande i varje ärende. ",
  },
  {
    id: 2,
    title: "Värmepumpar",
    img: "/home/services/plumber/icon2.svg",
    description:
      "Vi har stor erfarenhet av flera olika typer av värmepumpar och finns alltid på plats när du behöver oss. Vi hjälper till både med installationer av nya värmepumpar samt serviec av redan befintliga pumpar. Har du problem varmvattnet? Kontakta oss så kommer vi och hjälper dig redan idag! ",
  },
  {
    id: 3,
    title: "Radiatorer och element",
    img: "/home/services/plumber/icon3.svg",
    description:
      "Får du ingen värme från dina element? Eller kanske är ett rum iskallt medans de övriga är som de ska? Då har vi tekniker som kan hjälpa dig! Oavset vilken typ av element du har så har vi rätt tekniker för jobbet. ",
  },
  {
    id: 4,
    title: "Stopp i Avlopp",
    img: "/home/services/plumber/icon4.svg",
    description:
      "Har du fått stopp i avloppen? Våra spolbilar är snabbt på plats för att hjälpa dig lokalisera och lösa problemet, så smidigt och effektivt som möjligt! ",
  },
  {
    id: 5,
    title: "Rörservice",
    img: "/home/services/plumber/icon5.svg",
    description:
      "Har du problem med rör som behöver repareras? Eller kanske vill  underhålla de i förebyggande syfte? Oavsett hur situationen ser ut så har vi erfarna rörmokare som hjälper dig med allt från ny rördragning till underhåll och reparation av befintliga rör. Glöm inte att vi också erbjuder avtal för både företag och BRF:er som ger dig rabatt på samtliga av våra tjänster.",
  },
  {
    id: 6,
    title: "Planering",
    img: "/home/services/plumber/icon6.svg",
    description:
      "Har du planer på att installera nya rör? Kanske behöver du dra avlopp till det nya badrummet uppe på vinden? Eller kanske vill du flytta på diskhon och behöver därmed även flytta på avloppet? Vi på needz hjälper dig att både dra nya rör och dra om befintliga. Ring oss så hjälper vi dig boka in en tid!",
  },
  {
    id: 7,
    title: "VVS Service",
    img: "/home/services/plumber/icon7.svg",
    description:
      "Vi erbjuder ett brett utbud av VVS-tjänster. Oavsett behov så har vi rörmokare redo för att hjälpa just dig. Vårt team av kvalificerade rörmokare har flera års erfarenhet och är redo dygnet runt föratt hkälpa dig med alla sorters problem som kan uppstå. Vi garanterar alltid ett proffsigt och kvalitativt arbete - inget jobb är för litet eller stort för oss! ",
  },
];
