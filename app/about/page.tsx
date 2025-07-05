"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Award, Users, Heart, Target, Eye, Lightbulb } from "lucide-react"
import dreamsImg from "@/public/images/dreams.jpg"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"

const team = [
  {
    name: "Mohamand Zishan Hussain",
    role: "Founder",
    image: "/images/founder1.jpg",
    bio: "Visionary founder and leader, dedicated to team success and creative growth.",
  },
  {
    name: "Zahra Bohara",
    role: "Founder & Event Director",
    image: "/images/founder.jpg",
    bio: "Founder & Event Director with a passion for excellence, luxury event design, and client delight.",
  },
  {
    name: "Avinash Dayma",
    role: "Co-Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Co-Founder focused on seamless operations, process innovation, and team empowerment.",
  },
]

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We pour our heart into every event, treating each celebration as if it were our own.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every detail, ensuring flawless execution and memorable experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients, understanding their vision and bringing it to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly evolve, incorporating the latest trends and technologies in event planning.",
  },
]

export default function AboutPage() {
  const [openFounderModal, setOpenFounderModal] = useState(false)
  const [openZahraModal, setOpenZahraModal] = useState(false)
  const [openAvinashModal, setOpenAvinashModal] = useState(false)
  return (
    <div className="about-theme min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-[#8B1538] to-[#6B1028] text-white"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-white/20 text-white mb-8">About Us</Badge>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-8">Crafting Memories Since 2014</h1>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              Based in the royal city of Udaipur, Book My Planner has been creating magical moments and unforgettable
              experiences for over a decade. Our journey began with a simple vision: to make every celebration
              extraordinary.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-6 md:p-10">
            <div className="space-y-6">
              <Badge className="bg-[#8B1538]/10 text-[#8B1538]">Our Story</Badge>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">From Dreams to Reality</h2>
              <div className="space-y-4 text-gray-600">
                <p className="mb-4">
                  Founded in 2014 in the beautiful city of Udaipur, Book My Planner began as a small team with big
                  dreams. Our founder, Mohamand Zishan Hussain, recognized the need for professional, personalized event planning
                  services in Rajasthan.
                </p>
                <p className="mb-4">
                  What started as a passion project has grown into one of Udaipur's most trusted event planning
                  companies. We've had the privilege of planning over 1000 events, from intimate family gatherings to
                  grand destination weddings and high-profile corporate events.
                </p>
                <p className="mb-4">
                  Our success lies in our commitment to understanding each client's unique vision and bringing it to
                  life with creativity, precision, and attention to detail. Every event we plan is a testament to our
                  dedication to excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <AboutImage src={dreamsImg} alt="From Dreams to Reality" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 bg-white rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-[#8B1538]/10 rounded-full">
                    <Target className="h-8 w-8 text-[#8B1538]" />
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-8">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To create extraordinary experiences that exceed expectations, bringing dreams to life through
                  meticulous planning, creative design, and flawless execution. We are committed to making every
                  celebration a cherished memory.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-[#8B1538]/10 rounded-full">
                    <Eye className="h-8 w-8 text-[#8B1538]" />
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-8">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To be the leading event planning company in Rajasthan, known for innovation, excellence, and
                  personalized service. We envision a future where every celebration we touch becomes a masterpiece of
                  joy and elegance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#8B1538]/10 text-[#8B1538] mb-8">Our Values</Badge>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">What Drives Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Our core values guide everything we do, from the first consultation to the final celebration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 bg-white rounded-2xl text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#8B1538]/10 rounded-full">
                      <value.icon className="h-6 w-6 text-[#8B1538]" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#8B1538]/10 text-[#8B1538] mb-8">Our Team</Badge>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">Meet Our Experts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Our talented team brings passion, creativity, and expertise to every event we plan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
            {team.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-6 text-center group cursor-pointer hover:bg-[#f8e9ef] transition-colors min-h-[320px] flex flex-col justify-between ${member.name === "Mohamand Zishan Hussain" ? "ring-2 ring-[#8B1538]/30" : ""}`}
                onClick={() => {
                  if (member.name === "Mohamand Zishan Hussain") setOpenFounderModal(true);
                  if (member.name === "Zahra Bohara") setOpenZahraModal(true);
                  if (member.name === "Avinash Dayma") setOpenAvinashModal(true);
                }}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${member.name}`}
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full object-cover border-4 border-[#8B1538]/10 group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="font-playfair text-xl font-bold text-[#8B1538]">{member.name}</div>
                <div className="text-sm mb-1 text-[#6B1028] font-semibold">{member.role}</div>
                <div className="text-gray-700 text-sm whitespace-pre-line">{member.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Founder Modal */}
      <Dialog open={openFounderModal} onOpenChange={setOpenFounderModal}>
        <DialogContent className="max-w-lg w-[90vw] sm:w-full bg-[#fff0f6] text-[#2d0a1f] p-4 sm:p-8">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-[#8B1538]">Mohamand Zishan Hussain</DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-[#6B1028]">Founder</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center">
            <Image
              src="/images/founder1.jpg"
              alt="Mohamand Zishan Hussain"
              width={120}
              height={150}
              className="rounded-xl mb-4 object-cover border-2 border-[#8B1538]/30 w-[90px] h-[110px] sm:w-[120px] sm:h-[150px]"
            />
            <div className="text-[#2d0a1f] text-center mb-4 text-sm sm:text-base leading-relaxed">
              Mohamand Zishan Hussain is a visionary founder focused on creative leadership, team growth, and organizational excellence.
            </div>
            <ul className="list-disc list-inside text-[#6B1028] text-left mb-2 text-sm sm:text-base w-full max-w-xs mx-auto">
              <li>Creative leadership</li>
              <li>Team building</li>
              <li>Strategic planning</li>
            </ul>
          </div>
        </DialogContent>
      </Dialog>

      {/* Zahra Modal */}
      <Dialog open={openZahraModal} onOpenChange={setOpenZahraModal}>
        <DialogContent className="max-w-lg w-[90vw] sm:w-full bg-[#f0f6ff] text-[#1a2233] p-4 sm:p-8">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-[#8B1538]">Zahra Bohara</DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-[#6B1028]">Founder & Event Director</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center">
            <Image
              src="/images/founder.jpg"
              alt="Zahra Bohara"
              width={120}
              height={150}
              className="rounded-xl mb-4 object-cover border-2 border-[#8B1538]/30 w-[90px] h-[110px] sm:w-[120px] sm:h-[150px]"
            />
            <div className="text-[#1a2233] text-center mb-4 text-sm sm:text-base leading-relaxed">
              Zahra Bohara is the Founder & Event Director, specializing in luxury & destination event design, creative leadership, and client experience.
            </div>
            <ul className="list-disc list-inside text-[#6B1028] text-left mb-2 text-sm sm:text-base w-full max-w-xs mx-auto">
              <li>Luxury & destination event planning</li>
              <li>Team leadership</li>
              <li>Client relationship management</li>
            </ul>
          </div>
        </DialogContent>
      </Dialog>

      {/* Avinash Modal */}
      <Dialog open={openAvinashModal} onOpenChange={setOpenAvinashModal}>
        <DialogContent className="max-w-lg w-[90vw] sm:w-full bg-[#f6fff0] text-[#1a3322] p-4 sm:p-8">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-[#6B1028]">Avinash Dayma</DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-[#8B1538]">Co-Founder</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center">
            <div className="text-[#1a3322] text-center mb-4 text-sm sm:text-base leading-relaxed">
              Avinash Dayma is the Co-Founder, focused on seamless operations, process innovation, and empowering the team for success.
            </div>
            <ul className="list-disc list-inside text-[#6B1028] text-left mb-2 text-sm sm:text-base w-full max-w-xs mx-auto">
              <li>Operations management</li>
              <li>Process optimization</li>
              <li>Team coordination</li>
            </ul>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}

function AboutImage({ src, alt }: { src: any, alt: string }) {
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
        width={600}
        height={500}
        quality={60}
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, 50vw"
        onLoadingComplete={() => setLoading(false)}
        className={loading ? 'opacity-0' : 'opacity-100'}
      />
    </div>
  );
}
