"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const skills = [
  { name: "JavaScript", level: 95, icon: "💻" },
  { name: "React", level: 90, icon: "⚛️" },
  { name: "Mathematics", level: 88, icon: "📊" },
  { name: "Networking", level: 85, icon: "🌐" },
  { name: "Python", level: 82, icon: "🐍" },
  { name: "Data Science", level: 78, icon: "📈" },
  { name: "Web Design", level: 92, icon: "🎨" },
  { name: "Curriculum Design", level: 96, icon: "📚" },
]

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && sectionRef.current) {
      // Animate skill cards
      gsap.fromTo(
        skillsRef.current?.children || [],
        {
          scale: 0.8,
          opacity: 0,
          y: 50,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Animate progress bars
      gsap.fromTo(
        ".progress-bar",
        { width: "0%" },
        {
          width: (i, target) => target.getAttribute("data-width") + "%",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6">Skills & Expertise</h2>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning technology, mathematics, and educational methodologies.
          </p>
        </div>

        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <h3 className="font-sans text-lg font-bold text-card-foreground">{skill.name}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-serif text-muted-foreground">Proficiency</span>
                    <span className="font-serif font-medium text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div
                      className="progress-bar bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
                      data-width={skill.level}
                    ></div>
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
