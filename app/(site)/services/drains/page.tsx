import Description from "@/components/Services/Drains/Description";
import Pressure from "@/components/Services/Drains/Pressure";
import ServicesBanner from "@/components/Services/ServicesBanner";
import ContactUs from "@/components/Shared/ContactUs";
import React from "react";

export default function drains() {
  return (
    <div>
      <ServicesBanner
        title="Stopp i avlopp"
        breadcrumb="Stopp i avlopp sida"
        img="/services/drains.png"
      />
      <Description />
      <Pressure />
      <ContactUs />
    </div>
  );
}
