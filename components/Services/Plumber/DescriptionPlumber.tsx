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
              Alla våra rörmokare är certifierade. De har erfarenhet och kunskap
              och kan hjälpa dig med alla typer av VVS-system, både i hemmet och
              för företag.
            </p>
            <p className="">
              Vi på Jour365 hjälper dig med allt från service eller
              småreparationer till installation av helt nya system.
            </p>
            <p className="">
              Alla våra rörmokare har bred kompetens, omfattande erfarenhet och
              samarbetar med dig som kund för bästa möjliga resultat.
              Tillgängliga i hela Stockholm!
            </p>
          </div>
        </div>
        <UserCard />
      </div>
    </div>
  );
}
