import Image from "next/image";
import React from "react";
import SectionTitle from "../Shared/SectionTitle";

export default function Emergencies() {
  return (
    <div className="bg-primary">
      <div className="max-w-layout mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1 flex flex-col gap-4">
            <SectionTitle
              title="Plumbing and electrical emergencies? 
                We're here to help!"
              className="text-white font-semibold leading-tight"
            />
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
            <p className="text-[35px] text-white ">
              Call Us: <span className="font-bold">08-23 55 20</span>
            </p>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
}
