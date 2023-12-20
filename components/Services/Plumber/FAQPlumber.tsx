import FAQ from "@/components/Shared/FAQ";
import React from "react";

export default function FAQPlumber() {
  return (
    <div className="my-[120px]">
      <FAQ
        faqItems={faqItems}
        title="FAQ - Rörmokare"
        variant="services"
        titleClass="mb-1 !text-center"
      />
    </div>
  );
}

const faqItems = [
  {
    id: 1,
    title: "Vad kostar en jour rörmokare?",
    description:
      "I och med att jourarbetet sker utanför ordinarie arbetstid är priset också något högre. Kontakta oss för att få ett kostnadsförslag.",
  },
  {
    id: 2,
    title: "Vad krävs för att VVS-företag ska vara auktoriserat?",
    description:
      "För att VVS-företaget ska vara auktoriserat måste de följa alla branschregler som satts upp av organisationen Säkert Vatten. Företaget måste ha en giltig ansvarsförsäkring och vara registrerat hos bolagsverket. Minst en heltidsanställd VVS-montör på företaget måste ha branschlegitimation.",
  },
  {
    id: 3,
    title: "Kan man utföra VVS-arbeten själv?",
    description:
      "Det finns ingen lag som förhindrar dig att utföra VVS-arbeten själv så länge du inte ska dra om rör eller avloppssystem. Är du inte helt säker på hur du ska göra kan det snabbt bli ett större problem. Därav är det ofta bättre att låta en VVS-montör utföra arbetet så att det blir gjort på ett korrekt sätt.",
  },
  // {
  //   id: 4,
  //   title: "Är det någon skillnad mellan VVS och rörmokare?",
  //   description:
  //     "Enligt lag måste det vara en certifierad rörmokare som drar om rör eller ändrar system. Det finns dock en del VVS-arbeten man kan utföra själv. Det är dock viktigt att man besitter den nödvändiga kunskapen som krävs för att utföra jobbet på ett säkert och korrekt sätt. Inte bara för att arbetet ska hålla måttet men också för att de flesta försäkringsbolag inte täcker olyckor som uppstått efter eget arbete.",
  // },
];
