import { Button } from "@mui/material";
import React from "react";

export default function MainAction() {
  return (
    <div className="fixed right-6 bottom-10 w-[170px] h-[170px] bg-white rounded-full p-4 shadow-lg shadow-black hidden md:flex items-center justify-center flex-col gap-4">
      <p className="text-primary">Kontakta oss!</p>
      <Button
        variant="contained"
        className="bg-secondary text-white hover:bg-white hover:text-primary rounded-full capitalize tracking-tight"
      >
        <a href="tel:08302241" className="py-1">
          Ring: 08-302241
        </a>
      </Button>
    </div>
  );
}
