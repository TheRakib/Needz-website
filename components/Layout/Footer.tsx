import { services } from "@/Constants";
import { Button, InputBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-white text-black pt-[120px] pb-[20px] px-2">
      <div className="max-w-layout mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-y-4 md:gap-0 justify-between">
          <div className="col-span-2">
            <h3 className="text-[20px] uppercase mb-4 text-center md:text-left ">
              Om oss
            </h3>
            <p className="max-w-[284px] ml-auto md:ml-0 mr-auto text-black/80 text-[14px] leading-6  ">
              <Link href={"/"}>Needz</Link> erbjuder en omfattande service
              dygnet runt i Stockholm, inklusive VVS, elektriker, snickeri,
              flytt- och leveranstjänster, samt personliga shopping- och
              återvinningstjänster. Vi hanterar både akuta situationer och
              planerade uppdrag för privatpersoner och företag, alltid med ett
              team av erfarna och certifierade proffs.
            </p>
          </div>
          <div className="col-span-4 flex flex-col items-center mr-4">
            {/* <div className="flex flex-col gap-2">
              <p className="text-black/70 text-center mt-1 ">Försäkrad med</p>
              <Image
                src={"/about/icon.png"}
                alt="icon"
                height={52}
                width={282}
                className="pt-1"
              />
              <p className="text-black/70 text-center mt-1">
                I samarbete med{" "}
                <Link href={"https://www.joureliten.se/"} target="_blank">
                  Jour Eliten
                </Link>{" "}
                Sverige AB
              </p>
            </div> */}
            <h3 className="text-[18px] font-semibold mb-4 text-left ">
              Download Now
            </h3>
            <div className="flex flex-col justify-center gap-4">
              <Link href={"#"}>
                <Image
                  src={"/social/playStore.png"}
                  alt="get app on play store"
                  className="lg:h-16 lg:w-52 h-12 w-34 hover:opacity-90 transform hover:scale-105 ease-in duration-200"
                  width={250}
                  height={80}
                />
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
            </div>
          </div>
          <div className="col-span-4 grid grid-cols-2 gap-1 overflow-x-scroll no-scrollbar">
            {contactInfo.map((info) => (
              <div key={info.id} className="col-span-1 ">
                <h3 className="text-[18px] font-semibold mb-4 ">
                  {info.title}
                </h3>
                <ul className="text-black/80 ">
                  {info.items.map((item, i) => (
                    <li
                      key={i}
                      className="mb-2 text-[14px] md:text-[14px] cursor-pointer"
                    >
                      {typeof item === "string" ? (
                        <span>{item}</span>
                      ) : (
                        <Link href={item.link}>{item.title}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center mt-16">
          <p className="text-[14px] text-black/40 text-center md:text-left">
            Copyright &copy; 2023 needz.
          </p>
        </div>
      </div>
    </footer>
  );
}
type Link = {
  id: number;
  link: string;
  title: string;
};

type ContactInfoItem = string | Link;

type ContactInfo = {
  id: number;
  title: string;
  items: ContactInfoItem[];
};

const contactInfo: ContactInfo[] = [
  {
    id: 2,
    title: "Jour Tjänster",
    items: [...services],
  },
  {
    id: 3,
    title: "Kontakt Info",
    items: ["needz", "Email: order@needz.se"],
    // items: ["needz", "Ring: 08-30 22 41", "Email: order@jour365.se"],
  },
];
