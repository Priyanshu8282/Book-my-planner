"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleGetQuote = () => {
    // You can add your quote form logic here
    window.location.href = '/contact'
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#8B1538] text-white py-2 px-4 text-sm hidden sm:block">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>info@bookmyplanner.com</span>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <span>491 Ambamata Scheme, Udaipur - 313001</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen 
            ? "bg-white/95 backdrop-blur-md shadow-lg" 
            : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 md:space-x-4 group">
              <div className="relative">
                <Image
                  src="/images/logo.png"
                  alt="Book My Planner Logo"
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20 group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <div>
                <h1 className="font-playfair text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#8B1538] to-[#6B1028] bg-clip-text text-transparent">Book My Planner</h1>
                <p className="text-sm md:text-base text-gray-600 font-medium">Design your desire into reality</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium transition-colors hover:text-[#8B1538] ${
                    pathname === item.href ? "text-[#8B1538]" : "text-gray-700"
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8B1538] animate-fade-in"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-medium transition-colors hover:text-[#8B1538] ${
                        pathname === item.href ? "text-[#8B1538]" : "text-gray-700"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  )
}
