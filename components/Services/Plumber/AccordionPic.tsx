"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { twMerge } from "tailwind-merge";
import SecondTitle from "@/components/Shared/SecondTitle";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1.2rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row",
  paddingLeft: 0,
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingLeft: 0,
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

type Props = {
  items: Items;
  withBullets?: boolean;
  className?: string;
  carWashChildren?: React.ReactNode;
  listStyles?: string;
  title?: string;
};

const CHARACTER_LENGTH = 400;

export default function AccordionPic({
  items,
  withBullets = false,
  className,
  carWashChildren,
  listStyles,
  title,
}: Props) {
  const [expanded, setExpanded] = React.useState<string | false>("1");
  const [readMore, setReadMore] = React.useState<boolean>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
      setReadMore(false);
    };
  return (
    <div
      className={twMerge(
        `${className && className} flex flex-col lg:flex-row lg:gap-[50px]`
      )}
    >
      <div className="w-[310px] h-[392px] md:w-[560px] lg:w-[680px] md:h-[692px] relative flex ml-auto mr-auto lg:mr-0 ">
        {items.map((item) => (
          <div
            key={item.id}
            className={`${expanded === `${item.id}` ? "" : "hidden"}`}
          >
            <Image src={item.img} alt={item.title} fill loading="lazy" />
          </div>
        ))}
        {!expanded ? (
          <div>
            <Image
              src={items[0].img}
              alt={items[0].title}
              fill
              loading="lazy"
            />
          </div>
        ) : null}
      </div>
      <div className="max-w-[510px] md:ml-auto md:mr-auto lg:mr-0">
        {title ? <SecondTitle title={title} className="mb-[33px]" /> : null}
        {items.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === `${item.id}`}
            onChange={handleChange(`${item.id}`)}
            className={`${
              expanded === `${item.id}` ? "border-0" : "border-b"
            } border-black/20`}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className="pr-0"
            >
              <Typography className="text-[22px] capitalize">
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="">
              <ul
                className={`${listStyles && listStyles} ${
                  withBullets ? "ml-4" : ""
                } flex flex-col gap-2 text-black/70 max-h-[310px] overflow-y-scroll no-scrollbar`}
                style={withBullets ? { listStyle: "disc" } : {}}
              >
                {item.description.map((des, i) => (
                  <li key={i}>
                    <Typography className="text-[18px]">{des}</Typography>
                  </li>
                ))}
              </ul>
              {item.id === 1 && carWashChildren ? carWashChildren : null}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

type Items = {
  id: number;
  img: string;
  title: string;
  description: string[];
}[];
