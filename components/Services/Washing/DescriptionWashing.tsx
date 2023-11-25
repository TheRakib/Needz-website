import TextTitle from "@/components/Shared/TextTitle";
import React from "react";
import UserCard from "../UserCard";
import Image from "next/image";
import CallContactButtons from "@/components/Shared/CallContactButtons";

export default function DescriptionWashing() {
  return (
    <div className="max-w-layout mx-auto mt-10 px-3 md:px-2">
      <div className=" flex flex-col md:flex-row justify-between gap-4 md:gap-0">
        <div className="max-w-[440px] lg:max-w-[660px] xl:max-w-[820px]">
          <TextTitle title="Description" />
          <div className="flex flex-col gap-6 mt-5 mb-11 text-black/70 text-[18px]">
            <p className="">
              Have you got a blockage in the drain? Do not worry! Kontakta oss
              at Jour Elite and we will come out with a washing machine for you.
            </p>
            <p className="">
              A stop in the drain can come very untimely. Sometimes it is enough
              to flush the drain yourself or use an old housewife&apos;s remedy.
              In some cases, a plumber can clear water traps and pipes.
            </p>
            <p className="">
              In the majority of cases, however, more force is required to
              release the stop. Then it is recommended that you call for a
              washing machine.
            </p>
          </div>
          <TextTitle title="Blocked sewage? Get it cleared quickly and efficiently with our expert plumbers." />
        </div>
        <UserCard />
      </div>
      <div className=" flex flex-col lg:flex-row justify-between gap-[50px]  mt-5">
        <div className="flex flex-col gap-11">
          <p className="text-black/70 text-[18px]">
            There are many reasons why stoppages occur. In the sink and slop, it
            is common for food grease and food residues to get stuck and
            accumulate in the drain, especially further down the pipes where it
            is colder and the grease solidifies.
          </p>
          <div className="w-[310px] h-[392px] md:w-[560px] lg:w-[580px] xl:w-[664px] md:h-[692px] mx-auto relative ">
            <Image
              src={"/services/washing-machine/description.png"}
              alt={"description"}
              fill
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-9 text-black/70 text-[18px]">
            <p>
              Clogs in the toilet can be caused by flushing paper that is not
              meant to be flushed down and that is stuck somewhere. Wet wipes
              and sanitary products do not belong in your toilet but should be
              thrown in the bin.
            </p>
            <p>
              In the shower, it is common for hair and dirt to get stuck, which
              eventually clog the pipes. Regardless of what caused the stop, no
              problem is too small or too big for us at Jourelite.
            </p>
            <p>
              If you have blockages in the same drain often or the water
              pressure has been affected in more than one pipe, you can be sure
              that a flushing truck is needed.
            </p>
            <p className="font-semibold text-black">
              Not sure if you need a washing machine? Ring for a quick
              consultation.
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-10">
            <CallContactButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
