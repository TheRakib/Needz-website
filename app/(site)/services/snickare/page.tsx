import BannerFAQ from "@/components/Services/BannerFAQ";
import CertificateDetails from "@/components/Services/CertificateDetails";
import Details from "@/components/Services/Details";
import LocalElectrician from "@/components/Services/LocalElectrician";
import ServicesBanner from "@/components/Services/ServicesBanner";
import ServicesContactUs from "@/components/Services/ServicesContactUs";
import ServicesDetails from "@/components/Services/ServicesDetails";
import React from "react";

// Certifierade elektriker
// Elektriska tjänster
// Akut elektrisk hjälp
// Elektriska reparationer
// Elektriska installationer
// 24/7 elektrisk assistans
// Erfarna elektriska lösningar
// Kvalificerade elektriker
// Auktoriserade elektriker
// Elektriskt underhåll
// Elektrisk säkerhet
// Elektrisk kabeldragning
// Felsökning av elektriska problem
// Bostadselektriker
// Kommersiella elektriska tjänster
// Elektriska entreprenörer nära mig
// Elektriker i [Ditt stad/område]
// Reaktion på elektriska nödsituationer
// Elektriskt hantverk"

export default function page() {
  return (
    <div>
      <ServicesBanner
        title="Snickeriarbeten i Stockholm."
        breadcrumb="Snickare sida"
        img="/services/banner.png"
      />
      <Details {...detailsProps} />
      <CertificateDetails />
      <ServicesDetails />
      <BannerFAQ />
      <LocalElectrician />
      <ServicesContactUs />
    </div>
  );
}

const detailsProps = {
  description: {
    para1:
      "Behöver du en snickare i Stockholmsområdet? Vi är här för att assistera dig! Vi tillhandahåller skickliga snickare för alla typer av projekt, stora som små.",
    para2: `Vår service är tillgänglig dygnet runt, året runt! Kontakta oss för omedelbar hjälp med dina snickeribehov!`,
  },
  title2: "Pålitliga snickare i Stockholm",
  description2Limit: 52,
  description2:
    "Behöver du hjälp med att installera nya köksskåp, eller kanske bygga en terrass? Oavsett dina snickeribehov kan du lita på att våra välutbildade snickare står redo att leverera arbete av högsta kvalitet. Vi är tillgängliga när som helst – redo att hjälpa dig med ditt projekt.",
};
