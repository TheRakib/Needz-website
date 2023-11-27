"use client";
import React, { ChangeEvent, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { Button, InputBase } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

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

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormState> = {};
    let isValid = true;

    // Check required fields
    Object.keys(formData).forEach((key) => {
      const formKey = key as keyof FormState;
      const value = formData[formKey];

      if (value === "") {
        newErrors[formKey] = `${key} is required`;
        isValid = false;
      }
    });

    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubscribe = async () => {
    if (!validateForm()) {
      return toast.error("Please fill in all required fields correctly");
    }

    try {
      const submitData = {
        name: formData.firstName + " " + formData.LastName,
        email: formData.email,
        phoneNumber: formData.phone,
        address: formData.address,
        message: formData.message,
      };
      console.log(submitData);
      const res = await axios.post("/api/mail", submitData);
      console.log(res);
      if (res.status === 200) {
        setSuccessMessage("Email sent successfully");
        setFormData({
          firstName: "",
          LastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
      setSuccessMessage("Something went wrong. Try again");
    }
  };

  return (
    <div className="max-w-layout mx-auto mt-[150px] mb-7">
      <SectionTitle
        title="Du är välkommen att kontakta oss."
        className="!text-center"
      />
      <div className="max-w-[630px] mx-auto flex flex-col mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[220px] md:max-w-none ml-auto mr-auto md:mr-0 md:ml-10">
          <a href="tel:08302241" className="flex items-center gap-4">
            <span className="p-2 rounded-lg bg-primary text-white">
              <IoCall size={24} />
            </span>
            <p className="flex flex-col gap-1">
              <span className="text-[14px] text-black/70 ">Ring</span>
              <span className=" ">08-30 22 41</span>
            </p>
          </a>
          <a
            href="mailto:order@joure365.se"
            className="flex items-center gap-4"
          >
            <span className="p-2 rounded-lg bg-primary text-white">
              <IoMdMail size={24} />
            </span>
            <p className="flex flex-col gap-1">
              <span className="text-[14px] text-black/70 ">Email Us</span>
              <span className=" ">order@joure365.se</span>
            </p>
          </a>
        </div>
        <div className="p-[30px] flex flex-wrap gap-6 justify-between border rounded-lg border-black/30 shadow-md mt-[70px]">
          <div>
            <InputBase
              onChange={handleChange}
              name="firstName"
              id="outlined-basic"
              placeholder="Förnamn"
              className={`border border-black/40 h-[40px] w-[270px] pl-5 py-6 bg-white text-black/800 text-[18px] rounded-lg `}
            />
            {errors.firstName && (
              <p className="text-secondary text-sm">{errors.firstName}</p>
            )}
          </div>

          <div>
            <InputBase
              onChange={handleChange}
              name="LastName"
              id="outlined-basic"
              placeholder="Efternamn"
              className={`border border-black/40 h-[40px] w-[270px] pl-5 py-6 bg-white text-black/800 text-[18px] rounded-lg `}
            />
            {errors.LastName && (
              <p className="text-secondary text-sm">{errors.LastName}</p>
            )}
          </div>

          <div>
            <InputBase
              onChange={handleChange}
              name="phone"
              id="outlined-basic"
              placeholder="Telefon"
              className={`border border-black/40 h-[40px] w-[270px] pl-5 py-6 bg-white text-black/800 text-[18px] rounded-lg `}
            />
            {errors.phone && (
              <p className="text-secondary text-sm">{errors.phone}</p>
            )}
          </div>

          <div>
            <InputBase
              onChange={handleChange}
              name="email"
              type="email"
              id="outlined-basic"
              placeholder="E-postadress"
              className={`border border-black/40 h-[40px] w-[270px] pl-5 py-6 bg-white text-black/800 text-[18px] rounded-lg `}
            />
            {errors.email && (
              <p className="text-secondary text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <InputBase
              onChange={handleChange}
              name="address"
              id="outlined-basic"
              placeholder="Adress*"
              className={`border border-black/40 h-[40px] w-full pl-5 py-6 bg-white text-black/800 text-[18px] rounded-lg `}
            />
            {errors.address && (
              <p className="text-secondary text-sm">{errors.address}</p>
            )}
          </div>

          <div className="w-full">
            <textarea
              name="message"
              id=""
              onChange={handleChange}
              rows={7}
              placeholder="Vad behöver du hjälp med?"
              className="text-[18px] pt-3 pl-5 w-full border border-black/40 rounded-lg text-black focus:outline-none "
            />
            {errors.message && (
              <p className="text-secondary text-sm">{errors.message}</p>
            )}
          </div>

          {successMessage && (
            <p className="text-lg text-yellow font-bold text-center">
              {successMessage}
            </p>
          )}
          <div className="mt-6 w-full ">
            <Button
              className="bg-primary w-full text-white text-base h-[59px] capitalize hover:bg-transparent hover:text-primary rounded-xl hover:border-primary disabled:text-white/70 disabled:bg-primary/70"
              variant="outlined"
              disabled={!!successMessage}
              onClick={handleSubscribe}
            >
              Skicka meddelande
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
