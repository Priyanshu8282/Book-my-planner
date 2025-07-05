"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  Heart,
  Star,
  Users,
  Calendar,
  Award,
  ArrowRight,
  Play,
  CheckCircle,
  Sparkles,
  Camera,
  Music,
  Utensils,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

const stats = [
  // { number: "500+", label: "Happy Couples", icon: Heart },
  // { number: "10+", label: "Years Experience", icon: Award },
  // { number: "1000+", label: "Events Planned", icon: Calendar },
  // { number: "50+", label: "Team Members", icon: Users },
]

const services = [
  {
    title: "Wedding Planning",
    description: "Complete wedding planning from engagement to reception",
    icon: Heart,
    features: ["Venue Selection", "Decoration", "Catering", "Photography"],
  },
  {
    title: "Corporate Events",
    description: "Professional corporate event management solutions",
    icon: Users,
    features: ["Conferences", "Product Launches", "Team Building", "Seminars"],
  },
  {
    title: "MICE Solutions",
    description: "Meetings, Incentives, Conferences, and Exhibitions",
    icon: Calendar,
    features: ["Meeting Planning", "Incentive Tours", "Conference Management", "Exhibition Setup"],
  },
]

const testimonials = [
  {
    name: "Priya & Rahul",
    event: "Wedding",
    rating: 5,
    text: "Book My Planner made our dream wedding come true! Every detail was perfect.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Tech Corp Ltd.",
    event: "Corporate Event",
    rating: 5,
    text: "Professional service and flawless execution. Highly recommended!",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Anjali & Vikram",
    event: "Destination Wedding",
    rating: 5,
    text: "They handled everything perfectly. Our guests are still talking about it!",
    image: "/placeholder.svg?height=60&width=60",
  },
]

const heroImages = [
  {
    src: "/images/rich-dinner-tables-covered-with-blue-clothes-sparkling-glass.jpg",
    alt: "Rich Dinner Tables Covered with Blue Clothes and Sparkling Glass",
    title: "Elegant Dinner Receptions",
    subtitle: "Experience luxury dining at its finest"
  },
  {
    src: "/images/premium_photo-1681841600703-376f274b2fbc.png",
    alt: "Elegant Wedding Celebration",
    title: "Your Dream Wedding Awaits",
    subtitle: "Let us make your special day unforgettable"
  },
  {
    src: "/images/premium_photo-1724707432163-ff441db73077.png",
    alt: "Luxury Wedding Venue",
    title: "Luxury Wedding Planning",
    subtitle: "Creating moments that last forever"
  },
  {
    src: "/images/premium_photo-1677528572939-b7d73ee92796.png",
    alt: "Wedding Decoration",
    title: "Exquisite Decorations",
    subtitle: "Transform your venue into a magical space"
  }
]

function CountUp({ end, duration = 1200 }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const endNum = parseInt(end.replace(/\D/g, ""))
    if (isNaN(endNum)) return setCount(end)
    const increment = endNum / (duration / 16)
    let raf
    function animate() {
      start += increment
      if (start < endNum) {
        setCount(Math.floor(start))
        raf = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    animate()
    return () => raf && cancelAnimationFrame(raf)
  }, [end, duration])
  return <span>{typeof count === 'number' ? count + (end.includes("+") ? "+" : "") : count}</span>
}

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const router = useRouter()
  const headingText = "Design your desire into reality"
  const words = headingText.split(" ")

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="home-theme min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden hero-pattern animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-12 md:py-0">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 animate-slide-up text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                  {words.map((word, idx) => (
                    <motion.span
                      key={idx}
                      className="inline-block mr-2"
                      initial={{ opacity: 0, y: 60 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6">
                  With over 10 years of expertise in the events industry, we specialize in delivering exceptional
                  Wedding Events, Corporate Events, and MICE solutions in the beautiful city of Udaipur.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-[#8B1538] hover:bg-[#6B1028] text-white group"
                  onClick={() => router.push('/contact')}
                >
                  Plan Your Event
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white group"
                  onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Our Story
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-[#8B1538] group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="font-playfair text-xl md:text-2xl font-bold text-[#8B1538]">
                      <CountUp end={stat.number} />
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in order-first lg:order-last">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-2">{image.title}</h3>
                      <p className="text-sm md:text-base text-white/90">{image.subtitle}</p>
                    </div>
                  </div>
                ))}
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide ? 'bg-white w-4' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 animate-fade-in">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="bg-[#8B1538]/10 text-[#8B1538] mb-8">Our Services</Badge>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Explore our range of event planning services tailored to your needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group transition-all duration-300 border-0 rounded-2xl animate-slide-up"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-3 md:p-4 bg-[#8B1538]/10 rounded-full group-hover:bg-[#8B1538] transition-colors">
                      <service.icon className="h-6 w-6 md:h-8 md:w-8 text-[#8B1538] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="font-playfair text-lg md:text-xl font-bold text-center mb-4">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 text-center mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-[#8B1538] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-[#8B1538] hover:bg-[#6B1028]" onClick={() => router.push('/services')}>Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 animate-fade-in">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div>
                <Badge className="bg-[#8B1538]/10 text-[#8B1538] mb-4">Why Choose Us</Badge>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Your Dreams, Our Expertise</h2>
                <p className="text-gray-600 leading-relaxed">
                  Based in the royal city of Udaipur, we bring together creativity, precision, and dedication to create
                  unforgettable experiences that exceed your expectations.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  // { icon: Award, title: "10+ Years Experience", desc: "Decade of excellence in event planning" },
                  { icon: Users, title: "Expert Team", desc: "Seasoned professionals dedicated to your success" },
                  { icon: Heart, title: "Personalized Service", desc: "Every event is unique and tailored to you" },
                  { icon: CheckCircle, title: "Seamless Execution", desc: "Flawless planning and perfect execution" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="p-2 bg-[#8B1538]/10 rounded-lg group-hover:bg-[#8B1538] transition-colors">
                      <item.icon className="h-5 w-5 text-[#8B1538] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-[#8B1538]/10 p-6 rounded-2xl text-center">
                    <Camera className="h-8 w-8 text-[#8B1538] mx-auto mb-2" />
                    <h4 className="font-semibold">Photography</h4>
                  </div>
                  <div className="bg-[#D4AF37]/10 p-6 rounded-2xl text-center">
                    <Music className="h-8 w-8 text-[#D4AF37] mx-auto mb-2" />
                    <h4 className="font-semibold">Entertainment</h4>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-[#E8B4B8]/20 p-6 rounded-2xl text-center">
                    <Utensils className="h-8 w-8 text-[#8B1538] mx-auto mb-2" />
                    <h4 className="font-semibold">Catering</h4>
                  </div>
                  <div className="bg-[#8B1538]/10 p-6 rounded-2xl text-center">
                    <Sparkles className="h-8 w-8 text-[#8B1538] mx-auto mb-2" />
                    <h4 className="font-semibold">Decoration</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#8B1538] text-white animate-fade-in">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="bg-white/20 text-white mb-8">Testimonials</Badge>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">What Our Clients Say</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Hear from those who have celebrated with us.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 animate-slide-up">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 italic">"{testimonials[currentTestimonial].text}"</blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                    <div className="text-white/70 text-sm">{testimonials[currentTestimonial].event}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
