import TextTitle from "@/components/Shared/TextTitle";
import React from "react";
import UserCard from "../UserCard";

export default function DescriptionPlumber() {
  return (
    <div className="max-w-layout mx-auto mt-10 px-3 md:px-2">
      <div className=" flex flex-col md:flex-row justify-between gap-4 md:gap-0">
        <div className="max-w-[440px] lg:max-w-[660px] xl:max-w-[820px]">
          <TextTitle title="Beskrivning" />
          <div className="flex flex-col gap-6 mt-5 text-black/70">
            <p className="">
              Vårt team består av kvalificerade elektriker i Stockholm, alla med
              gedigen erfarenhet och expertis inom en mängd olika elektriska
              ärenden. På needz är vi engagerade i att leverera exceptionell
              service och kvalitet, från standardreparationer till komplexa
              installationer.
            </p>
            <p className="">
              Vi är här för dig dygnet runt, alltid med kundens behov i fokus.
            </p>
          </div>
        </div>
        <UserCard />
      </div>
    </div>
  );
}
