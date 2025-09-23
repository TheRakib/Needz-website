import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6"
import AppLogo from "./Shared/AppLogo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  ]

  const footerLinks = [
    {
      title: "Tjänster",
      links: [
        { label: "Snickeri", href: "#" },
        { label: "VVS", href: "#" },
        { label: "Elektriska arbeten", href: "#" },
        { label: "Flytta & Leverera", href: "#" },
        { label: "Köp åt mig", href: "#" },
        // { label: "Låssmed", href: "#" },
      ],
    },
    // {
    //   title: "Om Oss",
    //   links: [
    //     { label: "Vårt team", href: "#" },
    //     { label: "Karriär", href: "#" },
    //     // { label: "Blogg", href: "#" },
    //     { label: "Press", href: "#" },
    //   ],
    // },
    // {
    //   title: "Support",
    //   links: [
    //     { label: "Hjälpcenter", href: "#" },
    //     { label: "Vanliga frågor", href: "#" },
    //     { label: "Kontakta oss", href: "#" },
    //     { label: "Villkor", href: "#" },
    //   ],
    // },
  ]

  return (
    <footer className="bg-[#f0fdf4]">
      <div className="container mx-auto px-4 py-6 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <AppLogo className="w-[120px] h-[40px]" />
            <p className="my-3 max-w-md text-sm lg:text-base">
              Needz erbjuder en omfattande service
              dygnet runt i Stockholm, inklusive VVS, elektriker, snickeri,
              flytt- och leveranstjänster, samt personliga shopping- och
              återvinningstjänster. Vi hanterar både akuta situationer och
              planerade uppdrag för privatpersoner och företag, alltid med ett
              team av erfarna och certifierade proffs.
            </p>
          </div>

          <div>
            <h3 className="lg:text-lg font-semibold mb-4 text-left ">
              Download Now
            </h3>
            <div className="flex flex-row lg:flex-col justify-center gap-4">
              <Link href={"#"}>
                <Image
                  src={"/social/playStore.png"}
                  alt="get app on play store"
                  className="lg:h-14 lg:w-48 h-10 w-full hover:opacity-90 transform hover:scale-105 ease-in duration-200"
                  width={250}
                  height={80}
                />
              </Link>

              <Link href={"#"}>
                <Image
                  src={"/social/appleStore2.png"}
                  alt="get app on play store"
                  className="lg:h-14 lg:w-48 h-10 w-full hover:opacity-90 transform hover:scale-105 ease-in duration-200"
                  width={250}
                  height={80}
                />
              </Link>
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="lg:text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-sm lg:text-base text-gray-700 hover:text-emerald-600 transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="lg:text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-4 lg:h-5 w-4 lg:w-5 mr-2 text-black mt-0.5" />
                <span className="text-sm lg:text-base text-black">Stockholm, Sverige</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 lg:h-5 w-4 lg:w-5 mr-2 text-black" />
                <span className="text-sm lg:text-base text-black">08-123 45 67</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 lg:h-5 w-4 lg:w-5 mr-2 text-black" />
                <span className="text-sm lg:text-base text-black">info@needz.se</span>
              </li>
            </ul>

            <div className="flex space-x-4 mt-5">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="h-8 lg:h-10 w-8 lg:w-10 rounded-full bg-gray-800 text-white flex items-center justify-center transition-colors hover:bg-emerald-600"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 lg:h-5 w-4 lg:w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 lg:mt-12 pt-4 lg:pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-black text-sm text-center lg:text-start">&copy; {currentYear} Needz. Alla rättigheter förbehållna.</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end text-sm text-black">
              <Link href="#" className="hover:text-emerald-600 transition-colors">
                Integritetspolicy
              </Link>
              <Link href="#" className="hover:text-emerald-600 transition-colors">
                Användarvillkor
              </Link>
              <Link href="#" className="hover:text-emerald-600 transition-colors">
                Cookiepolicy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
