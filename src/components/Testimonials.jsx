"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Star } from "lucide-react"

/* ---------------- Utility ---------------- */

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

/* ---------------- Card Components ---------------- */

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }) {
  return (
    <div className={cn("px-6", className)} {...props} />
  )
}

/* ---------------- Testimonials Data ---------------- */

const testimonials = [
  {
    name: "Alex Chen",
    role: "Software Developer",
    content:
      "Sarah's JavaScript course transformed my career. Her teaching style is clear, engaging, and practical. I landed my dream job within 3 months of completing the course!",
    rating: 5,
    avatar: "/software-developer-headshot.png",
  },
  {
    name: "Maria Rodriguez",
    role: "Data Analyst",
    content:
      "The Data Science with Python course exceeded my expectations. Sarah breaks down complex concepts into digestible pieces. Highly recommended!",
    rating: 5,
    avatar: "/data-analyst-headshot.png",
  },
  {
    name: "David Kim",
    role: "Web Designer",
    content:
      "As someone new to web design, Sarah's course gave me the confidence and skills I needed. The projects were challenging yet achievable.",
    rating: 5,
    avatar: "/web-designer-headshot.png",
  },
]

/* ---------------- Main Component ---------------- */

export default function TestimonialsSection() {
  const sectionRef = useRef(null)
  const testimonialsRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current || !testimonialsRef.current) return

    const cards = Array.from(testimonialsRef.current.children)

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Students Say
          </h2>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from students who have transformed their careers through our courses.
          </p>
        </div>

        <div ref={testimonialsRef} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="font-serif text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-sans font-bold text-card-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="font-serif text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
