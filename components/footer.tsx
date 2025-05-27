import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  const footerLinks = [
    {
      title: "Tjänster",
      links: [
        { label: "Snickeri", href: "#" },
        { label: "VVS", href: "#" },
        { label: "Elektriskt arbete", href: "#" },
        { label: "Måleri", href: "#" },
        { label: "Städning", href: "#" },
        { label: "Låssmed", href: "#" },
      ],
    },
    {
      title: "Om Oss",
      links: [
        { label: "Vårt team", href: "#" },
        { label: "Karriär", href: "#" },
        { label: "Blogg", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Hjälpcenter", href: "#" },
        { label: "Vanliga frågor", href: "#" },
        { label: "Kontakta oss", href: "#" },
        { label: "Villkor", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="relative h-12 w-32">
                <Image
                  src="https://needz.se/wp-content/uploads/2023/03/Needz-logo-1.png"
                  alt="Needz Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Needz erbjuder tillförlitliga hantverkstjänster dygnet runt i Stockholm. Vi kopplar ihop dig med
              certifierade proffs för alla dina behov.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors hover:bg-emerald-600"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-400 mt-0.5" />
                <span className="text-gray-400">Stockholm, Sverige</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-400">08-123 45 67</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-400">info@needz.se</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-400 text-sm">&copy; {currentYear} Needz. Alla rättigheter förbehållna.</p>
            <div className="flex flex-wrap gap-4 md:justify-end text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Integritetspolicy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Användarvillkor
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookiepolicy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
