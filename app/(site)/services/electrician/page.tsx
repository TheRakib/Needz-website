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
        title="Elektriker i Stockholm."
        breadcrumb="Elektriker sida"
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
      "Behöver du en elektriker i stockholmsområdet? Vi finns här för att hjälpa dig! Vi erbjuder skickliga tekniker för alla olika typer av ärenden.",
    para2: ` Vår jour har öppet dygnet runt, 365 dagar om året! Kontakta oss för hjälp omgående!`,
  },
  title2: "Pålitliga elektriker i Stockholm",
  description2Limit: 52,
  description2:
    "Har din jordfelsbrytare löst ut och maten i kylen riskerar att bli dålig? Eller har eluttaget till tv:n slutat fungera mitt i filmkvällen? Oavsett vad för problem du står inför så kan du lita på att vi har elektriker som är välkvalificerade för jobbet. Vi finns tillgängliga alla timmar på dygnet, oavsett när olyckan slår till så är vi redo att hjälpa dig.",
};
