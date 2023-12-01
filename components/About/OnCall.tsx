import React from "react";
import SecondTitle from "../Shared/SecondTitle";
import Image from "next/image";

export default function OnCall() {
  return (
    <div className="max-w-layout mx-auto flex flex-col gap-[60px] mt-20 mb-[120px] px-2">
      <div className="flex flex-col gap-5">
        <SecondTitle title="JOUR I HELA STOCKHOLM, DYGNET RUNT!" />
        <p className="lg:text-[18px] text-black/70 max-w-[980px] ">
          jour365 erbjuder VVS och EL jour i Stockholm 24 timmar om dygnet, men
          vi utför även planerade arbeten för privatpersoner och företag. Vi
          använder oss av erfarna och certifierade rörmokare och elektriker.
        </p>
      </div>
      <div className="flex gap-10 flex-col lg:flex-row">
        <div className="w-[310px] h-[392px] md:w-[550px] lg:w-[570px] xl:w-[630px] md:h-[597px] ml-auto mr-auto lg:ml-0 relative ">
          <Image
            src={"/about/service.png"}
            alt={"description"}
            fill
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="w-[310px] h-[348px] md:w-[520px] lg:w-[550px] xl:w-[570px] md:h-[348px] ml-auto mr-auto lg:ml-0 relative ">
            <Image
              src={"/about/service2.png"}
              alt={"description"}
              fill
              loading="lazy"
            />
          </div>
          <div className="flex gap-2 lg:gap-10 items-center justify-center">
            <div className="flex flex-col gap-2">
              <p className="text-black/70 text-center mt-1 ">Försäkrad med</p>
              <Image
                src={"/about/icon.png"}
                alt="icon"
                height={52}
                width={282}
                className="pt-1"
              />
            </div>
            <div className="flex flex-col gap-0">
              <p className="text-[44px] font-semibold">4.8</p>
              <p className="text-black/70 text-center">Kundomdöme</p>
            </div>
          </div>
          <p className="text-[26px] font-semibold text-center">
            <a href="tel:08302241">Ring: 08-30 22 41</a>
          </p>
        </div>
      </div>
    </div>
  );
}
