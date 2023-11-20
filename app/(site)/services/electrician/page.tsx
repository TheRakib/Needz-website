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
      <ServicesBanner
        title="Electrician in Stockholm"
        breadcrumb="Electrician page"
        img="/services/banner.png"
      />
      <Details {...detailsProps} />
      <CertificateDetails />
      <ServicesDetails />
      <BannerFAQ />
      <LocalElectrician />
      <ServicesContactUs />
    </div>
  );
}

const detailsProps = {
  description: {
    para1: "Need an electrician in Stockholm? We&apos;re here to help!",
    para2: ` We offer expert electrical installations and repairs for
    businesses and homes, and we&apos;re available 365 days a year.
    Contact us and we will help you immediately!`,
  },
  title2: "Trustworthy Electrical Installers in Stockholm",
  description2Limit: 52,
  description2:
    "Have you considered installing solar cells? Or has the earth fault breaker suddenly tripped and now the food is in the freezer and going bad? No matter what your problem is, you can trust that our electricians are well qualified for the job and we are available around the clock for consultation. Or has the earth fault breaker suddenly tripped and now the food is in the freezer and going bad? No matter what your problem is,",
};
