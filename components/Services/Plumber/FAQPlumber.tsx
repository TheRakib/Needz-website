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
    title: "Hur snabbt kan era elektriker vara på plats?",
    description:
      "Våra elektriker strävar efter att vara på plats inom 2 timmar efter din förfrågan. Vi erbjuder snabb och effektiv service i hela Stockholm, dygnet runt, för att säkerställa att dina elbehov hanteras omgående.      ",
  },
  {
    id: 2,
    title: "Vilka typer av elektriska tjänster erbjuder ni?",
    description:
      "Vi erbjuder ett brett spektrum av tjänster, inklusive felsökning, reparationer, installation av nya elsystem, underhåll av befintliga installationer, uppgraderingar av elpaneler, och mycket mer. Våra certifierade elektriker hanterar alla uppdrag, stora som små.",
  },
  {
    id: 3,
    title: "Är era elektriker certifierade?",
    description:
      "Absolut, alla våra elektriker är fullständigt certifierade och uppfyller alla branschstandarder. De har den kunskap och erfarenhet som krävs för att säkerställa säker och effektiv hantering av alla dina elektriska behov.",
  },

  {
    id: 4,
    title: "Vad gör jag om jag har ett elnödläge?",
    description:
      "Vid elnödlägen, kontakta oss omedelbart. Vårt team av jourkvalificerade elektriker är tillgängliga 24/7 för att ge dig snabb hjälp. Vi hanterar allt från strömavbrott till mer komplexa elproblem och säkerställer att ditt system är säkert och funktionellt.",
  },
];
