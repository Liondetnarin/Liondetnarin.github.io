import { Card } from "./Card"
import { Star } from "lucide-react"

export function Skills() {
  const skills = [
    { name: "HTML", level: 3, img: "/img/html.png", desc: "Good in HTML5" },
    { name: "CSS", level: 3, img: "/img/css.png", desc: "Good in CSS" },
    { name: "JavaScript", level: 3, img: "/img/javascript.png", desc: "Used for dynamic frontend" },
    { name: "React", level: 3, img: "/img/react.png", desc: "Used React in projects" },
    { name: "Kotlin", level: 2, img: "/img/kotlin.png", desc: "Basic knowledge" },
    { name: "Python", level: 2, img: "/img/python.png", desc: "Basic knowledge" },
    { name: "PHP", level: 1, img: "/img/php.png", desc: "Starting to learn" },
    { name: "MongoDB", level: 3, img: "/img/mongodb.png", desc: "Used MongoDB in projects" },
    { name: "Firebase", level: 1, img: "/img/firebase.png", desc: "Starting to learn" },
    { name: "MySQL", level: 2, img: "/img/sql.png", desc: "Basic knowledge" },
    { name: "Git", level: 2, img: "/img/git.png", desc: "Basic Git commands" },
  ]

  return (
    <section id="skills" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
          My <span className="text-teal-600">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="flex flex-col items-center gap-3 hover:scale-105 transition-transform">
              <img src={skill.img} alt={skill.name} className="w-20 h-20 object-contain" />
              <h3 className="text-lg font-semibold text-slate-900">{skill.name}</h3>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < skill.level ? "fill-yellow-400 text-yellow-400" : "fill-slate-200 text-slate-200"}
                  />
                ))}
              </div>
              <p className="text-sm text-slate-600 text-center">{skill.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
