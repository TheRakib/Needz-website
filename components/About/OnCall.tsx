import React from "react";
import SecondTitle from "../Shared/SecondTitle";
import Image from "next/image";
import Link from "next/link";

export default function OnCall() {
  return (
    <div className="max-w-layout mx-auto flex flex-col gap-[60px] mt-20 mb-[120px] px-2">
      <div className="flex flex-col gap-5">
        <SecondTitle
          title="JOUR I HELA STOCKHOLM, DYGNET RUNT!"
          className="!text-center"
        />
        <p className="lg:text-[18px] text-black/70 max-w-[980px] text-center mx-auto ">
          På needz är vi din pålitliga partner för Spol, VVS, och El-tjänster
          tillgängliga när som helst, dag som natt, året runt i hela Stockholm.
          Vi hanterar inte bara akuta jourärenden men erbjuder även planerade
          tjänster för både privatpersoner och företag. Med ett team av kunniga
          och erfarna tekniker är vi alltid redo att erbjuda snabb och effektiv
          hjälp, oavsett omfattningen på ditt projekt eller behov. Lita på oss
          för att leverera kvalitetsservice med vår expertis.
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
          {/* <div className="flex gap-2 lg:gap-10 items-center justify-center">
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
          </div>
          <p className="text-[26px] font-semibold text-center">
            <a href="tel:08302241">Ring: 08-30 22 41</a>
          </p> */}
          <div className="flex flex-col items-center justify-center gap-4">
            <Link href={"#"}>
              <Image
                src={"/social/playStore.png"}
                alt="get app on play store"
                className="lg:h-16 lg:w-52 h-12 w-34 hover:opacity-90 transform hover:scale-105 ease-in duration-200"
                width={250}
                height={80}
              />
              {/* <Button
                  className="capitalize text-xl md:text-2xl md:py-7 md:px-12 px-10 py-4 rounded-xl bg-primary hover:bg-primary/50 text-white flex-nowrap whitespace-nowrap "
                  size="large"
                  >
                  Kontakta oss
                </Button> */}
            </Link>

            <Link href={"#"}>
              <Image
                src={"/social/appleStore2.png"}
                alt="get app on play store"
                className="lg:h-16 lg:w-52 h-12 w-34 hover:opacity-90 transform hover:scale-105 ease-in duration-200"
                width={250}
                height={80}
              />
            </Link>
            {/* <Button
                className="capitalize text-xl md:text-2xl md:py-7 md:px-12 px-10 py-4 rounded-xl bg-secondary hover:bg-secondary/50 text-white flex-nowrap whitespace-nowrap "
                size="large"
              >
                <a href="tel:08302241" className="flex items-center">
                  <BiPhoneCall className="mr-2" />
                  08-302241
                </a>
              </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
