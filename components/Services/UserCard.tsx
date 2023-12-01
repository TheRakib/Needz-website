import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export default function UserCard() {
  return (
    <div className="w-[350px] md:w-[370px] ml-auto mr-auto md:mr-0 h-[399px] bg-primary rounded-md flex flex-col justify-between items-center p-[30px] md:p-[10px] lg:p-[30px] ">
      <div className="flex flex-col items-center w-full">
        <Image
          src={"/services/avatar.jpg"}
          alt="avatar"
          height={142}
          width={142}
          className="rounded-full overflow-hidden"
        />
        <p className="text-[22px] text-white font-semibold capitalize text-center mt-4 ">
          Gustaf
          {/* Astrid */}
        </p>
        <p className="text-center text-white/70 mt-1 mb-3">Ärendehanterare</p>
        <div className="w-full h-[1px] bg-white/70 " />
      </div>
      <Button
        className="bg-white capitalize rounded-2xl text-primary hover:bg-transparent hover:text-white hover:border-white text-[20px] md:text-[20px] lg:text-[20px] py-5 px-11 md:px-3 xl:px-11 flex gap-2"
        variant="outlined"
      >
        <a href="tel:08302241">
          <FiPhoneCall />
          <span className="md:tracking-tighter xl:tracking-normal tracking-tight">
            Ring: 08-302241
          </span>
        </a>
      </Button>
    </div>
  );
}
