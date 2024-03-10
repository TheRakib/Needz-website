import FAQRecycle from "@/components/Services/Recycle/FaqRecycle";
import RecycleDescription from "@/components/Services/Recycle/RecycleDescription";
import ServicesBanner from "@/components/Services/ServicesBanner";
import ContactUs from "@/components/Shared/ContactUs";
import React from "react";

export default function page() {
  return (
    <div>
      <ServicesBanner
        title="Återvinningstjänster"
        breadcrumb="Sidan Återvinningstjänster"
        img="/services/recycle.jpg"
      />
      <RecycleDescription />
      <FAQRecycle />
      <ContactUs />
    </div>
  );
}
