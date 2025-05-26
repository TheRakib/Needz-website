import AboutContact from "@/components/about-contact";
import Description from "@/components/Services/ElectricalInstallations/Description";
import ServicesBanner from "@/components/Services/ServicesBanner";
import React from "react";

export default function page() {
  return (
    <div>
      <ServicesBanner
        title="Flytt- och Leveranstjänster"
        breadcrumb="Sidan för Leveranstjänster"
        img="/services/move-delivery.jpg"
      />
      <Description />
      <AboutContact />
    </div>
  );
}
