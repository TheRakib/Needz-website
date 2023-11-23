"use client";
import React, { ChangeEvent, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { Button, InputBase } from "@mui/material";

interface FormState {
  firstName: string;
  LastName: string;
  phone: string;
  email: string;
  address: string;
  message: string;
}

export default function Welcome() {
  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    LastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubscribe = async () => {
    try {
      console.log("Subscription successful:", formData);
    } catch (error) {
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className="max-w-layout mx-auto mt-[150px] mb-7">
      <SectionTitle
        title="You are welcome to contact us."
        className="!text-center"
      />
      <div className="max-w-[630px] mx-auto flex flex-col mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[220px] md:max-w-none ml-auto mr-auto md:mr-0 md:ml-10">
          <div className="flex items-center gap-4">
            <span className="p-2 rounded-lg bg-primary text-white">
              <IoCall size={24} />
            </span>
            <div className="flex flex-col gap-1">
              <p className="text-[14px] text-black/70 ">Call Us</p>
              <p className=" ">08-30 22 41</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="p-2 rounded-lg bg-primary text-white">
              <IoMdMail size={24} />
            </span>
            <div className="flex flex-col gap-1">
              <p className="text-[14px] text-black/70 ">Email Us</p>
              <p className=" ">order@joureliten.se</p>
            </div>
          </div>
        </div>
        <div className="p-[30px] flex flex-wrap gap-6 justify-between border rounded-lg border-black/30 shadow-md mt-[70px]">
          <InputBase
            onChange={handleChange}
            name="firstName"
            id="outlined-basic"
            placeholder="First Name"
            className={`border border-black/40 h-[40px] w-[270px] pl-5 py-6 bg-white text-black/800 text-[18px] rounded-lg `}
          />
          <InputBase
            onChange={handleChange}
            name="LastName"
            id="outlined-basic"
            placeholder="Last Name"
            className={`border border-black/40 h-[40px] w-[270px] pl-5 py-6 bg-white text-black/800 text-[18px] rounded-lg `}
          />
          <InputBase
            onChange={handleChange}
            name="phone"
            id="outlined-basic"
            placeholder="Phone"
            className={`border border-black/40 h-[40px] w-[270px] pl-5 py-6 bg-white text-black/800 text-[18px] rounded-lg `}
          />
          <InputBase
            onChange={handleChange}
            name="email"
            id="outlined-basic"
            placeholder="Email Address"
            className={`border border-black/40 h-[40px] w-[270px] pl-5 py-6 bg-white text-black/800 text-[18px] rounded-lg `}
          />
          <InputBase
            onChange={handleChange}
            name="address"
            id="outlined-basic"
            placeholder="Address*"
            className={`border border-black/40 h-[40px] w-full pl-5 py-6 bg-white text-black/800 text-[18px] rounded-lg `}
          />
          <div className="w-full">
            <textarea
              name="message"
              id=""
              onChange={handleChange}
              rows={7}
              placeholder="What do you need help with?"
              className="text-[18px] pt-3 pl-5 w-full border border-black/40 rounded-lg text-black focus:outline-none "
            />
          </div>
          <div className="mt-6 w-full ">
            <Button
              className="bg-primary w-full text-white text-base h-[59px] capitalize hover:bg-transparent hover:text-primary rounded-xl hover:border-primary"
              variant="outlined"
              onClick={handleSubscribe}
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
