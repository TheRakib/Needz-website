import Description from "@/components/Services/Drains/Description";
import Pressure from "@/components/Services/Drains/Pressure";
import ServicesBanner from "@/components/Services/ServicesBanner";
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
    </div>
  );
}
