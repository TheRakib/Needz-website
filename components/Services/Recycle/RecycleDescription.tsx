import React from "react";
import Details from "../Details";
import Image from "next/image";
import CallContactButtons from "@/components/Shared/CallContactButtons";
import TextTitle from "@/components/Shared/TextTitle";

export default function RecycleDescription() {
  return (
    <div className="max-w-layout mx-auto mb-[120px]">
      <Details
        {...detailsProps}
        containerClass="!flex-col-reverse md:!flex-row"
      />
      <div className=" flex flex-col lg:flex-row justify-between gap-[50px] mt-5 px-2">
        <div className="flex flex-col gap-11">
          <p className="text-black/70 text-[18px]">
            Vi erbjuder en omfattande återvinningstjänst som täcker en mängd
            materialtyper, inklusive papper, plast, metall, glas och organiskt
            avfall. Vårt team är utbildat i effektiva återvinningstekniker och
            strävar efter att minimera avfall och maximera återanvändning och
            återvinning.
          </p>
          <div className="w-[310px] h-[392px] md:w-[560px] lg:w-[580px] xl:w-[664px] md:h-[692px] ml-auto mr-auto lg:ml-0 relative ">
            <Image
              src={"/services/washing-machine/description.png"}
              alt={"description"}
              fill
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[45px]">
          <div className="flex flex-col gap-9">
            <TextTitle title="Pålitlig och Effektiv Återvinning" />
            <p className="text-black/70 text-[18px]">
              Prioritera miljön genom att välja vår professionella
              återvinningstjänst. Vi är engagerade i att erbjuda en pålitlig
              service som stöder dina miljömål, hjälper till att minska ditt
              koldioxidavtryck och främjar en kultur av hållbarhet inom ditt hem
              eller företag.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <TextTitle title="Engagemang för Miljöexcellens" />
            <div className="text-black/70 text-[18px] flex flex-col gap-7">
              <p>
                Vårt åtagande för miljöexcellens är kärnan i vårt arbete. Vi är
                dedikerade till att leverera en service som inte bara uppfyller,
                utan överträffar miljöstandarder, genom att ständigt sträva
                efter att förbättra våra metoder och bidra till en renare och
                grönare planet.
              </p>
              {/* <p>
                Vi är dedikerade till miljöansvar och fokuserar på hållbara
                metoder i alla våra tjänster.
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-[100px]">
        <CallContactButtons />
      </div>
    </div>
  );
}

const detailsProps = {
  description: {
    para1:
      "Vår återvinningstjänst är designad för att göra det enkelt och bekvämt för dig att bidra till en mer hållbar framtid. Vi hanterar allt från hämtning av återvinningsbart material till korrekt sortering och bortskaffande, säkerställande att dina avfallsmaterial återanvänds, återvinns eller komposteras på bästa möjliga sätt.      ",
    para2: ``,
  },
  title2: "Hållbara Återvinningslösningar",
  title2Class: "justify-between",
};
