import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Award, Users, Heart, Target, Eye, Lightbulb } from "lucide-react"
import dreamsImg from "@/public/images/dreams.jpg"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

const team = [
  {
    name: "Rajesh Sharma",
    role: "Founder & CEO",
    experience: "12+ Years",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Visionary leader with extensive experience in luxury event planning.",
  },
  {
    name: "Priya Agarwal",
    role: "Creative Director",
    experience: "8+ Years",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Award-winning designer specializing in wedding and corporate events.",
  },
  {
    name: "Vikram Singh",
    role: "Operations Manager",
    experience: "10+ Years",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in logistics and seamless event execution.",
  },
  {
    name: "Anjali Mehta",
    role: "Client Relations Head",
    experience: "6+ Years",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dedicated to ensuring exceptional client experiences.",
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
  return (
    <div className="about-theme min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#8B1538] to-[#6B1028] text-white">
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
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-6 md:p-10">
            <div className="space-y-6">
              <Badge className="bg-[#8B1538]/10 text-[#8B1538]">Our Story</Badge>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">From Dreams to Reality</h2>
              <div className="space-y-4 text-gray-600">
                <p className="mb-4">
                  Founded in 2014 in the beautiful city of Udaipur, Book My Planner began as a small team with big
                  dreams. Our founder, Rajesh Sharma, recognized the need for professional, personalized event planning
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
              <Image
                src={dreamsImg}
                alt="From Dreams to Reality"
                width={600}
                height={500}
                quality={60}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#8B1538] text-white p-6 rounded-xl">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
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
      </section>

      {/* Our Values */}
      <section className="py-20">
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
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#8B1538]/10 text-[#8B1538] mb-8">Our Team</Badge>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">Meet the Experts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Our passionate team of professionals brings together years of experience, creativity, and dedication to
              make your events extraordinary.
            </p>
          </div>
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="-ml-4 md:-ml-8">
              {team.map((member, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                      <div className="relative mb-6">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={200}
                          height={200}
                          className="w-32 h-32 rounded-full mx-auto object-cover"
                        />
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#8B1538] text-white px-3 py-1 rounded-full text-xs">
                          {member.experience}
                        </div>
                      </div>
                      <h4 className="font-semibold text-lg mb-1">{member.name}</h4>
                      <p className="text-[#8B1538] font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <Footer />
    </div>
  )
}
