import AboutContact from "@/components/about-contact";
import DescriptionBuy from "@/components/Services/BuyForMe/DescriptionBuy";
import FAQBuy from "@/components/Services/BuyForMe/FAQBuy";
import Local from "@/components/Services/BuyForMe/Local";
import ServicesBanner from "@/components/Services/ServicesBanner";
import React from "react";

export default function page() {
  return (
    <div>
      <ServicesBanner
        title="Handla Åt Mig - Tjänster"
        breadcrumb="Handla Åt Mig sida"
        img="/services/buy-for-me.jpg"
      />

      <DescriptionBuy />
      <Local />
      <FAQBuy />
      <AboutContact />
    </div>
  );
}
