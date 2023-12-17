import FAQ from "@/components/Shared/FAQ";
import React from "react";

export default function FAQPlumber() {
  return (
    <div className="my-[120px]">
      <FAQ
        faqItems={faqItems}
        title="FAQ - Plumbers"
        variant="services"
        titleClass="mb-1 !text-center"
      />
    </div>
  );
}

const faqItems = [
  {
    id: 1,
    title: "Vad kostar en rörmokare?",
    description:
      "Kostnaden varierar beroende på typen av arbete som ska utföras och hur lång tid det tar. Vi på jour365 har en minimikostnad på 2 timmar, jämfört med många konkurrenter som tar antingen en hel eller halv dag. Vi erbjuder alltid ett fast och konkurrenskraftigt pris.",
  },
  {
    id: 2,
    title: "Hur vet jag att de rörmokare jag anlitar är certifierade?",
    description:
      "Du har som kund själv ansvar för att se till att det företag du anlitar är certifierade och har en aktuell branschlegitimation. Alla VVS-entreprenader och VVS-företag vi på Jour Eliten jobbar med har självklart rätt certifikat och branschlegitimation samt flera års erfarenhet. Vi jobbar ständigt med att hålla oss uppdaterade och väl informerade om ändringar och uppdateringar i branschen.",
  },
  {
    id: 3,
    title: "Vilka jobb kan jag göra själv utan att anlita en rörmokare?",
    description:
      "Det finns vissa mindre VVS-uppgifter som du kan utföra själv. Enkla saker som att byta ut en tätningsring eller fixa en läckande kran är exempel på projekt som du kanske kan hantera. Vi på jour365 delar gärna med oss av tips och råd för att hjälpa dig med mindre uppgifter. Dock är det viktigt att känna till dina egna färdigheter och gränser, och för mer komplicerade problem är det bäst att söka professionell hjälp.",
  },
  {
    id: 4,
    title: "Är det någon skillnad mellan VVS och rörmokare?",
    description:
      "Enligt lag måste det vara en certifierad rörmokare som drar om rör eller ändrar system. Det finns dock en del VVS-arbeten man kan utföra själv. Det är dock viktigt att man besitter den nödvändiga kunskapen som krävs för att utföra jobbet på ett säkert och korrekt sätt. Inte bara för att arbetet ska hålla måttet men också för att de flesta försäkringsbolag inte täcker olyckor som uppstått efter eget arbete.",
  },
];
