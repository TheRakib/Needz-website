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
            Ingen uppgift är för stor eller för liten. Vi hanterar allt från
            enstaka möbelförflyttningar till fullständiga företagsflyttar,
            inklusive transport av tunga och skrymmande objekt. Med våra
            välutrustade fordon och erfarna team, säkerställer vi en smidig
            process över hela Stockholm.
          </p>
          <div className="w-[310px] h-[392px] md:w-[560px] lg:w-[580px] xl:w-[664px] md:h-[692px] ml-auto mr-auto lg:ml-0 relative ">
            <Image
              src={"/services/move-delivery/move-delivery.jpg"}
              alt={"description"}
              fill
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[45px]">
          <div className="flex flex-col gap-9">
            <TextTitle title="Erfarenhet i Flyttningar och Leveranser" />
            <p className="text-black/70 text-[18px]">
              Behöver du hjälp med flyttning eller planerar du en ombyggnation
              som kräver omfattande objektflyttningar? Vi täcker allt från
              individuella objekt till fullskaliga företagsflyttningar och
              nyinstallationer av möbler eller utrustning, oavsett projektets
              storlek eller omfång.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <TextTitle title="Kvalitet och Pålitlighet i Service" />
            <div className="text-black/70 text-[18px] flex flex-col gap-7">
              <p>
                Vi prioriterar din tillfredsställelse och strävar efter att
                överträffa dina förväntningar med varje uppdrag. Våra expertteam
                är utbildade, försäkrade och engagerade i att erbjuda pålitliga,
                effektiva och säkra lösningar.
              </p>
              <p>
                Vi är dedikerade till miljöansvar och fokuserar på hållbara
                metoder i alla våra tjänster.
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
      "Vi specialiserar oss på att tillhandahålla skräddarsydda flytt- och leveranstjänster, från att flytta innehåll i hem och kontor till att leverera stora föremål.",
    para2: ` Vårt team erbjuder flexibla lösningar för både privatpersoner och företag, hanterar allt från enkla leveranser till stora, komplexa flyttprojekt.`,
  },
  title2: "Alla typer av elinstallationer",
  title2Class: "justify-between",
};
