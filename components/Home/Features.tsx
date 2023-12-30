"use client";
import Image from "next/image";
import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Features() {
  const router = useRouter();
  return (
    <div className="max-w-layout mx-auto my-[120px] px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
        <div className="col-span-1 flex flex-col justify-center gap-12">
          <SectionTitle title="På Jour365 arbetar vi snabbt och effektivt." />
          <ul className="flex flex-col gap-6">
            {featureItems.map((item) => (
              <li key={item.id} className="flex items-center gap-6">
                <span className="text-primary bg-primary/20 text-xl md:text-2xl py-2 px-4 md:py-4 md:px-7 rounded-full">
                  {item.id}
                </span>
                <span className="text-xl md:text-2xl font-semibold">
                  {item.content}
                </span>
              </li>
            ))}
          </ul>
          <div className="w-full flex flex-col lg:flex-row items-center gap-2 lg:gap-9">
            <Link href={"/contact-us"}>
              <Button
                onClick={() => router.push("contact-us")}
                className="bg-primary hover:bg-primary/80 text-white capitalize rounded-xl font-semibold text-[26px] py-[25px] px-[50px] "
              >
                Kontakta oss
              </Button>
            </Link>
            <Button className="bg-white hover:bg-primary/5 text-black capitalize rounded-xl font-semibold text-[26px] py-[25px] ">
              <a href="tel:08302241">Ring: 08-302241</a>
            </Button>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative w-full h-[550px] md:h-[909px]">
            <Image src={"/home/features.jpg"} alt="features" fill />
          </div>
        </div>
      </div>
    </div>
  );
}

const featureItems = [
  {
    id: 1,
    content: "På Jour365 värderar vi kundnöjdhet.",
  },
  {
    id: 2,
    content: "du som kund är alltid i fokus!.",
  },
  {
    id: 3,
    content: " Vi är kontaktbara 24/7 på telefon för alla sorters ärenden.",
  },
  {
    id: 4,
    content: "Alla våra tekniker är certifierade och erfarna.",
  },
  {
    id: 5,
    content:
      "Vi har lång erfarenhet inom jour och strävar alltid efter att lösa problemen snabbt, kvalitativt och effektivt. E13",
  },
];
