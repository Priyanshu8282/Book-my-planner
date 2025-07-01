import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  Heart,
  Users,
  Calendar,
  Camera,
  Music,
  Utensils,
  Sparkles,
  MapPin,
  CheckCircle,
  ArrowRight,
  Star,
  Gift,
  Plane,
} from "lucide-react"

const services = [
  {
    title: "Wedding Planning",
    description: "Complete wedding planning services from engagement to reception",
    icon: Heart,
    image: "/images/groom-putting-ring-bride-s-finger.jpg",
    features: [
      "Pre-wedding ceremonies",
      "Venue selection & booking",
      "Decoration & themes",
      "Catering arrangements",
      "Photography & videography",
      "Entertainment & music",
      "Guest management",
      "Honeymoon planning",
    ],
    packages: [
      { name: "Basic", price: "₹2,50,000", features: ["Venue booking", "Basic decoration", "Catering for 200"] },
      {
        name: "Premium",
        price: "₹5,00,000",
        features: ["Everything in Basic", "Photography", "Entertainment", "Luxury decoration"],
      },
      {
        name: "Royal",
        price: "₹10,00,000",
        features: ["Everything in Premium", "Destination wedding", "Celebrity entertainment", "Luxury transport"],
      },
    ],
  },
  {
    title: "Corporate Events",
    description: "Professional corporate event management solutions",
    icon: Users,
    image: "/images/Corporate.jpg",
    features: [
      "Conference planning",
      "Product launches",
      "Team building events",
      "Annual meetings",
      "Award ceremonies",
      "Seminars & workshops",
      "Networking events",
      "Brand activations",
    ],
    packages: [
      { name: "Startup", price: "₹50,000", features: ["Small venue", "Basic AV setup", "Refreshments for 50"] },
      {
        name: "Corporate",
        price: "₹2,00,000",
        features: ["Premium venue", "Full AV setup", "Catering for 200", "Branding"],
      },
      {
        name: "Enterprise",
        price: "₹5,00,000",
        features: ["Luxury venue", "Complete production", "Multi-day events", "Celebrity speakers"],
      },
    ],
  },
  {
    title: "MICE Solutions",
    description: "Meetings, Incentives, Conferences, and Exhibitions",
    icon: Calendar,
    image: "/images/global_meetings_and_conferences.jpg",
    features: [
      "Meeting planning",
      "Incentive tours",
      "Conference management",
      "Exhibition setup",
      "Delegate management",
      "Accommodation booking",
      "Transportation",
      "Cultural programs",
    ],
    packages: [
      {
        name: "Essential",
        price: "₹1,00,000",
        features: ["Basic meeting setup", "Local transport", "Standard accommodation"],
      },
      {
        name: "Professional",
        price: "₹3,00,000",
        features: ["Full conference setup", "Luxury accommodation", "Cultural activities"],
      },
      {
        name: "Platinum",
        price: "₹7,00,000",
        features: ["Multi-city tours", "Luxury experiences", "VIP treatment", "Custom itinerary"],
      },
    ],
  },
]

const additionalServices = [
  { icon: Camera, title: "Photography & Videography", desc: "Professional capture of your special moments" },
  { icon: Music, title: "Entertainment", desc: "Live music, DJs, and cultural performances" },
  { icon: Utensils, title: "Catering Services", desc: "Multi-cuisine catering with customized menus" },
  { icon: Sparkles, title: "Decoration & Themes", desc: "Creative decoration and thematic designs" },
  { icon: MapPin, title: "Venue Selection", desc: "Perfect venues for every occasion and budget" },
  { icon: Gift, title: "Gift & Favors", desc: "Customized gifts and wedding favors" },
  { icon: Plane, title: "Destination Events", desc: "Exotic locations for memorable celebrations" },
  { icon: Star, title: "Celebrity Management", desc: "Celebrity appearances and performances" },
]

export default function ServicesPage() {
  return (
    <div className="services-theme min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#8B1538] to-[#6B1028] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-white/20 text-white mb-8">Our Services</Badge>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-8">Comprehensive Event Solutions</h1>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              From intimate gatherings to grand celebrations, we offer complete event planning services tailored to your
              needs and budget. Let us bring your vision to life with our expertise and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          {services.map((service, index) => (
            <div key={index} className={`mb-20 p-6 md:p-10 bg-white rounded-2xl`}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-[#8B1538]/10 rounded-full">
                      <service.icon className="h-6 w-6 text-[#8B1538]" />
                    </div>
                    <Badge className="bg-[#8B1538]/10 text-[#8B1538]">{service.title}</Badge>
                  </div>

                  <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">{service.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-[#8B1538] flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-xl w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50 mt-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#8B1538]/10 text-[#8B1538] mb-8">Additional Services</Badge>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">Complete Event Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              We offer a comprehensive range of additional services to make your event truly exceptional and memorable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#8B1538]/10 rounded-full group-hover:bg-[#8B1538] transition-colors">
                      <service.icon className="h-6 w-6 text-[#8B1538] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#8B1538]/10 text-[#8B1538] mb-6">Our Process</Badge>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              Our systematic approach ensures every detail is perfect and your event exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your vision and requirements" },
              { step: "02", title: "Planning", desc: "Detailed planning and timeline creation" },
              { step: "03", title: "Execution", desc: "Flawless execution of your event" },
              { step: "04", title: "Follow-up", desc: "Post-event support and feedback" },
            ].map((process, index) => (
              <div key={index} className="text-center relative animate-slide-up">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#6B1028] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 shadow-lg border-4 border-white">
                  {process.step}
                </div>
                <h4 className="font-semibold text-lg mb-2">{process.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{process.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-[#8B1538]/30 to-[#6B1028]/30 -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
