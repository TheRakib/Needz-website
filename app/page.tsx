import Banner from "@/components/Home/Banner";
import CallIn from "@/components/Home/CallIn";
import Emergencies from "@/components/Home/Emergencies";
import FAQ from "@/components/Home/FAQ";
import Features from "@/components/Home/Features";
import Feedback from "@/components/Home/Feedback";
import Join from "@/components/Home/Join";
import { Box, Fab, Fade, useScrollTrigger } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "@/components/Shared/ScrollTop";
import ContactUs from "@/components/Home/ContactUs";
import OurServices from "@/components/Home/OurServices";

export default function Home(props: Props) {
  return (
    <main className="font-inter min-h-screen">
      <div id="back-to-top-anchor" />
      <Banner />
      {/* <CallIn />
      <Emergencies />
      <Feedback />
      <Join />
      <Features />
      <FAQ />
      <OurServices />
      <ContactUs /> */}

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

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}
