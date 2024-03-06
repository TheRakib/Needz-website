import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";

export default function Banner() {
  return (
    <div className=" blur-[0.5px] h-[678px] max-w-maxLayout mx-auto relative">
      <div className="w-full h-full absolute top-0 left-0">
        <Image
          alt="bg"
          loading="lazy"
          fill
          src={"/appImage/full-screen.jpg"}
          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
        />
      </div>
      <div className="bg-[url('/home/banner-mask.png')] bg-cover bg-no-repeat h-[678px] px-2">
        <div className="max-w-layout mx-auto text-white h-full ">
          <div className="col-span-1 flex flex-col justify-center h-full items-center">
            <h2 className=" text-[36px] md:text-title font-bold text-center">
              Rund-om-klockan Tjänster i Stockholm: Snickeri, VVS, och Mer!
            </h2>
            <p className=" my-6 leading-6 max-w-[686px] text-center">
              Behöver du omedelbar hjälp i Stockholm? Vår app erbjuder
              tillförlitlig hjälp dygnet runt med ett brett utbud av tjänster,
              inklusive snickeri, VVS, elektriskt arbete, och mer. Alla våra
              proffs är certifierade, erfarna och redo att leverera snabb,
              högkvalitativ service direkt till din dörr.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
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
    </div>
  );
}
