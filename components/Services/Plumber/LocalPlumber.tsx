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
            På jour365 erbjuder vi omfattande VVS-tjänster till både husägare
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
      "Mechanical exhaust ventilation – Med hjälp av en fläkt leds luften ut från huset. Luft kommer in genom små ventiler i väggen. Detta kallas F-systemet.",
      "Mekanisk tillförsel och utsugventilation – I detta system finns två fläktar, en som drar in luft och en som för ut luft. Detta kallas FT-systemet.",
      "Självdragsventilation – Detta är ett system utan fläktar, istället skapas en ventilationström med hjälp av inomhus- och utomhusluft.",
    ],
  },
  {
    id: 2,
    title: "Värme",
    img: "/services/plumber/Heat.png",
    description: [
      "Värme är en central del av ett behagligt och funktionellt boende. Genom olika värmesystem kan du skapa en optimal temperatur i ditt hem.",
      "Ett vanligt alternativ är centralvärme, där värmen distribueras genom ett nätverk av rör.",
      "Ytterligare alternativ inkluderar golvvärme och eldstäder för en mysig atmosfär. För att effektivt reglera värmen är det viktigt att förstå olika värmemetoder och deras påverkan på inomhusmiljön.",
    ],
  },
  {
    id: 3,
    title: "Sanitation",
    img: "/services/plumber/Sanitation.png",
    description: [
      "Sanitetssystemet är kritiskt för att upprätthålla hälsan och välbefinnandet i ditt hem. Ett effektivt sanitetssystem inkluderar både vattenförsörjning och avloppshantering. Genom att använda moderna tekniker och högkvalitativa sanitetsprodukter kan du säkerställa en ren och trygg miljö.",
      "Rätt val av VVS-utrustning, som kranar och toaletter, spelar en nyckelroll i att skapa en sanitär och bekväm livsmiljö.",
      "Att förstå och implementera lämpliga sanitetslösningar är avgörande för att främja hälsa och hygien i hemmet.",
    ],
  },
];
