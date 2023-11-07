import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import { Button, InputBase } from "@mui/material";
import Image from "next/image";
import { IoMdAttach } from "react-icons/io";

export default function ContactUs() {
  return (
    <div className="bg-primary text-white py-[80px] max-w-maxLayout mx-auto px-2">
      <div className="max-w-layout mx-auto">
        <div className="flex flex-col gap-2">
          <h3 className="text-[18px] font-semibold text-center md:text-left ">
            Need Any Services
          </h3>
          <SectionTitle title="Contact Us" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 w-full">
            <div className="w-full flex flex-col gap-5 items-center  justify-center mt-7">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[30px] ">
                <div className="col-span-1 flex flex-col gap-[30px]">
                  <InputBase
                    id="outlined-basic"
                    placeholder="Name"
                    className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px] w-full `}
                  />
                  <InputBase
                    id="outlined-basic"
                    placeholder="Phone Number"
                    className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px]  w-full`}
                  />
                  <InputBase
                    id="outlined-basic"
                    placeholder="Zip Code"
                    className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px]  w-full`}
                  />
                </div>
                <div className="col-span-1 flex flex-col gap-[30px]">
                  <InputBase
                    id="outlined-basic"
                    placeholder="Email"
                    className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px] w-full `}
                  />
                  <InputBase
                    id="outlined-basic"
                    placeholder="Address"
                    className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px]  w-full`}
                  />
                  <InputBase
                    id="outlined-basic"
                    placeholder="Postal Code"
                    className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px]  w-full`}
                  />
                </div>
              </div>

              <div className="w-full">
                <textarea
                  name=""
                  id=""
                  rows={7}
                  placeholder="Your Message"
                  className="text-[18px] pt-6 pl-5 w-full text-black focus:outline-none "
                />
              </div>
              <Button
                className="bg-transparent  border-white w-full text-white text-[16px] md:text-[18px] h-[81px] capitalize hover:bg-white/20 hover:text-white "
                variant="outlined"
              >
                <IoMdAttach className="mr-1 text-3xl font-semibold" />
                Attach your picture and other relevant files
              </Button>

              <div className="mt-6 w-[286px] mx-auto md:mr-auto ">
                <Button className="bg-white w-full text-black text-2xl h-[92px] capitalize hover:bg-white/20 hover:text-white ">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-1 mx-auto relative w-[300px] h-[466px] md:w-[340px]  xl:w-[580px] md:h-[666px] ml-auto ">
            <Image src={"/home/contactUs.png"} alt="Contact" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
