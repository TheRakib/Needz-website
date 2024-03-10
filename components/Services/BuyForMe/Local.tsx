import SecondTitle from "@/components/Shared/SecondTitle";
import React from "react";
import CallContactButtons from "@/components/Shared/CallContactButtons";
import AccordionPic from "../Plumber/AccordionPic";

export default function Local() {
  return (
    <div className="max-w-layout mx-auto px-2">
      <div className="">
        <div className="flex flex-col gap-5 items-center justify-center mb-[90px]  max-w-[712px] mx-auto">
          <SecondTitle title="Anpassade Lösningar" className="!text-center" />
          <p className="text-[18px] text-black/70 text-center">
            Vi förstår att varje kunds behov är unikt. Därför erbjuder vi
            anpassade shoppingtjänster som är flexibla, effektiva och
            tillförlitliga. Vårt team är expert på att hitta exakt vad du
            behöver, när du behöver det, och levererar direkt till din dörr med
            oöverträffad noggrannhet och effektivitet.
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
    title: "Pålitlig och Effektiv Service",
    img: "/services/buy-for-me1.jpg",
    description: [
      "Prioritera din bekvämlighet med vår tillförlitliga och snabba leveranstjänst. Vi är dedikerade till att erbjuda en smidig och bekymmersfri upplevelse, vilket gör det möjligt för dig att njuta av mer tid och mindre stress. Våra specialiserade medarbetare hanterar dina önskemål med största professionalitet och diskretion.",
    ],
  },
  {
    id: 2,
    title: "Exceptionell Kundupplevelse",
    img: "/services/buy-for-me2.jpg",
    description: [
      `Vårt engagemang för enastående service är kärnan i allt vi gör. Vi strävar efter att leverera en personlig service som överträffar dina förväntningar, med en tydlig kommunikation och anpassning till dina specifika preferenser. Välj vår "Handla Åt Mig"-tjänst för en oöverträffad kundupplevelse som sätter dina behov i första hand.`,
    ],
  },
];
