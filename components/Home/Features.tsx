import Image from "next/image";
import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import { Button } from "@mui/material";

export default function Features() {
  return (
    <div className="max-w-layout mx-auto pt-20 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
        <div className="col-span-1 flex flex-col justify-center gap-12">
          <SectionTitle title="At Jour Eliten, we work quickly and efficiently" />
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
          <div className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-9">
            <Button className="bg-primary hover:bg-primary/80 text-white capitalize rounded-xl font-semibold text-[26px] py-[25px] px-[50px] ">
              Contact Us
            </Button>
            <Button className="bg-white hover:bg-primary/5 text-black capitalize rounded-xl font-semibold text-[26px] py-[25px] ">
              Call Us: 08-23 55 20
            </Button>
            {/* <p className="text-[26px] font-semibold ">Call Us: 08-23 55 20</p> */}
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative w-full h-[550px] md:h-[909px]">
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
    id: 2,
    content: "Call 08-23 55 20 or use the form.",
  },
  {
    id: 3,
    content: "The agent who answers will assist you promptly.",
  },
  {
    id: 4,
    content: "Emergency plumbing and electrical services, 24/7",
  },
  {
    id: 5,
    content: "Experienced and certified plumbers and electricians",
  },
];
