import DescriptionPlumber from "@/components/Services/Plumber/DescriptionPlumber";
import FAQPlumber from "@/components/Services/Plumber/FAQPlumber";
import LocalPlumber from "@/components/Services/Plumber/LocalPlumber";
import PlumberServices from "@/components/Services/Plumber/PlumberServices";
import ServicesBanner from "@/components/Services/ServicesBanner";
import ContactUs from "@/components/Shared/ContactUs";
import React from "react";

export default function page() {
  return (
    <div>
      <ServicesBanner
        title="Rörmokare över hela Stockholm"
        breadcrumb="rörmokare sida"
        img="/services/plumber.png"
      />

      <DescriptionPlumber />
      <PlumberServices />
      <LocalPlumber />
      <FAQPlumber />
      <ContactUs />
    </div>
  );
}
