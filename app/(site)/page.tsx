import Banner from "@/components/Home/Banner";
import CallIn from "@/components/Home/CallIn";
import Emergencies from "@/components/Home/Emergencies";
import Features from "@/components/Home/Features";
import Join from "@/components/Home/Join";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "@/components/Shared/ScrollTop";
import OurServices from "@/components/Home/OurServices";
import FAQ from "@/components/Shared/FAQ";
import ContactUs from "@/components/Shared/ContactUs";
import { Metadata } from "next";

const Home = () => {
  return (
    <main className="font-inter min-h-screen">
      <div id="back-to-top-anchor" />
      <Banner />
      <CallIn />
      <Emergencies />
      {/* <Feedback /> */}
      <div className="mb-[120px]"></div>
      <Join />
      <Features />
      <FAQ faqItems={faqItems} />
      <OurServices />
      <ContactUs disabledHelperText />

      {/* ----------back to top button---- */}
      <ScrollTop>
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
};

const faqItems = [
  {
    id: 1,
    title: "Hur snabbt är ni där?",
    description:
      "Vi garanterar alltid hjälp samma dag och strävar efter att vara på plats inom 2 timmar, oavsett vart i Stockholm du befinner dig.",
  },
  {
    id: 2,
    title: "Finns det något sätt att kontakta er?",
    description:
      "Ja, det finns flera sätt att kontakta oss. Lättast når du oss på 08 - 30 22 41, vår växel är öppen dygnet runt. För mindre akuta ärenden kan du maila oss på order@needz.se, eller fylla i vårt kontaktformulär som du hittar här på hemsidan under fliken 'om oss'. Vi besvarar ditt mail så fort vi kan.",
  },
  {
    id: 3,
    title: "Är ni dyrare eftersom ni har jour?",
    description:
      "Vi erbjuder konkurrenskraftiga och marknadsmässiga priser på alla våra tjänster. Ring oss för ett prisförslag i just ditt ärende!",
  },
  {
    id: 4,
    title: "Lämnar ni garanti på arbetet?",
    description:
      "Vi lämnar garanti på arbeten där vi både inhandlat material och utfört installation. Däremot kan vi inte lämna garanti om du som kund själv köper materialet, även om vi installerar det.",
  },
  {
    id: 5,
    title: "Är era hantverkare certifierade?",
    description:
      "Alla våra rörmokare och elektriker har rätt certifikat att utföra sina arbeten.",
  },
  {
    id: 6,
    title: "Vad är ROT-avdrag?",
    description:
      "ROT är en förkortning och står för renovering, ombyggnad och tillbyggnad. Privatpersoner kan få ROT-avdrag för vissa typer av arbeten som görs i hemmet. Läs mer hos Skatteverket om just ROT.",
  },
  {
    id: 7,
    title: "Har jag rätt till ROT-avdrag?",
    description: `För att få ROT-avdrag måste du stå som ägare av fastigheten. Har du frågor kring om ditt ärende innefattas av ROT-avdrag så kan du kontaka oss på 08 - 30 22 41 så hjälper vi dig.`,
  },
  {
    id: 8,
    title: "Måste jag själv ansöka om ROT-avdrag?",
    description: `Vi på Jour 365 tar hand om ansökan av ROT-avdrag så att du som kund kan känna dig trygg och säker på att det blir rätt. `,
  },
];
export default Home;
