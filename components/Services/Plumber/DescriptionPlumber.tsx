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
              Vi har ett flertal rörmokare inom stockholmsområdet som alla
              innehar säkert vatten. De harlång erfarenhet och bred kunskap inom
              flera olika typer av ärenden. Vi på Jour365 hjälper dig med allt
              från service av befintliga installationer till nya installationer.
            </p>
            <p className="">
              För oss är alltid kunden i fokus och därför ser vi alltid till att
              leverera med både bra service och kvalité.
            </p>
            <p className="">
              Tveka inte på att höra av dig, vi finns tillgängliga i hela
              stockholm dygnet runt!
            </p>
          </div>
        </div>
        <UserCard />
      </div>
    </div>
  );
}
