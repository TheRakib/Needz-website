import DescriptionPlumber from "@/components/Services/Plumber/DescriptionPlumber";
import FAQPlumber from "@/components/Services/Plumber/FAQPlumber";
import LocalPlumber from "@/components/Services/Plumber/LocalPlumber";
import ServicesBanner from "@/components/Services/ServicesBanner";
import ContactUs from "@/components/Shared/ContactUs";
import React from "react";

export default function page() {
  return (
    <div>
      <ServicesBanner
        title="Elektriker över hela Stockholm"
        breadcrumb="Elektriker sida"
        img="/services/electrical.jpg"
      />

      <DescriptionPlumber />
      {/* <PlumberServices /> */}
      <LocalPlumber />
      <FAQPlumber />
      <ContactUs />
    </div>
  );
}
