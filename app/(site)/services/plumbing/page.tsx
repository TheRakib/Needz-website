import AboutContact from "@/components/about-contact";
import Description from "@/components/Services/Drains/Description";
import Pressure from "@/components/Services/Drains/Pressure";
import ServicesBanner from "@/components/Services/ServicesBanner";
import React from "react";

export default function drains() {
  return (
    <div>
      <ServicesBanner
        title="Stopp i Avlopp - VVS-tjänster"
        breadcrumb="Stopp i avlopp sida"
        img="/services/plumbing.jpg"
      />
      <Description />
      <Pressure />
      <AboutContact />
    </div>
  );
}
