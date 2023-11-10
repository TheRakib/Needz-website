import SecondTitle from "@/components/Shared/SecondTitle";
import React from "react";

export default function PlumberServices() {
  return (
    <div className="max-w-maxLayout bg-primary text-white py-[90px] my-[120px] mx-auto">
      <div className="max-w-layout mx-auto">
        <p className="text-[18px] capitalize text-center text-white/70">
          Plumbing Services We Offer
        </p>
        <SecondTitle
          title="Trusted plumbers, here to help when you need us most. We adapt our services to meet your unique needs, 24/7."
          className="max-w-[1000px] mx-auto tracking-tighter !leading-[54px] "
        />
      </div>
    </div>
  );
}
