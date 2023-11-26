"use client";
import React, { useState } from "react";
import TextTitle from "../Shared/TextTitle";
import Image from "next/image";

export default function CertificateDetails() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const words = text.split(" ");
  const displayText = showMore ? text : words.slice(0, 50).join(" ");
  return (
    <div className="px-2 max-w-layout mx-auto my-10 flex flex-col md:flex-row justify-between gap-4">
      <div className="flex flex-col gap-11 w-[350px] h-[444px] md:w-[680px] md:h-[594px] relative mx-auto">
        <Image src={"/services/electrician.png"} alt="worker" fill />
      </div>
      <div className="max-w-[510px] flex flex-col gap-11">
        <div className=" flex flex-col gap-5 ">
          <TextTitle title="Certifierade elektriker" />
          <div className="flex flex-col gap-5 text-[18px] text-black/70 ">
            <p className="text-center md:text-left">
              På Jour 365 är fokus på kunden. Våra erfarna elektriker är alla
              certifierade och auktoriserade av Elsäkerhetsverket i Sverige.
            </p>
          </div>
        </div>
        <div className="max-w-[680px] flex flex-col gap-5 ">
          <TextTitle title="Elektriska installationer i Stockholm: För företag och privatpersoner " />
          <div className="flex flex-col gap-5 text-[18px] text-black/70 ">
            <p>
              {displayText}
              {!showMore && (
                <span
                  className="text-primary underline cursor-pointer"
                  onClick={toggleShowMore}
                >
                  {" Läs mer"}
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const text = `Letar du efter ett pålitligt och effektivt elektriskt företag för installationer i ditt hem eller företag? Då har du kommit till rätt plats! Vi på Jour 365 förstår vikten av att en elektrisk installation är säker och pålitlig samt hur viktigt det är att elen fungerar som den ska, hemma eller på jobbet. Då har du kommit till rätt plats!`;
