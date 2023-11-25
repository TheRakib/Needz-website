import FAQ from "@/components/Shared/FAQ";
import React from "react";

export default function FAQWashing() {
  return (
    <div className="my-[120px]">
      <FAQ
        faqItems={faqItems}
        title="FAQ - Washing Machine"
        variant="services"
        titleClass="mb-2 !text-center"
      />
    </div>
  );
}

const faqItems = [
  {
    id: 1,
    title: "What is the price for ordering a washing machine from you?",
    description:
      "We always have a fixed price when you order a washing machine from us and, of course, also apply a root deduction in cases where it is applicable. Prices vary depending on the time for the work. Ring and we'll send you a quote right away!",
  },
  {
    id: 2,
    title: "What happens when I have ordered a washing machine?",
    description:
      "The cost varies depending on the type of work to be carried out and how long it takes. We at Jour Eliten have a minimum charge of 2 hours, compared to many competitors who charge either a full or half day. We always offer a fixed and competitive price.",
  },
  {
    id: 3,
    title: "Is it possible to flush the drain yourself?",
    description:
      "The cost varies depending on the type of work to be carried out and how long it takes. We at Jour Eliten have a minimum charge of 2 hours, compared to many competitors who charge either a full or half day. We always offer a fixed and competitive price.",
  },
  {
    id: 4,
    title: "How does drain flushing work?",
    description:
      "The cost varies depending on the type of work to be carried out and how long it takes. We at Jour Eliten have a minimum charge of 2 hours, compared to many competitors who charge either a full or half day. We always offer a fixed and competitive price.",
  },

  {
    id: 5,
    title: "How long do you flush the drains?",
    description:
      "The cost varies depending on the type of work to be carried out and how long it takes. We at Jour Eliten have a minimum charge of 2 hours, compared to many competitors who charge either a full or half day. We always offer a fixed and competitive price.",
  },

  {
    id: 6,
    title: "How many times do I need to flush the drain?",
    description:
      "The cost varies depending on the type of work to be carried out and how long it takes. We at Jour Eliten have a minimum charge of 2 hours, compared to many competitors who charge either a full or half day. We always offer a fixed and competitive price.",
  },
];
