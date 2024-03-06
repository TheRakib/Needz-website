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
              På needz har vi alltid kunden i fokus. Vi värdesätter
              kundnöjdhet och kvalité. Därför har alla våra elfirmor intyg från
              Elsäkerhetsverket, så att du som kund kan känna att du är i trygga
              händer.
            </p>
          </div>
        </div>
        <div className="max-w-[680px] flex flex-col gap-5 ">
          <TextTitle title="El-installationer i stockholm - För företag och privatpersoner" />
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

const text = `Är du på jakt efter en pålitlig elfirma som kan vara snabbt på plats, antingen hemma eller på jobbet? Då har du hittat rätt! Vi på needz förstår vikten av att ha en pålitlig elektriker för alla sina elbehov, som kan vara snabbt på plats när det behövs. Därför har vi alltid erfarna elektriker redo att hjälpa till - så att du alltid kan vara säker på att elen fungerar som den ska när du behöver det. `;
