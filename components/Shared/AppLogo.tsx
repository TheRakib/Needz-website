import Image from "next/image";
import React from "react";

type Props = {
  className: string;
};

function AppLogo({ className }: Props) {
  return (
    <div className={`${className && className} w-[144px] h-[80px] relative`}>
      <Image src={"/Logo.png"} fill alt="site logo" />
    </div>
  );
}

export default AppLogo;
