import DescriptionBuy from "@/components/Services/BuyForMe/DescriptionBuy";
import FAQBuy from "@/components/Services/BuyForMe/FAQBuy";
import Local from "@/components/Services/BuyForMe/Local";
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
        title="Handla Åt Mig - Tjänster"
        breadcrumb="Handla Åt Mig sida"
        img="/services/plumber.png"
      />

      <DescriptionBuy />
      <Local />
      <FAQBuy />
      <ContactUs />
    </div>
  );
}
