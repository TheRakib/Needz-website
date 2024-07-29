import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export default function UserCard() {
  return (
    <div className=" w-[350px] md:w-[370px] ml-auto mr-auto md:mr-0 h-[399px]  rounded-md flex flex-col  p-[30px] md:p-[10px] lg:p-[30px] ">
      <div className="flex flex-col gap-4">
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
  );
}
