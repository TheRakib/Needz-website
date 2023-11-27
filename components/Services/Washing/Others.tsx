import React from "react";
import AccordionPic from "../Plumber/AccordionPic";
import { Typography } from "@mui/material";

export default function Others() {
  return (
    <div className="max-w-layout mx-auto my-[120px] px-2">
      <AccordionPic
        items={serviceAccordions}
        className="lg:!flex-row-reverse"
        listStyles="!gap-7"
        title="Övriga tjänster"
      />
    </div>
  );
}

const serviceAccordions = [
  {
    id: 1,
    title: "Varför behöver jag en spolbil?",
    img: "/services/washing-machine/flusk-work.png",
    description: [
      "En spolbil är den mest effektiva och miljövänliga metoden för att bli av med blockeringar i avloppet. ",
      "Genom att använda högt vattenflöde och högt tryck rengör en spolbil ditt avloppssystem noggrant. Denna metod är skonsam mot miljön eftersom den bara använder varmt vatten utan onödiga kemikalier eller ämnen som kan vara skadliga.",
      "Genom att välja en spolbil får du inte bara en effektiv rensning av ditt avloppssystem utan bidrar även till att bevara miljön.",
    ],
  },
  {
    id: 2,
    title: "Rörfilmning - filma dina rör från insidan",
    img: "/services/washing-machine/Pipe-inspection.jpeg",
    description: [
      "Med våra avancerade rörfilmningsmetoder kan du nu inspektera dina rör från insidan.",
      "Genom att använda högteknologisk kamerautrustning filmar vi dina rör för att upptäcka eventuella problem, som sprickor, läckor eller blockeringar. Denna metod ger dig en tydlig insyn i rörens skick utan att behöva göra omfattande ingrepp.",
      "Med vår professionella rörfilmningstjänst får du snabb och noggrann inspektion för att säkerställa att ditt avloppssystem fungerar optimalt. Kontakta oss för en inspektion av dina rör och förebygg potentiella problem.",
    ],
  },
  {
    id: 3,
    title: "Vad menas med avvikelser?",
    img: "/services/washing-machine/deviations.jpeg",
    description: [
      `I avloppssammanhang avser "avvikelser" eventuella avvikelser eller problem som kan uppstå i ditt avloppssystem. `,
      "Det kan inkludera sprickor, läckor, eller andra oregelbundenheter som kan påverka prestanda och funktionalitet. Genom att förstå och åtgärda dessa avvikelser i tid kan du undvika större problem i framtiden.",
      "Vid en professionell inspektion kan vi identifiera och rapportera eventuella avvikelser för att säkerställa att ditt avloppssystem är i toppskick. Kontakta oss för mer information om avvikelser och hur vi kan hjälpa till.*",
    ],
  },

  {
    id: 4,
    title: "Slamavskiljning - ett alternativ till högtryckstvätt",
    img: "/services/washing-machine/Sludge-suction.jpeg",
    description: [
      "Slamavskiljning är ett effektivt alternativ till traditionell högtryckstvätt för att rensa avloppssystem. ",
      "Istället för att använda högt vattenflöde och tryck fokuserar slamavskiljning på att suga upp och avlägsna slam och sediment som kan ackumuleras i rören. Denna metod är särskilt användbar för att behandla problem som orsakas av organiskt material och avlagringar. ",
      "Med vår professionella slamavskiljningstjänst erbjuder vi ett skonsamt och effektivt sätt att återställa ditt avloppssystems kapacitet. Kontakta oss för att utforska fördelarna med slamavskiljning som ett alternativ till högtryckstvätt.",
    ],
  },
];
