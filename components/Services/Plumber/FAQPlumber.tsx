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
      "Vi erbjuder marknadsmässiga och konkurrenskraftiga priser på alla våra tjänster. ",
  },
  {
    id: 2,
    title: "Vad krävs för att VVS-företag ska vara auktoriserat?",
    description:
      "För att ett VVS-företag skall vara certifierat måste de följa alla branschregler som satts upp av organisationen säkert vatten. Alla våra rörmokare innehar detta certifikat och har flera års erfarenhet inom branschen. ",
  },
  {
    id: 3,
    title: "Kan man utföra VVS-arbeten själv?",
    description:
      "Det finns ingen lag som hindrar privatpersoner från att själva utföra vvs-arbeten, så länge det inte gäller avlopss",
  },
];
