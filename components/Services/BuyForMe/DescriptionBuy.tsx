import TextTitle from "@/components/Shared/TextTitle";
import React from "react";
import UserCard from "../UserCard";

export default function DescriptionBuy() {
  return (
    <div className="max-w-layout mx-auto mt-10 px-3 md:px-2">
      <div className=" flex flex-col md:flex-row justify-between gap-4 md:gap-0">
        <div className="max-w-[440px] lg:max-w-[660px] xl:max-w-[820px]">
          <TextTitle title="Beskrivning" />
          <div className="flex flex-col gap-6 mt-5 text-black/70">
            <p className="">
              Vår &quot;Handla Åt Mig&quot;-service är den ultimata lösningen
              för dem som värdesätter tid och bekvämlighet. Vi erbjuder
              personlig shoppingassistans för alla typer av ärenden och inköp.
            </p>
            <p className="">
              Oavsett om du behöver dagligvaror, specialartiklar eller gåvor,
              garanterar vi en skräddarsydd service som uppfyller dina specifika
              behov med precision och omsorg.
            </p>
          </div>
        </div>
        <UserCard />
      </div>
    </div>
  );
}
