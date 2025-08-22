"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    if (typeof window !== "undefined" && sectionRef.current) {
      gsap.fromTo(
        [formRef.current, ".contact-info"],
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)

    // Animate button on submit
    gsap.to(".submit-btn", {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    })
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your learning journey? I'd love to hear from you and discuss how I can help you achieve your
            goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="contact-info space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold text-card-foreground">Email</h3>
                    <p className="font-serif text-muted-foreground">sarah.johnson@email.com</p>
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold text-card-foreground">Phone</h3>
                    <p className="font-serif text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold text-card-foreground">Location</h3>
                    <p className="font-serif text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-serif text-sm font-medium text-card-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full font-serif"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-serif text-sm font-medium text-card-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full font-serif"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-serif text-sm font-medium text-card-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full font-serif min-h-32"
                    placeholder="Tell me about your learning goals..."
                  />
                </div>

                <Button
                  type="submit"
                  className="submit-btn w-full bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg py-3"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
