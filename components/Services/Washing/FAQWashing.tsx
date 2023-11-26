import FAQ from "@/components/Shared/FAQ";
import React from "react";

export default function FAQWashing() {
  return (
    <div className="my-[120px]">
      <FAQ
        faqItems={faqItems}
        title="Vanliga frågor - Tvätt"
        variant="services"
        titleClass="mb-2 !text-center"
      />
    </div>
  );
}

const faqItems = [
  {
    id: 1,
    title: "Vad är priset för att beställa en högtryckstvätt från er?",
    description:
      "Vi tillämpar alltid ett fast pris när du beställer en högtryckstvätt från oss och givetvis applicerar vi också rotavdrag i de fall där det är tillämpligt. Priserna varierar beroende på arbetets omfattning. Ring oss, så skickar vi dig en offert omedelbart!",
  },
  {
    id: 2,
    title: "Vad händer när jag har beställt en högtryckstvätt?",
    description:
      "När du har beställt en högtryckstvätt från oss på Jour 365 kommer vårt team att koordinera en lämplig tid för att utföra arbetet. Vi säkerställer att du får en bekräftelse på din beställning och att våra erfarna tekniker kommer utrustade med den nödvändiga utrustningen för att genomföra tvättningen effektivt. Vi strävar efter att göra hela processen smidig och enkel för dig, från beställning till slutfört arbete. Kontakta oss om du har ytterligare frågor om vad som händer efter att du har beställt en högtryckstvätt.",
  },
  {
    id: 3,
    title: "Går det att spola avloppet själv?",
    description:
      "Ja, i vissa fall är det möjligt att själv försöka spola avloppet. Enkla metoder kan inkludera att använda avloppsrensare eller andra hemmafixningsprodukter. Vi rekommenderar dock försiktighet och att undvika användning av aggressiva kemikalier som kan skada rören. Om problemet kvarstår eller om du är osäker på hur du ska gå tillväga, är det bäst att kontakta oss på Jour 365 för professionell rådgivning och hjälp.",
  },
  {
    id: 4,
    title: "Hur fungerar avloppsrensning?",
    description:
      "Beskrivning: Avloppsrensning innebär att använda högt vattenflöde och högt tryck för att effektivt rengöra avloppsrören. Vårt erfarna team på Jour 365 använder specialutrustning, inklusive högtryckstvättar, för att skickligt spola avloppet och eliminera eventuella blockeringar, avlagringar eller andra hinder. Genom att använda denna metod säkerställer vi att ditt avloppssystem återställs till optimal funktion. Kontakta oss för mer information om hur avloppsrensning fungerar och hur det kan gynna ditt avloppssystem.",
  },
];
