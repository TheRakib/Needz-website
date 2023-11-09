import Description from "@/components/Services/Drains/Description";
import Pressure from "@/components/Services/Drains/Pressure";
import ServicesBanner from "@/components/Services/ServicesBanner";
import ContactUs from "@/components/Shared/ContactUs";
import React from "react";

export default function drains() {
  return (
    <div>
      <ServicesBanner
        title="Stop in drains"
        breadcrumb="Stop in drains page"
        img="/services/drains.png"
      />
      <Description />
      <Pressure />
      <ContactUs helperText="Fill out the form for a free quote. You can also call 08-23 55 20 between 08:00 and 16:00 on weekdays. On-call and urgent matters 24 hours a day, 365 days a year." />
    </div>
  );
}
