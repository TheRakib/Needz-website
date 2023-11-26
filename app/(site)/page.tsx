import Banner from "@/components/Home/Banner";
import CallIn from "@/components/Home/CallIn";
import Emergencies from "@/components/Home/Emergencies";
import Features from "@/components/Home/Features";
import Feedback from "@/components/Home/Feedback";
import Join from "@/components/Home/Join";
import { Box, Button, Fab, Fade, useScrollTrigger } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "@/components/Shared/ScrollTop";
import OurServices from "@/components/Home/OurServices";
import FAQ from "@/components/Shared/FAQ";
import ContactUs from "@/components/Shared/ContactUs";
import MainAction from "@/components/MainAction";

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
      "Vi garanterar hjälp samma dag och strävar efter att vara på plats inom 1 timme från beställning vid adresser i Stockholmsområdet",
  },
  {
    id: 2,
    title: "Finns det något sätt att kontakta er?",
    description:
      "Ja, det finns flera sätt att kontakta oss. Du kan ringa oss på [telefonnummer], skicka ett e-postmeddelande till [e-postadress], eller fylla i vårt kontaktformulär på vår webbplats.",
  },
  {
    id: 3,
    title: "Är ni dyrare eftersom ni har jour?",
    description:
      "Våra jourpriser för rörmokare och elektriker följer standarden som övriga jour-företag i Stockholm tillämpar. Vi utför även planerade arbeten på dagtid till mycket förmånliga priser.",
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
    description: `För att få ROT-avdrag måste du äga din fastighet samt använda den som bostad. Vänligen meddela oss om du önskar rotavdrag vid bokning av jobb. Läs mer på <a href="https://skatteverket.se/foretag/skatterochavdrag/rotochrut/gerarbetetratttillrotavdrag.4.5c1163881590be297b5173bf.html" > Skatteverket </a> om ROT-avdrag`,
  },
  {
    id: 8,
    title: "Måste jag själv ansöka om ROT-avdrag?",
    description: `Vi som företag ansöker om ROT-avdraget åt kunden efter att betalning av fakturan skett. Om vi får avslag från skatteverket blir kunden betalningsskyldig för ROT-avdraget.`,
  },
];
export default Home;
