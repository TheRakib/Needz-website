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
  // {
  //   id: 1,
  //   title: "Ventilation",
  //   img: "/services/plumber/Ventilation.png",
  //   description: [
  //     "Mechanical exhaust ventilation – Med hjälp av en fläkt leds luften ut från huset. Luft kommer in genom små ventiler i väggen. Detta kallas F-systemet.",
  //     "Mekanisk tillförsel och utsugventilation – I detta system finns två fläktar, en som drar in luft och en som för ut luft. Detta kallas FT-systemet.",
  //     "Självdragsventilation – Detta är ett system utan fläktar, istället skapas en ventilationström med hjälp av inomhus- och utomhusluft.",
  //   ],
  // },
  // {
  //   id: 2,
  //   title: "Värme",
  //   img: "/services/plumber/Heat.png",
  //   description: [
  //     "Värme är en central del av ett behagligt och funktionellt boende. Genom olika värmesystem kan du skapa en optimal temperatur i ditt hem.",
  //     "Ett vanligt alternativ är centralvärme, där värmen distribueras genom ett nätverk av rör.",
  //     "Ytterligare alternativ inkluderar golvvärme och eldstäder för en mysig atmosfär. För att effektivt reglera värmen är det viktigt att förstå olika värmemetoder och deras påverkan på inomhusmiljön.",
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "Sanitation",
  //   img: "/services/plumber/Sanitation.png",
  //   description: [
  //     "Sanitetssystemet är kritiskt för att upprätthålla hälsan och välbefinnandet i ditt hem. Ett effektivt sanitetssystem inkluderar både vattenförsörjning och avloppshantering. Genom att använda moderna tekniker och högkvalitativa sanitetsprodukter kan du säkerställa en ren och trygg miljö.",
  //     "Rätt val av VVS-utrustning, som kranar och toaletter, spelar en nyckelroll i att skapa en sanitär och bekväm livsmiljö.",
  //     "Att förstå och implementera lämpliga sanitetslösningar är avgörande för att främja hälsa och hygien i hemmet.",
  //   ],
  // },
];
