"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Heart, Users, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
  { id: "all", name: "All Events", icon: Calendar },
  { id: "weddings", name: "Weddings", icon: Heart },
  { id: "corporate", name: "Corporate", icon: Users },
  { id: "mice", name: "MICE", icon: Calendar },
]

const galleryItems = [
  {
    id: 1,
    category: "weddings",
    title: "Royal Palace Wedding",
    description: "A magnificent wedding celebration at City Palace, Udaipur",
    image: "/placeholder.svg?height=400&width=600",
    client: "Priya & Rahul",
  },
  {
    id: 2,
    category: "corporate",
    title: "Tech Conference 2023",
    description: "Annual technology conference with 500+ attendees",
    image: "/placeholder.svg?height=400&width=600",
    client: "TechCorp India",
  },
  {
    id: 3,
    category: "weddings",
    title: "Destination Beach Wedding",
    description: "Romantic beachside wedding ceremony in Goa",
    image: "/placeholder.svg?height=400&width=600",
    client: "Anjali & Vikram",
  },
  {
    id: 4,
    category: "mice",
    title: "International Summit",
    description: "Multi-day international business summit",
    image: "/placeholder.svg?height=400&width=600",
    client: "Global Business Forum",
  },
  {
    id: 5,
    category: "weddings",
    title: "Traditional Rajasthani Wedding",
    description: "Authentic Rajasthani wedding with cultural performances",
    image: "/placeholder.svg?height=400&width=600",
    client: "Meera & Arjun",
  },
  {
    id: 6,
    category: "corporate",
    title: "Product Launch Event",
    description: "Grand product launch with celebrity appearances",
    image: "/placeholder.svg?height=400&width=600",
    client: "Innovation Labs",
  },
  {
    id: 7,
    category: "weddings",
    title: "Garden Wedding Ceremony",
    description: "Elegant garden wedding with floral decorations",
    image: "/placeholder.svg?height=400&width=600",
    client: "Kavya & Rohit",
  },
  {
    id: 8,
    category: "mice",
    title: "Medical Conference",
    description: "International medical conference and exhibition",
    image: "/placeholder.svg?height=400&width=600",
    client: "Medical Association",
  },
  {
    id: 9,
    category: "corporate",
    title: "Annual Awards Ceremony",
    description: "Glamorous awards night with entertainment",
    image: "/placeholder.svg?height=400&width=600",
    client: "Excellence Awards",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#8B1538] to-[#6B1028] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-white/20 text-white">Our Gallery</Badge>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold">Moments We've Created</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Browse through our portfolio of stunning events and celebrations we've had the privilege to organize. Each
              event tells a unique story of dreams turned into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`flex items-center gap-2 ${
                  activeCategory === category.id ? "bg-[#8B1538] hover:bg-[#6B1028]" : "hover:text-[#8B1538]"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.client}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge
                    className={`${
                      item.category === "weddings"
                        ? "bg-[#8B1538]/90"
                        : item.category === "corporate"
                          ? "bg-blue-600/90"
                          : "bg-amber-600/90"
                    } text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    {item.category === "weddings" ? "Wedding" : item.category === "corporate" ? "Corporate" : "MICE"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
