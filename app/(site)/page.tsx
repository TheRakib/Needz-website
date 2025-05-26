import Hero from "@/components/hero";
import Services from "@/components/services";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import AppDownload from "@/components/app-download";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Testimonials />
        <AppDownload />
      </main>
    </div>
  );
};

const faqItems = [
  {
    id: 1,
    title: "Hur snabbt kan ni vara på plats?",
    description:
      "Vi strävar efter att erbjuda hjälp inom 2 timmar i hela Stockholm, oavsett din plats, med garanti för samma dags service.",
  },
  {
    id: 2,
    title: "Hur kan jag kontakta er?",
    description:
      "Kontakta oss enkelt att maila till order@needz.se för icke-akuta ärenden, eller använd vårt kontaktformulär på 'om oss' sidan.",
  },
  {
    id: 3,
    title: "Påverkar jourtjänsten era priser?",
    description:
      "Vi håller konkurrenskraftiga priser för alla tjänster, inklusive jourarbete. Kontakta oss för en skräddarsydd offert!",
  },
  {
    id: 4,
    title: "Erbjuder ni garantier på utfört arbete?",
    description:
      "Garanti ges för arbeten med material vi tillhandahåller och installerar. Ingen garanti ges för kundinköpt material, även om installationen görs av oss.",
  },
  {
    id: 5,
    title: "Är ert team certifierat?",
    description:
      "Alla våra tekniker, inklusive snickare, VVS-tekniker och elektriker, är certifierade och kvalificerade.",
  },
  {
    id: 6,
    title: "Vad innebär ROT-avdrag?",
    description:
      "ROT står för renovering, ombyggnad, tillbyggnad och erbjuds till privatpersoner för vissa hemarbeten. Detaljer finns hos Skatteverket.",
  },
  {
    id: 7,
    title: "Vem kvalificerar för ROT-avdrag?",
    description: `Du är berättigad om du äger fastigheten. Kontakta oss för att verifiera om ditt arbete är berättigat för ROT-avdrag.`,
  },
  {
    id: 8,
    title: "Hanterar ni ROT-avdragsansökningar?",
    description: `Vi sköter ROT-avdragsansökningar för att du som kund ska känna dig trygg och säker med processen.`,
  },
];
export default Home;
