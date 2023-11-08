import CertificateDetails from "@/components/Services/CertificateDetails";
import Details from "@/components/Services/Details";
import ServicesBanner from "@/components/Services/ServicesBanner";
import ServicesDetails from "@/components/Services/ServicesDetails";
import FAQ from "@/components/Shared/FAQ";
import React from "react";

export default function page() {
  return (
    <div>
      <ServicesBanner />
      <Details />
      <CertificateDetails />
      <ServicesDetails />
      <FAQ
        variant="services"
        titleClass="mb-6 !text-center"
        faqItems={faqItems}
      />
    </div>
  );
}

const faqItems = [
  {
    id: 1,
    title: "What is the price for an electrician?",
    description:
      "When you order an electrician from us, we have a minimum charge of 2 hours, which is lower than many competitors who have a minimum charge of half a day. Depending on the type of work to be carried out, how long it takes and if materials need to be purchased, the price may vary. We always offer competitive and fixed prices.",
  },
  {
    id: 2,
    title: "Is it possible to run an electric cable yourself?",
    description:
      "When you order an electrician from us, we have a minimum charge of 2 hours, which is lower than many competitors who have a minimum charge of half a day. Depending on the type of work to be carried out, how long it takes and if materials need to be purchased, the price may vary. We always offer competitive and fixed prices.",
  },
  {
    id: 3,
    title: "Is it allowed to replace the electrical outlet yourself?",
    description:
      "When you order an electrician from us, we have a minimum charge of 2 hours, which is lower than many competitors who have a minimum charge of half a day. Depending on the type of work to be carried out, how long it takes and if materials need to be purchased, the price may vary. We always offer competitive and fixed prices.",
  },
  {
    id: 4,
    title: "How much does it cost to rewire the electricity in an older house?",
    description:
      "When you order an electrician from us, we have a minimum charge of 2 hours, which is lower than many competitors who have a minimum charge of half a day. Depending on the type of work to be carried out, how long it takes and if materials need to be purchased, the price may vary. We always offer competitive and fixed prices.",
  },
  {
    id: 5,
    title: "What is the cost of changing the power plant?",
    description:
      "When you order an electrician from us, we have a minimum charge of 2 hours, which is lower than many competitors who have a minimum charge of half a day. Depending on the type of work to be carried out, how long it takes and if materials need to be purchased, the price may vary. We always offer competitive and fixed prices.",
  },
  {
    id: 6,
    title: "How often should I replace my electrical cables?",
    description:
      "When you order an electrician from us, we have a minimum charge of 2 hours, which is lower than many competitors who have a minimum charge of half a day. Depending on the type of work to be carried out, how long it takes and if materials need to be purchased, the price may vary. We always offer competitive and fixed prices.",
  },
  {
    id: 7,
    title: "Is it necessary to have grounded sockets?",
    description:
      "When you order an electrician from us, we have a minimum charge of 2 hours, which is lower than many competitors who have a minimum charge of half a day. Depending on the type of work to be carried out, how long it takes and if materials need to be purchased, the price may vary. We always offer competitive and fixed prices.",
  },
  {
    id: 8,
    title: "Do I have any rights if an electrician makes a mistake?",
    description:
      "When you order an electrician from us, we have a minimum charge of 2 hours, which is lower than many competitors who have a minimum charge of half a day. Depending on the type of work to be carried out, how long it takes and if materials need to be purchased, the price may vary. We always offer competitive and fixed prices.",
  },
];
