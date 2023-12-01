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
    title: "Finns det någon skillnad mellan en rörmokare och en VVS-tekniker?",
    description:
      "Ja, det finns en viss skillnad. En rörmokare fokuserar främst på att installera och reparera rör och avloppssystem, medan en VVS-tekniker (Värme, Ventilation och Sanitet) har ett bredare ansvarsområde som inkluderar värmesystem och ventilation. Båda yrkena kräver expertis inom VVS-området, och vi på jour365 har specialister som kan hantera olika behov.",
  },
  {
    id: 3,
    title: "Vilka jobb kan jag göra själv utan att anlita en rörmokare?",
    description:
      "Det finns vissa mindre VVS-uppgifter som du kan utföra själv. Enkla saker som att byta ut en tätningsring eller fixa en läckande kran är exempel på projekt som du kanske kan hantera. Vi på jour365 delar gärna med oss av tips och råd för att hjälpa dig med mindre uppgifter. Dock är det viktigt att känna till dina egna färdigheter och gränser, och för mer komplicerade problem är det bäst att söka professionell hjälp.",
  },
  {
    id: 4,
    title: "Hur vet jag att de rörmokare jag anlitar är certifierade?",
    description:
      "Det är viktigt att säkerställa att de rörmokare du anlitar är certifierade och kvalificerade. Vid jour365 arbetar våra rörmokare under noga övervakning och är certifierade inom VVS-branschen. Du kan också begära att se deras certifikat eller licenser för att bekräfta deras legitimitet. Vi strävar alltid efter att tillhandahålla pålitliga och professionella rörmokartjänster, och vår certifiering är ett tecken på vårt åtagande för högsta standard.",
  },
];
