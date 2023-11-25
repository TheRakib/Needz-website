import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function CallIn() {
  return (
    <div className="max-w-layout mx-auto my-[100px] px-2">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-12 lg:gap-12">
        <div className="col-span-1 relative xl:w-[583px] md:h-[625px] w-[303px]  md:w-[383px] h-[425px] mx-auto md:mr-auto">
          <Image src={"/call-in.png"} alt="banner" fill />
        </div>
        <div className="col-span-1 flex flex-col justify-center gap-6">
          <h2 className="text-[36px] md:text-title font-bold text-center md:text-left ">
            Jour i hela Stockholm, 24/7!
          </h2>
          <p className="md:text-[18px] text-[16px] text-black/70 lg:mr-36 leading-8 max-w-full text-center md:text-left">
            Jour Eliten AB offers plumbing and electrical on-call in Stockholm
            24 hours a day, but we also carry out planned work for private
            individuals and companies. We use experienced and certified plumbers
            and electricians.
          </p>

          <div className="">
            <div className="flex flex-col gap-4 items-center md:items-start md:mr-10">
              <Button
                className="capitalize py-7 px-[50px] text-[26px] bg-primary hover:bg-primary/80 text-white rounded-lg"
                size="large"
              >
                Mer om oss
              </Button>
              <Button
                className="capitalize py-7 text-[26px] bg-white hover:bg-primary/5 text-black rounded-lg"
                size="large"
              >
                Ring: 08-30 22 41
              </Button>
              {/* <p className="text-[26px] font-semibold">Ring: 08-30 22 41</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
