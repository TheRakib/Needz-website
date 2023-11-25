import FAQ from "@/components/Shared/FAQ";
import React from "react";

export default function FAQPlumber() {
  return (
    <div className="my-[120px]">
      <FAQ
        faqItems={faqItems}
        title="FAQ - Plumbers"
        variant="services"
        titleClass="mb-1 !text-center"
      />
    </div>
  );
}

const faqItems = [
  {
    id: 1,
    title: "What is the cost of a plumber?",
    description:
      "The cost varies depending on the type of work to be carried out and how long it takes. We at Jour 365 have a minimum charge of 2 hours, compared to many competitors who charge either a full or half day. We always offer a fixed and competitive price.",
  },
  {
    id: 2,
    title: "Is there a difference between a plumber and a plumber?",
    description:
      "The cost varies depending on the type of work to be carried out and how long it takes. We at Jour 365 have a minimum charge of 2 hours, compared to many competitors who charge either a full or half day. We always offer a fixed and competitive price.",
  },
  {
    id: 3,
    title: "What jobs can I do myself without hiring a plumber?",
    description:
      "The cost varies depending on the type of work to be carried out and how long it takes. We at Jour 365 have a minimum charge of 2 hours, compared to many competitors who charge either a full or half day. We always offer a fixed and competitive price.",
  },
  {
    id: 4,
    title: "How do I know that the plumbers I hire are certified?",
    description:
      "The cost varies depending on the type of work to be carried out and how long it takes. We at Jour 365 have a minimum charge of 2 hours, compared to many competitors who charge either a full or half day. We always offer a fixed and competitive price.",
  },
];
