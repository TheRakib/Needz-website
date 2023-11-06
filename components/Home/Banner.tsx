import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";

export default function Banner() {
  return (
    <div className="bg-[url('/home/banner0.png')] bg-cover bg-no-repeat h-[678px] max-w-maxLayout mx-auto ">
      <div className="bg-[url('/home/banner-mask.png')] bg-cover bg-no-repeat h-[678px] ">
        <div className="max-w-layout mx-auto mt-20 text-white h-full ">
          <div className="col-span-1 flex flex-col justify-center h-full items-center">
            <h2 className="text-title font-bold text-center">
              On call throughout Stockholm, <br /> around the clock!
            </h2>
            <p className=" md:mr-36 my-6 leading-6 max-w-[686px] text-center">
              Jour Eliten AB offers plumbing and electrical on-call in Stockholm
              24 hours a day, but we also carry out planned work for private
              individuals and companies. We use experienced and certified
              plumbers and electricians.
            </p>

            <div className="flex gap-4">
              <Button
                className="capitalize text-2xl py-7 px-12 rounded-xl bg-primary hover:bg-primary/70 text-white flex-nowrap whitespace-nowrap "
                size="large"
              >
                Book your Service
              </Button>
              <Button
                className="capitalize text-2xl py-7 px-16 rounded-xl bg-secondary hover:bg-secondary/70 text-white flex-nowrap whitespace-nowrap "
                size="large"
              >
                <BiPhoneCall className="mr-2" />
                08-235520
              </Button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {/* <div className="col-span-1 relative xl:w-[583px] md:h-[625px] w-[383px] h-[425px] ml-auto">
          <Image src={"/home/banner.png"} alt="banner" fill />
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
