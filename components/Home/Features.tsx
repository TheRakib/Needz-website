import Image from "next/image";
import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import { Button } from "@mui/material";

export default function Features() {
  return (
    <div className="max-w-layout mx-auto pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
        <div className="col-span-1 flex flex-col justify-center gap-12">
          <SectionTitle title="At Jour Eliten, we work quickly and efficiently" />
          <ul className="flex flex-col gap-6">
            {featureItems.map((item) => (
              <li key={item.id} className="flex items-center gap-6">
                <span className="text-primary bg-primary/20 text-2xl py-4 px-7 rounded-full">
                  {item.id}
                </span>
                <span className="text-2xl font-semibold">{item.content}</span>
              </li>
            ))}
          </ul>
          <div className="w-full flex items-center gap-9">
            <Button className="bg-primary hover:bg-primary/80 text-white capitalize rounded-xl font-semibold text-[26px] py-[25px] px-[50px] ">
              Contact Us
            </Button>
            <p className="text-[26px] font-semibold ">Call Us: 08-23 55 20</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative w-full h-[909px]">
            <Image src={"/home/features.png"} alt="features" fill />
          </div>
        </div>
      </div>
    </div>
  );
}

const featureItems = [
  {
    id: 1,
    content: "Every Customers Special",
  },
  {
    id: 1,
    content: "Call 08-23 55 20 or use the form.",
  },
  {
    id: 1,
    content: "The agent who answers will assist you promptly.",
  },
  {
    id: 1,
    content: "Emergency plumbing and electrical services, 24/7",
  },
  {
    id: 1,
    content: "Experienced and certified plumbers and electricians",
  },
];
