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
            till kompletta renoveringar.
          </p>
        </div>
        <AccordionPic items={serviceAccordions} withBullets />
      </div>
      <div className="mt-[120px] flex flex-col gap-[70px]">
        <div className="text-[20px] max-w-[1005px] mx-auto">
          <p className="text-center">
            Våra erfarna och certifierade rörmokare kan hantera alla typer av
            VVS-problem du kan ha, oavsett hur stora eller små de är.
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
      "Akuta elektriska problem kräver snabba och säkra lösningar. Våra certifierade elektriker är tillgängliga dygnet runt för att hantera alla typer av elrelaterade nödsituationer.",
      "Vi erbjuder snabb service för elavbrott, säkringsproblem, och andra akuta elproblem för att säkerställa din säkerhet och bekvämlighet.",
      "Vår jourtjänst täcker allt från små hushållsreparationer till stora elektriska nödlägen, alltid med professionell expertis och snabb respons.",
    ],
  },
  {
    id: 2,
    title: "VVS Service",
    img: "/services/plumber/Heat.png",
    description: [
      "Vi erbjuder ett brett utbud av VVS-tjänster, från installation och underhåll till reparationer och uppgraderingar.",
      "Vårt team av kvalificerade rörmokare hanterar allt från läckande kranar till större rörinstallationer och renoveringar.",
      "Vi använder modern utrustning och metoder för att säkerställa högsta kvalitet och effektivitet i alla våra VVS-projekt.",
    ],
  },
  {
    id: 3,
    title: "Stopp i Avlopp",
    img: "/services/plumber/Sanitation.png",
    description: [
      "Stopp i avlopp kan orsaka stora besvär i hemmet. Våra experter är specialiserade på att snabbt identifiera och åtgärda alla typer av avloppsblockeringar.",
      "Vi använder avancerade tekniker för att effektivt rensa blockeringar och förebygga framtida problem.",
      "Oavsett om det gäller ett litet handfat eller ett stort avloppssystem, garanterar vi en noggrann och hållbar lösning.",
    ],
  },
];
