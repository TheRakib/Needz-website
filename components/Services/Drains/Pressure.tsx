"use client";
import CallContactButtons from "@/components/Shared/CallContactButtons";
import TextTitle from "@/components/Shared/TextTitle";
import Image from "next/image";
import React, { useState } from "react";
import { PiCheckBold } from "react-icons/pi";

export default function Pressure() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="px-2 max-w-layout mx-auto my-10 flex flex-col md:flex-row justify-between gap-4">
      <div className="flex flex-col gap-11 w-[350px] h-[444px] md:w-[680px] md:h-[594px] relative mx-auto">
        <Image src={"/services/plumbing-service.jpg"} alt="worker" fill />
      </div>
      <div className="max-w-[510px] flex flex-col justify-between">
        <div className=" flex flex-col gap-5 ">
          <TextTitle
            className="capitalize"
            title="Förebyggande Avloppsservice"
          />
          <div className="flex flex-col gap-5 text-[18px] text-black/70 ">
            <p className="text-left leading-7 tracking-tight">
              Högtrycksspolning är en miljövänlig och effektiv metod för att
              förebygga och åtgärda stopp i avloppet. Med avancerad teknik
              rengör vi dina rör snabbt och noggrant, förebygger framtida
              blockeringar och skyddar din fastighets infrastruktur. Vi är
              tillgängliga dygnet runt för både privatpersoner och företag, redo
              att ge snabb och professionell service. These sections aim to
              clearly communicate the services offered, the benefits of
              preventive maintenance, and the expertise of the technicians. The
              content is designed to assure potential clients of the quality and
              reliability of your plumbing services, echoing the professional
              tone and comprehensive details provided in your original
              electrician service content. If you need any further customization
              or additional sections, please let me know!
            </p>
          </div>
        </div>
        {/* <div className="max-w-[680px] flex flex-col gap-5 my-4 md:my-0 ">
          <ul className="grid grid-cols-2 gap-1 ">
            {pressureItems.map((item) => (
              <li
                key={item}
                className="col-span-1 w-full text-[18px] flex gap-2 items-center"
              >
                <span>
                  <PiCheckBold className="text-primary text-lg " />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="flex flex-col gap-7 max-w-[344px] ">
          <CallContactButtons />
        </div>
      </div>
    </div>
  );
}

// const pressureItems = [
//   "Öppet dygnet runt.",
//   "Hjälp för både privat personer och företag.",
//   "Certifierade tekniker.",
//   "På plats inom 2 timmar. ",
// ];
