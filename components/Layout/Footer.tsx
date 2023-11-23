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
        <div className="flex justify-between flex-col md:flex-row ">
          <div className="flex flex-col gap-4">
            <h2 className="text-[30px] uppercase font-bold text-center md:text-left">
              subscribe to our newsletter
            </h2>
            <p className="text-base text-black/80  text-center md:text-left">
              Get weekly inspiration in your inbox
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <InputBase
              id="outlined-basic"
              placeholder="Enter you email..."
              className={` rounded-none border border-black/40 h-[40px] pl-3`}
            />
            <div className="">
              <Button
                className="bg-primary hover:bg-transparent hover:text-primary text-white rounded-lg py-2 px-4 capitalize font-bold text-base "
                variant="outlined"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-black/60 my-10 "></div>
        <div className="grid grid-cols-1 md:grid-cols-10 gap-y-4 md:gap-0 justify-between">
          <div className="col-span-2">
            <h3 className="text-[20px] uppercase mb-4 text-center md:text-left ">
              About us
            </h3>
            <p className="max-w-[284px] ml-auto md:ml-0 mr-auto text-black/80 text-[14px] leading-6  ">
              Jour Eliten AB offers plumbing and electrical on-call in Stockholm
              24 hours a day, but we also carry out planned work for private
              individuals and companies. We use experienced and certified
              plumbers and electricians.
            </p>
          </div>
          <div className="col-span-4 flex justify-center mr-4">
            <div className="flex flex-col gap-2">
              <Image
                src={"/about/icon.png"}
                alt="icon"
                height={52}
                width={282}
                className="pt-1"
              />
              <p className="text-black/70 text-center mt-1 ">Insured With</p>
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
          <div className="flex gap-8 items-center">
            <div className="cursor-pointer">
              <BiLogoFacebook className="text-primary text-[30px] " />
            </div>
            <div className="cursor-pointer">
              <BsTwitter className="text-[#00d6ff] text-[25px] " />
            </div>
            <div className="cursor-pointer">
              <BsInstagram className="text-[#ff0073] text-[25px] " />
            </div>
          </div>
          <p className="text-[14px] text-black/40 text-center md:text-left">
            Copyright &copy; 2023 Neovotech Ltd. All rights reserved.
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
  // {
  //   id: 1,
  //   title: "Company",
  //   items: [
  //     {
  //       id: 1,
  //       link: "/about-us",
  //       title: "About Us",
  //     },
  //     {
  //       id: 2,
  //       link: "/agreement",
  //       title: "Services Agreement",
  //     },
  //     {
  //       id: 3,
  //       link: "/blog",
  //       title: "Blogs",
  //     },
  //     {
  //       id: 4,
  //       link: "/",
  //       title: "Become a Partner",
  //     },
  //     {
  //       id: 5,
  //       link: "/contact-us",
  //       title: "Contact Us",
  //     },
  //   ],
  // },
  {
    id: 2,
    title: "Out Services",
    items: [
      {
        id: 1,
        link: "/services/drains",
        title: "Stop in Drains",
      },
      {
        id: 2,
        link: "/services/plumber",
        title: "Plumber",
      },
      {
        id: 3,
        link: "/services/electrician",
        title: "Electrician",
      },
      {
        id: 4,
        link: "/services/washing",
        title: "Washing Machine",
      },
      {
        id: 5,
        link: "/#our_services",
        title: "See All Services",
      },
    ],
  },
  {
    id: 3,
    title: "Contact Info",
    items: [
      "Jour Elite Sweden AB",
      "Nybodagatan 6B",
      "171 42 Sonia",
      "Call Us: 08-30 22 41",
      "Email: Order@joureliten.se",
    ],
  },
];
