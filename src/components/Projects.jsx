import { Card } from "./Card"
import { Button } from "./Button"
import { Code, Gamepad2, Smartphone } from "lucide-react"

export function Projects() {
  const projects = [
    {
      icon: Code,
      title: "UniFood",
      description:
        "3rd-year team project: Developed a restaurant review web app for university students with category filters, popularity ranking, and user ratings. Built with React + Vite, Spring Boot, and MongoDB.",
      link: "https://www.canva.com/design/DAGwCiICXvQ/8pfLt8FyJp0IMjkxQVoFLw/view?utm_content=DAGwCiICXvQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0281e5cf86",
    },
    {
      icon: Gamepad2,
      title: "Created game by UE5",
      description:
        "3rd-year team project for Computer Graphics course: Developed a horror 3D game using Unreal Engine 5, based on the UTCC campus. Designed models, gameplay, and presented via a YouTube demo.",
      link: "https://www.youtube.com/watch?v=dMLk6AdQNng",
    },
    {
      icon: Smartphone,
      title: "ListKeeper Android App",
      description:
        "3rd-year Mini individual project for Application Development for Mobile Devices course: Built ListKeeper, a list app using Android Studio (Kotlin) with local storage. Applied core mobile development concepts.",
      link: null,
    },
  ]

  return (
    <section id="projects" className="min-h-screen py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
          My <span className="text-teal-600">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col items-center text-center gap-4 hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
                <project.icon size={32} className="text-slate-900" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">{project.title}</h3>
              <p className="text-slate-600 leading-relaxed flex-1">{project.description}</p>
              {project.link && (
                <Button
                  as="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open(project.link, "_blank")
                  }}
                >
                  Read More
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
