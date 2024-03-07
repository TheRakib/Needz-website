import Description from "@/components/Services/Drains/Description";
import Pressure from "@/components/Services/Drains/Pressure";
import ServicesBanner from "@/components/Services/ServicesBanner";
import ContactUs from "@/components/Shared/ContactUs";
import React from "react";

// Avloppsstopp
// Rörmokare för stopp i avlopp
// Avloppsrensning
// Akut avloppsstopp
// Avloppsservice
// Lösa avloppsstopp
// Professionell avloppsrengöring
// Avloppsstopp lösningar
// Hjälp med stopp i avlopp
// Effektiv avloppsrensning

export default function drains() {
  return (
    <div>
      <ServicesBanner
        title="Stopp i Avlopp - VVS-tjänster"
        breadcrumb="Stopp i avlopp sida"
        img="/services/drains.png"
      />
      <Description />
      <Pressure />
      <ContactUs />
    </div>
  );
}
