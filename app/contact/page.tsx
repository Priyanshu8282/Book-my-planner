"use client"

import type React from "react"

import { useState } from "react"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { toast, Toaster } from "react-hot-toast"
import emailjs from '@emailjs/browser'
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    city: "",
    email: "",
    service: "",
    details: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mapLoading, setMapLoading] = useState(true)
  const mapRef = useRef<HTMLIFrameElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Prepare the template params for EmailJS
    const templateParams = {
      name: formData.fullName,
      mobile: formData.mobile,
      city: formData.city,
      email: formData.email,
      service: formData.service,
      message: formData.details,
    }

    try {
      await emailjs.send(
        'service_ah3kgpm', // Service ID
        'template_tthk3xw', // Template ID
        templateParams,
        'golUlTZSdF35rUnxy' // Public Key
      )
      toast.success(`Thank you, ${formData.fullName}! Your message has been sent.`)
      setFormData({
        fullName: "",
        mobile: "",
        city: "",
        email: "",
        service: "",
        details: "",
      })
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
      console.error("Error sending message:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-10 md:py-16 bg-gradient-to-r from-[#8B1538] to-[#6B1028] text-white"
      >
        <div className="container mx-auto px-2 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
            <Badge className="bg-white/20 text-white">Contact Us</Badge>
            <h1 className="font-playfair text-3xl md:text-5xl font-bold">Let's Create Something Magical</h1>
            <p className="text-base md:text-xl text-white/90 leading-relaxed">
              Have a question or ready to start planning your event? Get in touch with our team of experts and let's
              bring your vision to life.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="py-6 md:py-12"
      >
        <div className="container mx-auto px-2 md:px-8">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-start">
            {/* Contact Info */}
            <div className="flex flex-col gap-6 order-1 lg:order-1">
              <Card className="border-0 rounded-2xl">
                <CardContent className="p-6 md:p-8">
                  <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-[#8B1538]/10 rounded-full">
                        <Mail className="h-6 w-6 text-[#8B1538]" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email Address</h3>
                        <p className="text-gray-600">bookmyplanner@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-[#8B1538]/10 rounded-full">
                        <Phone className="h-6 w-6 text-[#8B1538]" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Mobile Number</h3>
                        <a href="tel:917014720675" className="text-gray-600 hover:text-[#8B1538] font-semibold transition-colors">+91 70147 20675</a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-[#8B1538]/10 rounded-full">
                        <MapPin className="h-6 w-6 text-[#8B1538]" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Our Location</h3>
                        <p className="text-gray-600">491 Ambamata Scheme, Udaipur - 313001, Rajasthan, India</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-[#8B1538]/10 rounded-full">
                        <Clock className="h-6 w-6 text-[#8B1538]" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Working Hours</h3>
                        <p className="text-gray-600">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                        <p className="text-gray-600">Sunday: By Appointment Only</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="order-2 lg:order-2">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-4 md:p-6">
                  <div className="mb-4 md:mb-8">
                    <h2 className="font-playfair text-xl md:text-3xl font-bold mb-1 md:mb-2">Get in Touch</h2>
                    <p className="text-gray-600 text-sm md:text-base">
                      Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                      <div className="space-y-1 md:space-y-2">
                        <label htmlFor="fullName" className="text-xs md:text-sm font-medium">
                          Full Name
                        </label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="placeholder:text-neutral-700"
                        />
                      </div>
                      <div className="space-y-1 md:space-y-2">
                        <label htmlFor="mobile" className="text-xs md:text-sm font-medium">
                          Mobile No.
                        </label>
                        <Input
                          id="mobile"
                          name="mobile"
                          type="tel"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="Your mobile number"
                          required
                          className="placeholder:text-neutral-700"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                      <div className="space-y-1 md:space-y-2">
                        <label htmlFor="city" className="text-xs md:text-sm font-medium">
                          City
                        </label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Your city"
                          required
                          className="placeholder:text-neutral-700"
                        />
                      </div>
                      <div className="space-y-1 md:space-y-2">
                        <label htmlFor="email" className="text-xs md:text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          required
                          className="placeholder:text-neutral-700"
                        />
                      </div>
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <label htmlFor="service" className="text-xs md:text-sm font-medium">
                        Selected Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full border rounded px-3 py-2 text-neutral-700"
                      >
                        <option value="">Select a service</option>
                        <option value="Wedding Planning">Wedding Planning</option>
                        <option value="Corporate Events">Corporate Events</option>
                        <option value="Birthday Parties">Birthday Parties</option>
                        <option value="Conferences">Conferences</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <label htmlFor="details" className="text-xs md:text-sm font-medium">
                        Details
                      </label>
                      <Textarea
                        id="details"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Tell us about your event and requirements"
                        rows={4}
                        required
                        className="placeholder:text-neutral-700"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#8B1538] hover:bg-[#6B1028]" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Map Full Width at Bottom */}
          <div className="mt-8">
            <Card className="border-0 rounded-2xl overflow-hidden">
              <CardContent className="p-0 relative min-h-[400px] flex items-center justify-center">
                {mapLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10">
                    <Skeleton className="size-16 rounded-lg" />
                  </div>
                )}
                <iframe
                  ref={mapRef}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.1234567890123!2d73.71234567890123!3d24.56789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3947e9c0c0c0c0c0%3A0x0!2s491%20Ambamata%20Scheme%2C%20Udaipur%2C%20Rajasthan%20313001!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[400px]"
                  onLoad={() => setMapLoading(false)}
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
