import { Button } from "@mui/material";
import React from "react";

export default function MainAction() {
  return (
    <div className="fixed right-6 bottom-10 w-[138px] h-[138px] bg-white rounded-full shadow-lg shadow-black hidden md:flex items-center justify-center flex-col gap-2">
      <p className="text-primary">Kontakta oss!</p>
      <Button
        variant="contained"
        className="bg-secondary text-white hover:bg-white hover:text-primary rounded-full capitalize tracking-tight px-2 py-1"
      >
        <a href="tel:08302241" className="py-0 tracking-tighter">
          Ring: 08-302241
        </a>
      </Button>
    </div>
  );
}
