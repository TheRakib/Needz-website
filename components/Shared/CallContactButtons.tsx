import { Button } from "@mui/material";
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
  return (
    <>
      <Button
        className={twMerge(
          `${
            callClass && callClass
          } capitalize text-xl md:text-2xl md:py-7 md:px-12 px-10 py-4 rounded-xl bg-primary hover:bg-primary/70 text-white flex-nowrap whitespace-nowrap `
        )}
        size="large"
      >
        <BiPhoneCall className="mr-2" />
        Call 08-235520
      </Button>
      <Button
        className={twMerge(
          `${contactClass} capitalize text-xl md:text-2xl md:py-7 md:px-12 px-10 py-4 rounded-xl bg-white hover:bg-primary/50 hover:text-white text-primary flex-nowrap whitespace-nowrap border-2`
        )}
        size="large"
        variant="outlined"
      >
        Contact Us
      </Button>
    </>
  );
}
