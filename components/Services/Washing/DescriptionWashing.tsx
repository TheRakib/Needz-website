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
          <TextTitle title="Beskrivning" />
          <div className="flex flex-col gap-6 mt-5 mb-11 text-black/70 text-[18px]">
            <p className="">
              Har du en blockering i avloppet? Oroa dig inte! Kontakta oss på
              Jour Elite, så kommer vi ut med en högtryckstvätt för dig.
            </p>
            <p className="">
              En stopp i avloppet kan komma mycket olägligt. Ibland räcker det
              att spola avloppet själv eller använda ett gammalt husmorstips. I
              vissa fall kan en rörmokare rensa vattenfällor och rör.
            </p>
            <p className="">
              I de flesta fall krävs dock mer kraft för att lösa upp stoppet. Då
              rekommenderas det att du ringer efter en högtryckstvätt.
            </p>
          </div>
          <TextTitle title="Stopp i avloppet? Få det rensat snabbt och effektivt med våra erfarna rörmokare." />
        </div>
        <UserCard />
      </div>
      <div className=" flex flex-col lg:flex-row justify-between gap-[50px]  mt-5">
        <div className="flex flex-col gap-11">
          <p className="text-black/70 text-[18px]">
            Det finns många anledningar till varför stopp uppstår. I diskbänken
            och avloppet är det vanligt att matfett och matrester fastnar och
            samlas i avloppet, särskilt längre ner i rören där det är kallare
            och fettet stelnar. Kontakta oss på Jour Elite för att få hjälp med
            avloppsproblem.
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
              Stopp i toaletten kan orsakas av att man spolar ner papper som
              inte är avsett att spolas ner och som fastnar någonstans.
              Våtservetter och sanitetsprodukter hör inte hemma i din toalett
              utan bör kastas i papperskorgen. Kontakta oss på needz om du står
              inför toalettproblem.
            </p>
            <p>
              I duschen är det vanligt att hår och smuts fastnar, vilket så
              småningom kan leda till stopp i rören. Oavsett vad som orsakade
              stoppet är inget problem för litet eller för stort för oss på
              needz. Kontakta oss för att lösa ditt avloppsproblem.
            </p>
            <p>
              Om du ofta har blockeringar i samma avlopp eller om vattentrycket
              har påverkats i mer än en rörledning, kan du vara säker på att en
              spolbil behövs. Kontakta oss på needz för att få professionell
              hjälp.
            </p>
            <p className="font-semibold text-black">
              Inte säker på om du behöver needz? Ring för en snabb konsultation.
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
