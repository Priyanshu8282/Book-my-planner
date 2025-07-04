"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Heart, Users, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

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
    image: "/images/image_1.jpg",
    client: "Priya & Rahul",
  },
  {
    id: 2,
    category: "corporate",
    title: "Tech Conference 2023",
    description: "Annual technology conference with 500+ attendees",
    image: "/images/image_2.jpg",
    client: "TechCorp India",
  },
  {
    id: 3,
    category: "weddings",
    title: "Destination Beach Wedding",
    description: "Romantic beachside wedding ceremony in Goa",
    image: "/images/image_3.jpg",
    client: "Anjali & Vikram",
  },
  {
    id: 4,
    category: "mice",
    title: "International Summit",
    description: "Multi-day international business summit",
    image: "/images/image_4.jpg",
    client: "Global Business Forum",
  },
  {
    id: 5,
    category: "weddings",
    title: "Traditional Rajasthani Wedding",
    description: "Authentic Rajasthani wedding with cultural performances",
    image: "/images/image_5.jpg",
    client: "Meera & Arjun",
  },
  {
    id: 10,
    category: "corporate",
    title: "Elegant Dinner Reception",
    description: "Rich dinner tables covered with blue clothes and sparkling glassware.",
    image: "/images/rich-dinner-tables-covered-with-blue-clothes-sparkling-glass.jpg",
    client: "Luxury Events Group",
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
                  <GalleryImage src={item.image || "/placeholder.svg"} alt={item.title} />
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

function GalleryImage({ src, alt }: { src: string, alt: string }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10">
          <Skeleton className="size-16 rounded-lg" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        onLoadingComplete={() => setLoading(false)}
        className={`object-cover transition-transform duration-500 group-hover:scale-110 ${loading ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
}
