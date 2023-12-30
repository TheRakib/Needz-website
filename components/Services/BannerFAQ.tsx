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
        <Button size="large">
          <a
            className="capitalize text-xl md:text-2xl md:py-7 md:px-12 px-10 py-4 rounded-xl bg-primary hover:bg-primary/70 text-white flex gap-2 items-center flex-row flex-nowrap whitespace-nowrap "
            href="tel:08302241"
          >
            <BiPhoneCall className="ml-2" />
            <span className="tracking-tight">Ring: 08-302241</span>
          </a>
        </Button>
        <Button
          onClick={() => router.push("/contact-us")}
          className="capitalize text-xl md:text-2xl md:py-7 md:px-12 px-10 py-4 rounded-xl bg-white hover:bg-primary/5 text-black flex-nowrap whitespace-nowrap "
          size="large"
        >
          Kontakta ossb
        </Button>
      </div>
    </div>
  );
}

const faqItems = [
  {
    id: 1,
    title: "Vad kostar en elektriker?",
    description: "Vi erbjuder marknadsenliga och konkurrenskraftiga priser.",
  },
  {
    id: 2,
    title: "När kan in vara på plats?",
    description:
      "Vi strävar alltid efter att vara på plats inom 2 timmar från det att vi mottagit ditt ärende. ",
  },
  {
    id: 3,
    title: "Är det nödvändigt med jordade eluttag?",
    description:
      "Jordade eluttag är en säkerhetsåtgärd och i många fall ett måste. Ring oss så hjälper vi dig!",
  },
];
