import AgreementDescription from "@/components/Services/Agreement/AgreementDescription";
import ServicesBanner from "@/components/Services/ServicesBanner";
import ContactUs from "@/components/Shared/ContactUs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Service Agreement",
  // description: "Blog page",
};

export default function page() {
  return (
    <div>
      <ServicesBanner
        title="Service Agreement"
        breadcrumb="Service agreement page "
        img="/services/agreement/banner.png"
      />
      <AgreementDescription />
      <ContactUs />
    </div>
  );
}
