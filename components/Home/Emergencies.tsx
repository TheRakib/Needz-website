import Image from "next/image";
import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import {
  Button,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { BsArrowRightCircle } from "react-icons/bs";

export default function Emergencies() {
  return (
    <div className="bg-primary max-w-maxLayout mx-auto">
      <div className="max-w-layout mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1 flex flex-col">
            <SectionTitle
              title="Plumbing and electrical emergencies? 
                We're here to help!"
              className="text-white font-semibold  tracking-tight"
            />
            <div className="flex gap-4 mt-8 mb-9">
              <Image
                src={"/home/icon1.png"}
                alt="achievement"
                height={104}
                width={104}
              />
              <Image
                src={"/home/icon2.png"}
                alt="achievement"
                height={104}
                width={104}
              />
              <Image
                src={"/home/icon3.png"}
                alt="achievement"
                height={104}
                width={104}
              />
            </div>
            <p className="text-[35px] text-white ">
              Call Us: <span className="font-bold">08-23 55 20</span>
            </p>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col text-white">
              <h3 className="font-semibold text-[25px] text-center">
                Online Book A Service
              </h3>
              <p className="text-[18px] text-white/60 text-center ">
                You’re response within a minute
              </p>
            </div>
            <div className="flex flex-col gap-5 items-center  justify-center mt-7 w-[420px] mx-auto">
              <InputBase
                id="outlined-basic"
                placeholder="Full Name"
                className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px] w-full `}
              />
              <InputBase
                id="outlined-basic"
                placeholder="Phone Number"
                className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px]  w-full`}
              />
              <div className="w-full">
                <Select
                  variant="standard"
                  labelId="our-services-select"
                  id="our-services-select"
                  value=""
                  disableUnderline
                  displayEmpty
                  // onChange={handleCloseNavMenu}
                  className="text-black/40 bg-white w-full py-[20px] px-5 "
                  sx={{
                    minWidth: "120px",
                  }}
                >
                  <MenuItem value="" disabled>
                    Choose Service
                  </MenuItem>
                  <MenuItem value="service1">Service 1</MenuItem>
                  <MenuItem value="service2">Service 2</MenuItem>
                  {/* Add more services as MenuItem */}
                </Select>
              </div>
              <div className="mt-6 w-full">
                <Button className="bg-white w-full text-black text-2xl h-[80px] capitalize hover:bg-white/20 hover:text-white ">
                  <BsArrowRightCircle className="mr-3 font-semibold" /> Submit
                  Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
