import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Clock, Users, Star } from "lucide-react"
import Img1 from "../assets/Images/img1.jpeg"
import Img2 from "../assets/Images/img2.jpeg"
import Img3 from "../assets/Images/img3.jpeg"
import Img4 from "../assets/Images/img4.jpeg"
import Img5 from "../assets/Images/img5.jpeg"
import Img6 from "../assets/Images/img6.jpeg"
import Img7 from "../assets/Images/img7.jpeg"

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

function CardFooter({ className, ...props }) {
  return (
    <div
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

/* ---------------- Button Component ---------------- */

function Button({ className, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2",
        className
      )}
      {...props}
    />
  )
}

/* ---------------- GSAP Setup ---------------- */

gsap.registerPlugin(ScrollTrigger)

/* ---------------- Courses Data ---------------- */

const courses = [
  {
    title: "Mathematics",
    description:
      "Build strong mathematical concepts with complete syllabus coverage Practice smart with topic-wise tests and detailed solutions.",
    image: Img1,
    duration: "8 weeks",
    students: 1250,
    rating: 4.9,
  },
  {
    title: "Political Science",
    description:
      "Master Political Science with complete syllabus coverage Concept-based learning with exam-oriented test series.",
    image: Img2,
    duration: "10 weeks",
    students: 890,
    rating: 4.8,
  },
  {
    title: "Sub. Physics",
    description:
      "Clear concepts. Accurate numericals Physics made exam-ready.",
    image: Img3,
    duration: "12 weeks",
    students: 650,
    rating: 4.9,
  },
  {
    title: "Sub. Botany",
    description:
      "Where concepts grow and clarity blooms Botany preparation made structured and exam-ready 🌱",
    image: Img4,
    duration: "6 weeks",
    students: 420,
    rating: 4.7,
  },
  {
    title: "MP-GK Paper 1",
    description:
      "One paper. One seat. One clear strategy MP-GK Paper-1 made simple, structured, and scoring.",
    image: Img5,
    duration: "14 weeks",
    students: 380,
    rating: 4.8,
  },
  {
    title: "MP-GK MCQs",
    description:
      "Create beautiful, user-friendly websites using modern design principles and best practices.",
    image: Img6,
    duration: "8 weeks",
    students: 720,
    rating: 4.9,
  },
]

/* ---------------- Main Component ---------------- */

export default function CoursesSection() {
  const sectionRef = useRef(null)
  const coursesRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current || !coursesRef.current) return

    const cards = Array.from(coursesRef.current.children)

    gsap.fromTo(
      cards,
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
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
    <section ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Courses
          </h2>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive courses designed to help you master new skills and advance your career.
          </p>
        </div>

        <div ref={coursesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm font-serif">
                  New
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-sans text-xl font-bold text-card-foreground mb-3">
                  {course.title}
                </h3>
                <p className="font-serif text-muted-foreground mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-serif">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="font-serif">{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-serif">{course.rating}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button className="w-full font-serif">
                  View More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
