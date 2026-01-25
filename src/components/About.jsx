import { Flame, Lightbulb, Flag, Brain, BookPlus, Clock } from "lucide-react"

export function About() {
  const softSkills = [
    { icon: Flame, label: "Determination" },
    { icon: Lightbulb, label: "Creativity" },
    { icon: Flag, label: "Leadership" },
    { icon: Brain, label: "Problem Solving" },
    { icon: BookPlus, label: "Continuous Learning" },
    { icon: Clock, label: "Time Management" },
  ]

  return (
    <section id="about" className="min-h-screen py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
            <img
              src="/img/imgAbout.jpg"
              alt="About Detnarin"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              My <span className="text-teal-600">Education</span>
            </h2>
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">
              Bachelor of Science Program in <span className="text-teal-600">Computer Science</span> (4th Year)
            </h3>
            <h3 className="text-xl text-slate-700 mb-4">
              University of the Thai Chamber of Commerce (UTCC)
            </h3>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Coursework includes OOP, Web Development, Databases, Machine Learning, and Software Engineering, with
              practical experience using real tools to prepare for and apply in real-world development environments
              effectively.
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Soft <span className="text-teal-600">Skills</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {softSkills.map((skill) => (
                <div
                  key={skill.label}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white transition-all group"
                >
                  <div className="w-14 h-14 rounded-full border-2 border-slate-900 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all group-hover:scale-110">
                    <skill.icon size={24} />
                  </div>
                  <span className="text-sm font-medium text-slate-700 text-center">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
