import TextTitle from "@/components/Shared/TextTitle";
import React from "react";
import UserCard from "../UserCard";

export default function DescriptionWashing() {
  return (
    <div className="max-w-layout mx-auto mt-10 px-3 md:px-2">
      <div className=" flex flex-col md:flex-row justify-between gap-4 md:gap-0">
        <div className="max-w-[440px] lg:max-w-[660px] xl:max-w-[820px]">
          <TextTitle title="Description" />
          <div className="flex flex-col gap-6 mt-5 mb-11 text-black/70">
            <p className="">
              Have you got a blockage in the drain? Do not worry! Contact us at
              Jour Elite and we will come out with a washing machine for you.
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
    </div>
  );
}
