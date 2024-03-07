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
          <TextTitle title="Certifierade snickare" />
          <div className="flex flex-col gap-5 text-[18px] text-black/70 ">
            <p className="text-center md:text-left">
              Hos needz sätter vi alltid kunden först och strävar efter maximal
              kundnöjdhet och högsta kvalitet. Våra snickare är inte bara
              hantverksmässigt skickliga, de är också certifierade och följer
              branschens bästa praxis, så att du kan känna dig trygg med ditt
              val av snickare.
            </p>
          </div>
        </div>
        <div className="max-w-[680px] flex flex-col gap-5 ">
          <TextTitle title="Snickeritjänster i Stockholm - För företag och privatpersoner" />
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

const text = `Söker du en tillförlitlig snickerifirma som kan vara snabbt på plats, både i hemmet och på företaget? Vi på needz förstår vikten av att ha tillgång till kvalificerade snickare som snabbt kan vara på plats. Vårt team av erfarna snickare står redo att bistå med allt från mindre reparationer till större byggprojekt, så att du alltid kan lita på att ditt snickeriarbete utförs perfekt.`;
