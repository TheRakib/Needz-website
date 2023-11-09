"use client";
import TextTitle from "@/components/Shared/TextTitle";
import Image from "next/image";
import React, { useState } from "react";
import { PiCheckBold } from "react-icons/pi";

export default function Pressure() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const words = text.split(" ");
  const displayText = showMore ? text : words.slice(0, 50).join(" ");
  return (
    <div className="px-2 max-w-layout mx-auto my-10 flex flex-col md:flex-row justify-between gap-4">
      <div className="flex flex-col gap-11 w-[350px] h-[444px] md:w-[680px] md:h-[594px] relative mx-auto">
        <Image src={"/services/drains-description.png"} alt="worker" fill />
      </div>
      <div className="max-w-[510px] flex flex-col gap-11">
        <div className=" flex flex-col gap-5 ">
          <TextTitle title="High Pressure" />
          <div className="flex flex-col gap-5 text-[18px] text-black/70 ">
            <p className="text-center md:text-left">
              FLUSHING Sewer flushing through high pressure is a gentle and
              environmentally friendly method that quickly solves all kinds of
              blockages in drains. The flushing is carried out in a gentle
              manner to avoid damage to the sewage system and effectively rinses
              away all sludge collected in the drain. Since only hot water is
              used, no chemicals are needed for cleaning. For larger stoppages,
              a flush truck may be a better option.
            </p>
          </div>
        </div>
        <div className="max-w-[680px] flex flex-col gap-5 ">
          <ul className="grid grid-cols-2 gap-1 ">
            {pressureItems.map((item) => (
              <li
                key={item}
                className="col-span-1 w-full text-[18px] flex gap-2 items-center"
              >
                {" "}
                <span>
                  <PiCheckBold className="text-primary text-lg " />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const pressureItems = [
  "Open Twentyfour Seven",
  "Individuals and companies",
  "Certified experts",
  "On site within 1 hour",
];

const text = ` Are you looking for a reliable and efficient electrical company
for your home or business electrical installations? Then
you've come to the right place! We at Jour Eliten understand
the importance of an electrical installation being safe and
reliable and how important it is that the electricity works as it
should, at home,  Then
you;ve come to the right place! Then
you've come to the right place!`;
