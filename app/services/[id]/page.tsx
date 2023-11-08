import BannerFAQ from "@/components/Services/BannerFAQ";
import CertificateDetails from "@/components/Services/CertificateDetails";
import Details from "@/components/Services/Details";
import LocalElectrician from "@/components/Services/LocalElectrician";
import ServicesBanner from "@/components/Services/ServicesBanner";
import ServicesContactUs from "@/components/Services/ServicesContactUs";
import ServicesDetails from "@/components/Services/ServicesDetails";
import React from "react";

export default function page() {
  return (
    <div>
      <ServicesBanner />
      <Details />
      {/* 
      <CertificateDetails />
      <ServicesDetails />
      <BannerFAQ />
      <LocalElectrician />
      <ServicesContactUs /> */}
    </div>
  );
}
