import ServicesBanner from "@/components/Services/ServicesBanner";
import React from "react";

export default function page() {
  return (
    <div>
      <ServicesBanner
        title="Order a washing machine - we drive all over Stockholm"
        breadcrumb="Washing machine page"
        img="/services/washing-machine.png"
        titleClass="!text-center max-w-[763px]"
      />
    </div>
  );
}
