import FAQ from "@/components/Shared/FAQ";
import React from "react";

export default function FAQRecycle() {
  return (
    <div className="my-[120px]">
      <FAQ
        faqItems={faqItems}
        title="FAQ - Återvinningstjänster"
        variant="services"
        titleClass="mb-1 !text-center"
      />
    </div>
  );
}

const faqItems = [
  {
    id: 1,
    title: "Vilka material kan ni hantera i er återvinningstjänst?",
    description:
      "Vår service omfattar en bred variation av återvinningsbara material, inklusive papper, kartong, plast, glas, metall och elektronik, samt organiskt avfall för kompostering.",
  },
  {
    id: 2,
    title: "Hur bidrar er tjänst till miljön?",
    description:
      "Genom att använda vår återvinningstjänst bidrar du till att minska deponiavfall, sänka utsläppen av växthusgaser, spara energi och bevara naturresurser, vilket alla bidrar till en hälsosammare planet.",
  },
  {
    id: 3,
    title: "Hur ofta kan ni hämta återvinningsbart material?",
    description:
      "Vi erbjuder flexibla hämtningsplaner som kan anpassas efter dina behov, oavsett om det är en engångsservice eller regelbundna hämtningar för ditt hem eller företag.",
  },

  {
    id: 4,
    title: "Hur förbereder jag mitt material för återvinning?",
    description:
      "Vi rekommenderar att du sorterar ditt material i förväg när det är möjligt, men vårt team kan också assistera med sortering och förberedelse för att säkerställa att allt material hanteras korrekt och effektivt.",
  },
];
