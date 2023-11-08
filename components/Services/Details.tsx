import React from "react";
import TextTitle from "../Shared/TextTitle";
import Image from "next/image";
import { Button } from "@mui/material";
import { FiPhoneCall } from "react-icons/fi";

export default function Details() {
  return (
    <div className="max-w-layout mx-auto my-10 px-2">
      <div className="flex flex-col md:flex-row gap-4 justify-between ">
        <div className="flex flex-col gap-11">
          <div className="max-w-[820px] flex flex-col gap-5 ">
            <TextTitle title="Description" />
            <div className="flex flex-col gap-5 text-[18px] text-black/70 ">
              <p>Need an electrician in Stockholm? We&apos;re here to help!</p>
              <p>
                We offer expert electrical installations and repairs for
                businesses and homes, and we&apos;re available 365 days a year.
                Contact us and we will help you immediately!
              </p>
            </div>
          </div>
          <div className="max-w-[680px] flex flex-col gap-5 ">
            <TextTitle title="Trustworthy Electrical Installers in Stockholm" />
            <div className="flex flex-col gap-5 text-[18px] text-black/70 ">
              <p>
                Have you considered installing solar cells? Or has the earth
                fault breaker suddenly tripped and now the food is in the
                freezer and going bad? No matter what your problem is, you can
                trust that our electricians are well qualified for the job and
                we are available around the clock for consultation.{" "}
                <span className="text-primary underline">Read more</span>
              </p>
            </div>
          </div>
        </div>
        {/* -------card */}
        <div className="w-[350px] md:w-[370px] mx-auto h-[399px] bg-primary rounded-md flex flex-col justify-between items-center p-[30px] md:p-[10px] lg:p-[30px] ">
          <div className="flex flex-col items-center w-full">
            <Image
              src={"/services/avatar.jpg"}
              alt="avatar"
              height={142}
              width={142}
              className="rounded-full overflow-hidden"
            />
            <p className="text-[22px] text-white font-semibold capitalize text-center mt-4 ">
              John Miller K.
            </p>
            <p className="text-center text-white/70 mt-1 mb-3">
              Sales Excutive
            </p>
            <div className="w-full h-[1px] bg-white/70 " />
          </div>
          <Button className="bg-white capitalize rounded-2xl text-primary hover:bg-white/50 text-[20px] md:text-[20px] lg:text-[20px] py-5 px-11 md:px-3 lg:px-11 flex gap-2">
            <FiPhoneCall />
            <span className="md:tracking-tighter lg:tracking-normal">
              Call 08 – 23 55 20
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
