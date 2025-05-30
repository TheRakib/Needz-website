import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
// import Script from "next/script";
// import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainAction from "@/components/MainAction";
import Header from "@/components/header";

const inter = Inter({
  weight: ["200", "300", "400", "500", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // applicationName: '',
  metadataBase: new URL("https://360jour.vercel.app/"),
  title: {
    template: "Needz | %s",
    default: "Needz",
  },
  description:
    "Needz: Rör- och elservice dygnet runt i Stockholm. Expert, certifierade yrkesmän för akuta situationer och planerade projekt för både privatpersoner och företag.",
  openGraph: {
    title: "Needz",
    description:
      "Needz: Rör- och elservice dygnet runt i Stockholm. Expert, certifierade yrkesmän för akuta situationer och planerade projekt för både privatpersoner och företag.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="1ydwKMe2NsfBUvb_56PO7uwDg02C5dv_S73W9gucFmg"
        />
        {/* Add meta tags for plumbing keywords */}
        <meta
          name="keywords"
          content="Rörmokartjänster, Akut rörmokare, VVS-nödtjänster, ..."
        />

        {/* Add meta tags for washing keywords */}
        <meta
          name="keywords"
          content="Tvättmaskinstjänster, Högtryckstvätt, Avloppsrensning, ..."
        />

        {/* Add meta tags for electric installation keywords */}
        <meta
          name="keywords"
          content="Elinstallationer, Elektriker Stockholm, Elentreprenad, ..."
        />
      </head>
      <body className={`${inter.variable} bg-white`}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KHV7BCTV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

        {/* ------------------------------------- */}

        <div className="min-h-screen bg-white">
          <Header />
          {/* <Navbar /> */}
          <main>{children}</main>

          {/* <MainAction /> */}

          {/* <Footer /> */}
          <ToastContainer />
          {/* ------------------------------------- */}

          <Footer />
        </div>
      </body>

      {/* <!-- Google Tag Manager --> */}
      <Script id="gtm-script">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KHV7BCTV');`}</Script>
      {/* <!-- End Google Tag Manager --> */}

      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-997KQ0H8V0"
      ></Script>
      <Script id="google-analytics">
        {` 
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-997KQ0H8V0');`}
      </Script>
    </html>
  );
}

// -------------- tags:
// needz
// Jour el, Jour spol, Jour rörmokare Stockholm
// Dygnet runt VVS Stockholm
// Akut elektriker Stockholm
// Certifierade rörmokare Stockholm
// Planerade elprojekt
// Erfarna elektriker Stockholm
// Pålitliga VVS-tjänster

// Jour tjänster Stockholm
// Akut rörmokarservice
// Dygnet runt elektrikertjänster
// Snabb VVS hjälp
// Nödtjänster elektriker
// Omedelbar hjälp VVS
// Akut hjälp elektricitet
// Professionella Jour el, Jour spol, Jour rörmokare
// Pålitliga akut tjänster
// 24/7 VVS och elektriker
// Jourhjälp för hemmet
// Företagstjänster jour
// Akut underhållstjänster
// Säkerhetskontroll jour
// Snabbinsats elektriker och rörmokare

// Jour tjänster Stockholm
// Akut rörmokarservice
// Dygnet runt elektrikertjänster
// Snabb VVS hjälp
// Nödtjänster elektriker
// Omedelbar hjälp VVS
// Akut hjälp elektricitet
// Professionella Jour el, Jour spol, Jour rörmokare
// Pålitliga akut tjänster
// 24/7 VVS och elektriker
// Jourhjälp för hemmet
// Företagstjänster jour
// Akut underhållstjänster
// Säkerhetskontroll jour
// Snabbinsats elektriker och rörmokare
// needz
// Jour el, Jour spol, Jour rörmokare Stockholm
// Dygnet runt VVS Stockholm
// Akut elektriker Stockholm
// Certifierade rörmokare Stockholm
// Planerade elprojekt
// Erfarna elektriker Stockholm
// Pålitliga VVS-tjänster

// ---plumber
// Rörmokartjänster
// Akut rörmokare
// VVS-nödtjänster
// Rörmokare pris
// Värme, ventilation och sanitet
// Rörmokare och VVS-tekniker skillnad
// Gör-det-själv VVS-arbeten
// Certifierade rörmokare
// VVS-expertis
// Fast pris rörmokare
// Rörreparation och installation
// Jour el, Jour spol, Jour rörmokare i hela Sverige
// VVS-felsökning
// Råd om små VVS-problem
// Kvalificerade VVS-specialister

// ------washing
// Tvättmaskinstjänster
// Högtryckstvätt
// Avloppsrensning
// Rörfilmning
// Slamavskiljning
// Serviceavtal
// needz
// Högtryckstvättning
// Rotavdrag
// Avloppsproblem
// Miljövänlig avloppsrengöring
// Professionella rörmokare
// Avloppsinspektion
// Rörfilmningstjänster
// Ekovänliga avloppslösningar

// -----electric installation
// Elinstallationer
// Elektriker Stockholm
// Elentreprenad
// Nybyggnation el
// Ombyggnad elinstallation
// Smarta hemlösningar
// Renovering el
// Energibesparande lösningar
// Elsäkerhet
// Miljövänliga elinstallationer
// Elservice Stockholm
// Felsökning el
// Elektriska uttag
// Vitvaruinstallation
// Eltekniker
