import TextTitle from "@/components/Shared/TextTitle";
import React from "react";
import UserCard from "../UserCard";

export default function DescriptionPlumber() {
  return (
    <div className="max-w-layout mx-auto mt-10 px-3 md:px-2">
      <div className=" flex flex-col md:flex-row justify-between gap-4 md:gap-0">
        <div className="max-w-[440px] lg:max-w-[660px] xl:max-w-[820px]">
          <TextTitle title="Description" />
          <div className="flex flex-col gap-6 mt-5 text-black/70">
            <p className="">
              All our plumbers are certified and authorized by safe water. They
              have experience and knowledge and can help you with all different
              types of plumbing systems, both in the home and for the business.
            </p>
            <p className="">
              We at Jour Eiten help you with everything from service or small
              repairs to the installation of completely new systems.
            </p>
            <p className="">
              All of our plumbers have broad skills, extensive experience and
              collaborate with you as a customer for the best possible results.
              Available throughout Stockholm!
            </p>
          </div>
        </div>
        <UserCard />
      </div>
    </div>
  );
}
