import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="max-w-layout mx-auto mt-20">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="col-span-1 flex flex-col justify-between">
          <h2 className="text-title font-bold">
            On call throughout Stockholm, <br /> around the clock!
          </h2>
          <p className="text-sm text-black/70 md:mr-36 my-6 leading-6">
            Jour Eliten AB offers plumbing and electrical on-call in Stockholm
            24 hours a day, but we also carry out planned work for private
            individuals and companies. We use experienced and certified plumbers
            and electricians.
          </p>
          <div className="flex gap-4 mt-8 mb-9">
            <Image
              src={"/home/icon1.png"}
              alt="achievement"
              height={104}
              width={104}
            />
            <Image
              src={"/home/icon2.png"}
              alt="achievement"
              height={104}
              width={104}
            />
            <Image
              src={"/home/icon3.png"}
              alt="achievement"
              height={104}
              width={104}
            />
          </div>
          <div className="flex gap-4 w-full mr-10">
            <Button
              className="capitalize py-5 px-7 text-xl bg-primary text-white w-[40%] "
              size="large"
            >
              Book a service
            </Button>
            <Button
              className="capitalize py-5 px-7 text-xl bg-secondary text-white w-[40%] "
              size="large"
            >
              contact us
            </Button>
          </div>
        </div>
        <div className="col-span-1 relative w-[583px] h-[625px] ml-auto">
          <Image src={"/home/banner.png"} alt="banner" fill />
        </div>
      </div>
    </div>
  );
}
