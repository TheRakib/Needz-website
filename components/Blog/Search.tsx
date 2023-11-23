import { InputBase } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import React, { Dispatch, SetStateAction } from "react";

export default function Search({
  setSearch,
}: {
  setSearch: Dispatch<SetStateAction<string | undefined>>;
}) {
  return (
    <div className="w-full border rounded-lg border-black/40 text-black/70 flex flex-col gap-[18px] p-[30px] ">
      <h3 className="font-semibold text-black">Blog Search</h3>
      <InputBase
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter your keyword"
        className="border bg-black/5 border-black/10 px-5 py-[12px] rounded-lg"
        endAdornment={<CiSearch size={20} />}
      />
    </div>
  );
}
