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
              Jour El, VVS och spol tillgänliga i hela stockholm dygnet runt!
            </h2>
            <p className=" my-6 leading-6 max-w-[686px] text-center">
              Behöver du snabb hjälp inom VVS eller El i Stockholm? needz är
              tillgängliga dygnet runt i hela stor-stockholm! Vi har pålitliga,
              jourhavande tekniker inom el, vvs och spol. Alla våra tekniker är
              certifierade och erfarna inom sitt område. På Jour 365 sätter vi
              alltid kunden i fokus strävar efter att leverera högkvalitativ
              service varje gång!
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="cursor-pointer">
                {/* <Link href={"/contact-us"}> */}
                <Image
                  src={"/social/playStore.png"}
                  alt="get app on play store"
                  className="cursor-pointer"
                  width={250}
                  height={80}
                />
                {/* <Button
                  className="capitalize text-xl md:text-2xl md:py-7 md:px-12 px-10 py-4 rounded-xl bg-primary hover:bg-primary/50 text-white flex-nowrap whitespace-nowrap "
                  size="large"
                  >
                  Kontakta oss
                </Button> */}
                {/* </Link> */}
              </div>

              <Link href={"/contact-us"} className="cursor-pointer w-64 h-20">
                <Image
                  src={"/social/appleStore2.png"}
                  alt="get app on play store"
                  className="cursor-pointer"
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
