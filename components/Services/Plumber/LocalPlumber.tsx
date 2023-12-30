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
            title="Rörmokare i stockholm - för privatpersoner och företag."
            className="!text-center"
          />
          <p className="text-[18px] text-black/70 text-center">
            På Jour365 erbjuder vi omfattande VVS-tjänster för både
            privapersoner och företag i hela stockholm. Våra erfarna och
            certifierade är redo att hjälpa dig med allt från minsre
            reparationer till större installationer.
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
    title: "Jour Elektriker",
    img: "/services/plumber/Ventilation.png",
    description: [
      "Elproblem kan uppstå vilken tid på dygnet som helst, och kräver ofta snabba och säkra lösningar. Våra certifierade elektriker är tillgängliga dygnet runt för att hantera alla typer av  elrelaterade problem. Vi hjälper dig med allt från strömavbrott, säkringar som gått till att hela huset står strömlöst.",
      " Vi strävar alltid efter att vara på plats inom 2h från det att vi fått in en bokning, så att du kan slappna av och luta dig tillbaka.",
      " Våra jourtjänster täcker allt från mindre reparationer till större installationer. Vi garanterar alltid ett kvalitativt och proffsigt arbete. ",
    ],
  },
  {
    id: 2,
    title: "VVS Service",
    img: "/services/plumber/Heat.png",
    description: [
      "Vi erbjuder ett brett utbud av VVS-tjänster. Vi utför både nya installationer samt underhåll och service av befintliga installationer. ",
      "Vi kan hjälpa till med allt från läckande kranar till nya rördragningar. ",
      "Alla våra rörmokare innehar intyg från säkert vatten och har fera års erfarenhet inom branschen. ",
    ],
  },
  {
    id: 3,
    title: "Stopp i Avlopp",
    img: "/services/plumber/Sanitation.png",
    description: [
      "Stopp i avlopp kan orsaka stora besvär i hemmet. Våra tekniker är utbildade för att snabbt och effektivt identifiera och åtgärda olika typer av stopp.",
      " Oavsett om det är stopp i ett hand fat eller i flera avlopp samtidigt så garanterar vi snabb och smidig service. ",
    ],
  },
];
