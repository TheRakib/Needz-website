"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

export default function CallContactButtons({
  callClass,
  contactClass,
}: {
  callClass?: string;
  contactClass?: string;
}) {
  const router = useRouter();
  return (
    <>
      {/* <a href="tel:08302241">
        <Button
          className={twMerge(
            `${
              callClass && callClass
            } capitalize text-xl md:text-2xl md:py-7 md:px-12 px-10 py-4 rounded-xl bg-primary hover:bg-transparent hover:text-primary text-white flex-nowrap whitespace-nowrap w-[344px]`
          )}
          size="large"
          variant="outlined"
        >
          <BiPhoneCall className="mr-2" />
          Ring: 08-302241
        </Button>
      </a> */}
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
      {/* <But

      {/* <Button
        onClick={() => router.push("/contact-us")}
        className={twMerge(
          `${contactClass} capitalize text-xl md:text-2xl md:py-7 md:px-12 px-10 py-4 rounded-xl bg-white hover:bg-primary hover:text-white text-primary flex-nowrap whitespace-nowrap w-[344px]`
        )}
        size="large"
        variant="outlined"
      >
        Kontakta oss
      </Button> */}
    </>
  );
}
