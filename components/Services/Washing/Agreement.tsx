import CallContactButtons from "@/components/Shared/CallContactButtons";
import SecondTitle from "@/components/Shared/SecondTitle";
import React from "react";

export default function Agreement() {
  return (
    <div className="max-w-layout mx-auto">
      <div className="flex flex-col gap-5">
        <SecondTitle
          title="Service agreement with washing machine"
          className="!text-center"
        />
        <div className="flex flex-col gap-7 text-[20px] max-w-[1005px] mx-auto ">
          <p className="text-center">
            Join Jour Elite&apos;s service agreement for exclusive benefits! Our
            partners gain priority service, discounts, a personal manager, and
            more—all for free.
          </p>
          <p className="text-secondary text-center">
            Contact Jour Elite now for details on our services and agreements.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-[70px]">
        <CallContactButtons />
      </div>
    </div>
  );
}
