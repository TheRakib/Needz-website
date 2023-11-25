"use client";
import React from "react";
import FAQ from "../Shared/FAQ";
import { Button } from "@mui/material";
import { BiPhoneCall } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function BannerFAQ() {
  const router = useRouter();
  return (
    <div className="max-w-layout mx-auto mt-[50px]">
      <FAQ
        variant="services"
        titleClass="mb-6 !text-center"
        faqItems={faqItems}
      />
      <div className="flex items-center justify-center gap-7 flex-col md:flex-row mt-20">
        <Button
          className="capitalize text-xl md:text-2xl md:py-7 md:px-12 px-10 py-4 rounded-xl bg-primary hover:bg-primary/70 text-white flex-nowrap whitespace-nowrap "
          size="large"
        >
          <BiPhoneCall className="mr-2" />
          Call 08-302241
        </Button>
        <Button
          onClick={() => router.push("/contact-us")}
          className="capitalize text-xl md:text-2xl md:py-7 md:px-12 px-10 py-4 rounded-xl bg-white hover:bg-primary/5 text-black flex-nowrap whitespace-nowrap "
          size="large"
        >
          Kontakta oss
        </Button>
      </div>
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
