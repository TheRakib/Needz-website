import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CallIn() {
  return (
    <div className="max-w-layout mx-auto my-[100px] px-2">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-12 lg:gap-12">
        <div className="col-span-1 relative xl:w-[583px] md:h-[625px] w-[303px]  md:w-[383px] h-[425px] mx-auto md:mr-auto">
          <Image src={"/appImage/app.png"} alt="banner" fill />
          {/* <Image src={"/home/banner.jpg"} alt="banner" fill /> */}
        </div>
        <div className="col-span-1 flex flex-col justify-center gap-6">
          <h2 className="text-[36px] md:text-title font-bold text-center md:text-left ">
            24/7 Jourtjänster i Stockholm!
          </h2>
          <p className="md:text-[18px] text-[16px] text-black/70 lg:mr-36 leading-8 max-w-full text-center md:text-left">
            Needz utökar nu till att erbjuda ett brett spektrum av tjänster;
            från snickeri, VVS, till elektriska arbeten, tillgängliga dygnet
            runt över hela Stockholm. Oavsett om dina behov är akuta eller
            planerade, för privatpersoner eller företag, säkerställer vårt
            kvalificerade och certifierade team professionell service när du
            behöver det mest. Vi är här för att ge snabb, pålitlig och effektiv
            hjälp, anpassad till dina unika krav.
          </p>

          <div className="">
            <div className="flex flex-col gap-4 items-center md:items-start md:mr-10">
              <Link href={"#"}>
                <Image
                  src={"/social/playStore.png"}
                  alt="get app on play store"
                  className="lg:h-16 lg:w-52 h-12 w-34 hover:opacity-90 transform hover:scale-105 ease-in duration-200"
                  width={250}
                  height={80}
                />
                {/* <Button
                  className="capitalize py-7 px-[50px] text-[26px] bg-primary hover:bg-primary/80 text-white rounded-lg"
                  size="large"
                >
                  Mer om oss
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
                className="capitalize py-7 text-[26px] bg-white hover:bg-primary/5 text-black rounded-lg"
                size="large"
              >
                <a href="tel:08302241">Ring: 08-30 22 41</a>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
