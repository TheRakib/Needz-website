import FAQ from "@/components/Shared/FAQ";
import React from "react";

export default function FAQBuy() {
  return (
    <div className="my-[120px]">
      <FAQ
        faqItems={faqItems}
        title="FAQ"
        variant="services"
        titleClass="mb-1 !text-center"
      />
    </div>
  );
}

const faqItems = [
  {
    id: 1,
    title: "Vilka typer av varor kan ni köpa åt mig?    ",
    description:
      "Oavsett om det gäller livsmedel, hushållsprodukter, elektronik eller personliga artiklar, kan vårt team handla och leverera en bred variation av produkter baserade på dina exakta önskemål.",
  },
  {
    id: 2,
    title: "Hur snabbt kan ni leverera mina inköp?",
    description:
      "Vi är stolta över vår snabba och effektiva leveranstjänst, med målet att leverera dina inköp så snabbt som möjligt, ofta samma dag eller enligt den tidpunkt som passar dig bäst.",
  },
  {
    id: 3,
    title: "Hur säkerställer ni kvaliteten på de köpta varorna?",
    description:
      "Vårt team består av erfarna shoppingassistenter som noggrant väljer varor av högsta kvalitet och ser till att alla produkter är i bästa skick innan leverans.",
  },

  {
    id: 4,
    title: "Kan jag göra specialbeställningar eller önskemål?",
    description:
      "Absolut, vi specialiserar oss på att tillgodose specialbeställningar och individuella önskemål, oavsett hur unika de kan vara. Vi strävar efter att uppfylla alla dina förväntningar med en skräddarsydd och personlig service.",
  },
];
