import React from "react";
import Details from "../Details";
import Image from "next/image";
import CallContactButtons from "@/components/Shared/CallContactButtons";
import TextTitle from "@/components/Shared/TextTitle";

export default function Description() {
  return (
    <div className="max-w-layout mx-auto mb-[120px]">
      <Details
        {...detailsProps}
        containerClass="!flex-col-reverse md:!flex-row"
      />
      <div className=" flex flex-col lg:flex-row justify-between gap-[50px] mt-5 px-2">
        <div className="flex flex-col gap-11">
          <p className="text-black/70 text-[18px]">
            Vi genomför både stora och små projekt. Vi åtar oss allt från
            <a
              href="https://www.joureliten.se/byta-eluttag-sjalv/"
              className="underline"
            >
              {" "}
              byte av elektriska uttag{" "}
            </a>
            or
            <a
              href="https://www.joureliten.se/installera-ny-diskmaskin/"
              className="underline"
            >
              {" "}
              installation av vitvaror
            </a>
            , till installation av smarta hemlösningar i en hel byggnad över
            hela Stockholm. Våra erfarna elektriker besöker dig med våra
            välutrustade servicebilar och utför felsökning och översyn på plats.
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
            <TextTitle title="Solid erfarenhet inom nybyggnation, ombyggnad och nya elinstallationer." />
            <p className="text-black/70 text-[18px]">
              Renoverar eller bygger du om? Vi åtar oss uppdrag inom
              nybyggnation, ombyggnad och nya installationer i hela
              Storstockholm och dess omgivande områden. Storleken på ditt
              projekt spelar ingen roll för Jour 365. Vi hjälper dig att
              utveckla förslag på en modern, effektiv och energibesparande
              lösning. Hos oss får du en tydlig och konkret bild av kostnaderna
              och omfattningen av renoveringsarbetet.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <TextTitle title="Kvalitet och säkerhet" />
            <div className="text-black/70 text-[18px] flex flex-col gap-7">
              <p>
                Vi är lyhörda för dina synpunkter och strävar efter att inte
                bara uppfylla, utan också överträffa dina förväntningar. Därför
                utförs allt arbete av professionella elektriker som är godkända
                av Elsäkerhetsverket med omfattande erfarenhet och som besitter
                adekvata, aktuella och verifierade kunskaper inom relevanta
                områden.
              </p>
              <p>
                Vi skyddar miljön och strävar även efter att utforma
                energieffektiva lösningar, samt att välja material och produkter
                som är miljövänliga och underlättar återvinning.
              </p>
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
      "Med vår breda kompetens inom elektricitet kan vi ta oss an uppdrag inom allt från elinstallationer i villor och fritidshus till större projekt.",
    para2: ` Våra kunniga <a href="#" class="underline">elektriker</a>  hjälper både företag och privatpersoner med allt från mindre elservice till mer omfattande entreprenadprojekt.`,
  },
  title2: "Alla typer av elinstallationer",
  title2Class: "justify-between",
};
