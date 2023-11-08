import Banner from "@/components/Home/Banner";
import CallIn from "@/components/Home/CallIn";
import Emergencies from "@/components/Home/Emergencies";
import Features from "@/components/Home/Features";
import Feedback from "@/components/Home/Feedback";
import Join from "@/components/Home/Join";
import { Box, Fab, Fade, useScrollTrigger } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "@/components/Shared/ScrollTop";
import OurServices from "@/components/Home/OurServices";
import FAQ from "@/components/Shared/FAQ";
import ContactUs from "@/components/Shared/ContactUs";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}
const Home: React.FC<Props> = (props) => {
  return (
    <main className="font-inter min-h-screen">
      <div id="back-to-top-anchor" />
      <Banner />
      <CallIn />
      <Emergencies />
      <Feedback />
      <Join />
      <Features />
      <FAQ faqItems={faqItems} />
      <OurServices />
      <ContactUs />

      {/* ----------back to top button---- */}
      <ScrollTop {...props}>
        <Fab
          size="small"
          aria-label="scroll back to top"
          className="bg-black text-white"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </main>
  );
}

const faqItems = [
  {
    id: 1,
    title: "How quickly are you there?",
    description:
      "We guarantee help on the same day and aim to be on site within 1 hour of ordering at addresses in the Stockholm area.",
  },
  {
    id: 2,
    title: "How can your startup hire a lawyer?",
    description:
      "We guarantee help on the same day and aim to be on site within 1 hour of ordering at addresses in the Stockholm area.",
  },
  {
    id: 3,
    title: "How you people helps the victim?",
    description:
      "We guarantee help on the same day and aim to be on site within 1 hour of ordering at addresses in the Stockholm area.",
  },
  {
    id: 4,
    title: "Is there any way to contact with you?",
    description:
      "We guarantee help on the same day and aim to be on site within 1 hour of ordering at addresses in the Stockholm area.",
  },
  {
    id: 5,
    title: "How we can get justice? ",
    description:
      "We guarantee help on the same day and aim to be on site within 1 hour of ordering at addresses in the Stockholm area.",
  },
];
export default Home;
