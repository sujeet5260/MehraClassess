import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const heroRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    if (heroRef.current) {
      // Ensure all elements are hidden initially
      gsap.set([imageRef.current, textRef.current?.children], {
        opacity: 0,
      })

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.fromTo(
        imageRef.current,
        { scale: 0.85, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 1.2 }
      )
        .fromTo(
          textRef.current?.children || [],
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.25,
          },
          "-=0.6" // overlap with image animation
        )
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 px-4 relative"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div ref={imageRef} className="flex justify-center">
          <div className="relative">
            <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                src="/teacher-portrait.png"
                alt="Sarah Johnson - Teacher"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-accent rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl sm:text-2xl">📚</span>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div ref={textRef} className="text-center md:text-left space-y-6">
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Mohan Mehra
          </h1>
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-primary font-medium">
            Passionate Online Educator
          </p>
          <p className="font-serif text-base sm:text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
            Helping Students Learn with Ease through innovative teaching methods and personalized learning experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#courses"
              className="px-6 py-3 text-base sm:text-lg rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-center"
            >
              View My Courses
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-base sm:text-lg rounded-lg border border-primary text-primary font-serif text-center hover:bg-primary/10"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  )
}
