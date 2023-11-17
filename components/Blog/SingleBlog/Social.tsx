import CallContactButtons from "@/components/Shared/CallContactButtons";
import React from "react";

export default function Social() {
  return (
    <div className="max-w-layout mx-auto ">
      <div className="flex items-center justify-between mt-[90px] mb-[70px] ">
        <div className="flex gap-6">
          <p className="font-semibold text-[18px] ">Share this blog:</p>
        </div>
        <div className=""></div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center">
        <CallContactButtons />
      </div>
    </div>
  );
}
