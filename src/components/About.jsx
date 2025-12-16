import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GraduationCap, Users, Award } from "lucide-react"

/* ---------- Card Components (Merged) ---------- */

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

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
    <div
      className={cn("px-6", className)}
      {...props}
    />
  )
}

/* ---------- GSAP Setup ---------- */

gsap.registerPlugin(ScrollTrigger)

/* ---------- Main Component ---------- */

export default function AboutSection() {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return

    const cards = Array.from(cardsRef.current.children)

    const anim = gsap.fromTo(
      cards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
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
      anim.scrollTrigger?.kill()
      anim.kill()
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="font-serif text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over 8 years of experience in education, I specialize in making complex concepts accessible and
            engaging. My teaching philosophy centers on creating inclusive learning environments where every student can
            thrive.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-sans text-xl font-bold text-card-foreground mb-4">
                Education
              </h3>
              <p className="font-serif text-muted-foreground">
                M.Ed in Curriculum & Instruction from Stanford University. Specialized in digital learning methodologies.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-sans text-xl font-bold text-card-foreground mb-4">
                Experience
              </h3>
              <p className="font-serif text-muted-foreground">
                8+ years teaching experience with over 2,000 students across various subjects and age groups.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-sans text-xl font-bold text-card-foreground mb-4">
                Recognition
              </h3>
              <p className="font-serif text-muted-foreground">
                Excellence in Teaching Award recipient and certified in multiple educational technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
