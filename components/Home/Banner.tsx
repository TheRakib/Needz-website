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
          src={"/home/banner0.png"}
          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
        />
      </div>
      <div className="bg-[url('/home/banner-mask.png')] bg-cover bg-no-repeat h-[678px] px-2">
        <div className="max-w-layout mx-auto text-white h-full ">
          <div className="col-span-1 flex flex-col justify-center h-full items-center">
            <h2 className=" text-[36px] md:text-title font-bold text-center">
              Jourtjänster tillgängliga i hela Stockholm, dygnet runt!
            </h2>
            <p className=" my-6 leading-6 max-w-[686px] text-center">
              Behöver snabb hjälp av rörmokare eller elektriker i Stockholm?
              Jour365 finns tillgänglig dygnet runt! Vi erbjuder tillförlitliga
              jourtjänster för elektriker, stopp i avlopp, rörmokare, spolbil
              och elinstallationer. Våra certifierade proffs garanterar
              högkvalitativ service varje gång.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <Link href={"/contact-us"}>
                <Button
                  className="capitalize text-xl md:text-2xl md:py-7 md:px-12 px-10 py-4 rounded-xl bg-primary hover:bg-primary/50 text-white flex-nowrap whitespace-nowrap "
                  size="large"
                >
                  Kontakta oss
                </Button>
              </Link>
              <Button
                className="capitalize text-xl md:text-2xl md:py-7 md:px-12 px-10 py-4 rounded-xl bg-secondary hover:bg-secondary/50 text-white flex-nowrap whitespace-nowrap "
                size="large"
              >
                <a href="tel:08302241" className="flex items-center">
                  <BiPhoneCall className="mr-2" />
                  08-302241
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
