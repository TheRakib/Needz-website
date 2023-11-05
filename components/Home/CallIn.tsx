import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function CallIn() {
  return (
    <div className="max-w-layout mx-auto mt-20">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="col-span-1 relative xl:w-[583px] md:h-[625px] w-[383px] h-[425px] mr-auto">
          <Image src={"/call-in.png"} alt="banner" fill />
        </div>
        <div className="col-span-1 flex flex-col justify-center gap-6">
          <h2 className="text-title font-bold">
            On call in all of Stockholm, 24/7!
          </h2>
          <p className="text-[18px] text-black/70 md:mr-36 leading-8 max-w-full">
            Jour Eliten AB offers plumbing and electrical on-call in Stockholm
            24 hours a day, but we also carry out planned work for private
            individuals and companies. We use experienced and certified plumbers
            and electricians.
          </p>

          <div className="flex flex-col gap-4 mr-10">
            <div className="">
              <Button
                className="capitalize py-7 px-[50px] text-[26px] bg-primary text-white rounded-lg"
                size="large"
              >
                More about us
              </Button>
            </div>
            <p className="text-[26px] font-semibold">Call Us: 08-23 55 20</p>
          </div>
        </div>
      </div>
    </div>
  );
}
