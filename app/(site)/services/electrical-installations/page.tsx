import Description from "@/components/Services/ElectricalInstallations/Description";
import ServicesBanner from "@/components/Services/ServicesBanner";
import ContactUs from "@/components/Shared/ContactUs";
import React from "react";

export default function page() {
  return (
    <div>
      <ServicesBanner
        title="Elinstallationer"
        breadcrumb="Sidan för Elinstallationer"
        img="/services/electrical-installations/banner.png"
      />
      <Description />
      <ContactUs />
    </div>
  );
}
