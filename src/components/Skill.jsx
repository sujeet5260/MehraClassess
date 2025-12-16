import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  FaJsSquare,
  FaReact,
  FaNetworkWired,
  FaPython,
  FaPalette,
  FaBookOpen,
} from "react-icons/fa"
import { SiDatacamp } from "react-icons/si"
import { AiOutlineBarChart } from "react-icons/ai"

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
  return <div className={cn("px-6", className)} {...props} />
}

/* ---------------- Skills Data ---------------- */

const skills = [
  { name: "JavaScript", level: 95, icon: FaJsSquare, color: "#f7df1e" },
  { name: "React", level: 90, icon: FaReact, color: "#61dafb" },
  { name: "Mathematics", level: 88, icon: AiOutlineBarChart, color: "#a855f7" },
  { name: "Networking", level: 85, icon: FaNetworkWired, color: "#22c55e" },
  { name: "Python", level: 82, icon: FaPython, color: "#3776ab" },
  { name: "Data Science", level: 78, icon: SiDatacamp, color: "#06b6d4" },
  { name: "Web Design", level: 92, icon: FaPalette, color: "#ec4899" },
  { name: "Curriculum Design", level: 96, icon: FaBookOpen, color: "#f97316" },
]

/* ---------------- Main Component ---------------- */

export default function SkillsSection() {
  const sectionRef = useRef(null)
  const skillsRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current || !skillsRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const cards = Array.from(skillsRef.current.children)
    const bars = skillsRef.current.querySelectorAll(".progress-bar")

    gsap.fromTo(
      cards,
      { scale: 0.8, opacity: 0, y: 50 },
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
        },
      }
    )

    gsap.fromTo(
      bars,
      { width: "0%" },
      {
        width: (_, el) => el.getAttribute("data-width") + "%",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
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
            Skills & Expertise
          </h2>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning technology, mathematics, and educational methodologies.
          </p>
        </div>

        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Icon
                      className="w-8 h-8 mx-auto mb-2"
                      style={{ color: skill.color }}
                    />
                    <h3 className="font-sans text-lg font-bold text-card-foreground">
                      {skill.name}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-serif text-muted-foreground">
                        Proficiency
                      </span>
                      <span
                        className="font-serif font-medium"
                        style={{ color: skill.color }}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-border rounded-full h-2">
                      <div
                        className="progress-bar h-2 rounded-full transition-all duration-300"
                        data-width={skill.level}
                        style={{ background: skill.color }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
