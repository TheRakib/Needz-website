"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

function AppLogo({ className, onClick }: Props) {
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    onClick && onClick(event); // Pass the event to the parent component
    router.push(`/`);
  };

  return (
    <div
      onClick={handleClick}
      className={twMerge(
        `${className && className} w-[144px] h-[80px] relative cursor-pointer`
      )}
    >
      <Image src={"/Logo.png"} fill alt="site logo" priority />
    </div>
  );
}

export default AppLogo;
