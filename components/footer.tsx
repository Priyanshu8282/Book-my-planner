import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2C1810] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-1 rounded-full flex items-center justify-center">
                <Image src="/images/logo.png" alt="Book My Planner Logo" width={36} height={36} className="w-9 h-9 object-contain" />
              </div>
              <h3 className="font-playfair text-xl font-bold">Book My Planner</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We specialize in delivering exceptional Wedding Events, Corporate Events, and MICE solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-[#8B1538] cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-[#8B1538] cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-[#8B1538] cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-[#8B1538] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-gray-300 hover:text-[#8B1538] transition-colors text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Our Services</h4>
            <div className="space-y-2">
              {[
                "Wedding Planning",
                "Corporate Events",
                "MICE Solutions",
                "Destination Weddings",
                "Event Management",
              ].map((service) => (
                <div key={service} className="text-gray-300 text-sm">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#8B1538] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">491 Ambamata Scheme, Udaipur - 313001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#8B1538]" />
                <span className="text-gray-300 text-sm">info@bookmyplanner.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#8B1538]" />
                <a href="tel:917014720675" className="text-gray-300 text-sm hover:text-[#8B1538] transition-colors">+91 70147 20675</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Book My Planner. All rights reserved. | Crafted with in Udaipur
          </p>
        </div>
      </div>
    </footer>
  )
}
