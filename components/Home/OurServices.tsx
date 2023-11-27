"use client";
import React, { useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import Image from "next/image";
import { BsArrowDownLeftCircleFill } from "react-icons/bs";
import { Button } from "@mui/material";
import { LuPhoneCall } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { Services } from "@/Types";
import { services } from "@/Constants";

export default function OurServices() {
  const [isHovered, setIsHovered] = useState<boolean | number>(false);

  const router = useRouter();

  const handleMouseOver = (id: number) => {
    setIsHovered(id);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleCartClick = (item: Services) => {
    router.push(item.link);
  };

  return (
    <div className="max-w-layout mx-auto my-[120px] " id="our_services">
      <SectionTitle title="Våra tjänster" className="w-full !text-center" />

      <div className="flex flex-wrap gap-5 lg:gap-16 mt-11 md:mx-24 xl:mx-0">
        {services.map((item) => (
          <div
            key={item.id}
            onMouseOver={() => handleMouseOver(item.id)}
            onMouseOut={handleMouseOut}
            onClick={() => handleCartClick(item)}
            className="mx-auto w-[365px] md:w-[370px] h-[414px] relative overflow-hidden cursor-pointer"
          >
            <Image src={item.img} alt="Our services" fill />
            <div
              className={`absolute bottom-0 left-0 w-full h-[60%] duration-300 bg-gradient-to-t ${
                isHovered === item.id ? "from-primary" : "from-primary/70"
              } 
              to-transparent`}
            />
            <div
              className={`${
                isHovered === item.id ? "bottom-32" : "bottom-10"
              } absolute left-0 w-full h-full  transition-all duration-300  px-6 text-white`}
            >
              <div className="flex justify-between items-end h-full">
                <span className="text-2xl font-semibold">{item.title}</span>
                <BsArrowDownLeftCircleFill className="text-4xl " />
              </div>
              {isHovered === item.id && (
                <p className="text-[17px] mt-5 leading-6 ">
                  {item.description}{" "}
                </p>
              )}
            </div>
          </div>
        ))}
        <div className="w-[370px] h-[414px] mx-auto relative flex flex-col gap-10 items-center justify-center ">
          <Button
            className="w-[291px] h-[92px] bg-primary hover:bg-transparent hover:text-primary text-white text-[26px] capitalize rounded-lg"
            variant="outlined"
          >
            Boka din tjänst
          </Button>
          <Button
            className="w-[291px] h-[92px] bg-transparent  hover:bg-primary hover:text-white text-primary text-[26px] capitalize rounded-lg flex gap-3 items-center"
            variant="outlined"
          >
            <LuPhoneCall />
            <span>08-302241</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
