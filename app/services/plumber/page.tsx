import DescriptionPlumber from "@/components/Services/Plumber/DescriptionPlumber";
import PlumberServices from "@/components/Services/Plumber/PlumberServices";
import ServicesBanner from "@/components/Services/ServicesBanner";
import React from "react";

export default function page() {
  return (
    <div>
      <ServicesBanner
        title="Plumbers throughout Stockholm"
        breadcrumb="Plumber page"
        img="/services/plumber.png"
      />
      <DescriptionPlumber />
      <PlumberServices />
    </div>
  );
}
