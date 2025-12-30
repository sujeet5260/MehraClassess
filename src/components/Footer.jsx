import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-sans text-2xl font-bold mb-4">Mohan Mehra</h3>
            <p className="font-serif text-background/80 leading-relaxed">
              Passionate educator dedicated to helping students achieve their learning goals through innovative teaching
              methods.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-serif">
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-background/80 hover:text-background transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#courses" className="text-background/80 hover:text-background transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-lg font-bold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>

              <a
                href="mailto:mohanmehra5830@gmail.com"
                className="text-background/80 hover:text-background transition-colors"
                title="Send Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="font-serif text-background/60">
            © 2025 Mohan Mehra. All rights reserved. Built with passion for education.
          </p>
        </div>
      </div>
    </footer>
  )
}
