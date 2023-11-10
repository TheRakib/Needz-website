"use client";
import SecondTitle from "@/components/Shared/SecondTitle";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import CallContactButtons from "@/components/Shared/CallContactButtons";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // borderBottom: 0,
  // borderBottom: `1px solid ${theme.palette.divider}`,
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
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function LocalPlumber() {
  const [expanded, setExpanded] = React.useState<string | false>("1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="max-w-layout mx-auto px-2">
      <div className="">
        <div className="flex flex-col gap-5 items-center justify-center mb-[90px]  max-w-[712px] mx-auto">
          <SecondTitle
            title="Your local plumbers in Stockholm - for homes and businesses"
            className="!text-center"
          />
          <p className="text-[18px] text-black/70 text-center">
            At Joureliten, we offer comprehensive plumbing services to
            homeowners and businesses throughout Stockholm. Our experienced and
            certified plumbers are ready to help you with everything from minor
            installations to complete renovations. We are also experts in
            ventilation, heating, and sanitation systems.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-[50px]">
          <div className="w-[310px] h-[392px] md:w-[560px] lg:w-[680px] md:h-[692px] mx-auto relative ">
            <Image
              src={"/services/plumber/Ventilation.png"}
              alt="ventilation service"
              fill
            />
          </div>
          <div className="max-w-[510px] md:ml-auto md:mr-auto lg:mr-0">
            {serviceAccordians.map((item) => (
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
                >
                  <Typography className="text-[22px] capitalize">
                    {item.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className=" pb-20">
                  <ul
                    className="flex flex-col gap-2 text-black/70"
                    style={{ listStyle: "disc" }}
                  >
                    {item.description.map((des, i) => (
                      <li key={i}>
                        <Typography className="text-[18px]">{des}</Typography>
                      </li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[120px] flex flex-col gap-[70px]">
        <div className="text-[20px] max-w-[1005px] mx-auto">
          <p className="text-center">
            Our experienced and certified plumbers can handle any plumbing
            problem you have, no matter how big or small. We are experts in all
            types of plumbing systems, including ventilation, heating, and
            sanitation.
          </p>
          <p className="text-secondary text-center">
            Contact us today for a free quote!
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <CallContactButtons />
        </div>
      </div>
    </div>
  );
}

const serviceAccordians = [
  {
    id: 1,
    title: "Ventilation",
    description: [
      "Mechanical exhaust ventilation – With the help of a fan, the air is led out of the house. Air enters through small vents in the wall. This is called the F system.",
      "Mechanical supply and exhaust ventilation – In this system, you have two fans, one that draws air in and one that brings air out. This is called the FT system",
      "Self-draft ventilation – This is a system without fans, instead a ventilation flow is created using indoor and outdoor air.",
    ],
  },
  {
    id: 2,
    title: "Heat",
    description: [
      "Mechanical exhaust ventilation – With the help of a fan, the air is led out of the house. Air enters through small vents in the wall. This is called the F system.",
      "Mechanical supply and exhaust ventilation – In this system, you have two fans, one that draws air in and one that brings air out. This is called the FT system",
      "Self-draft ventilation – This is a system without fans, instead a ventilation flow is created using indoor and outdoor air.",
    ],
  },
  {
    id: 3,
    title: "Sanitation",
    description: [
      "Mechanical exhaust ventilation – With the help of a fan, the air is led out of the house. Air enters through small vents in the wall. This is called the F system.",
      "Mechanical supply and exhaust ventilation – In this system, you have two fans, one that draws air in and one that brings air out. This is called the FT system",
      "Self-draft ventilation – This is a system without fans, instead a ventilation flow is created using indoor and outdoor air.",
    ],
  },
];
