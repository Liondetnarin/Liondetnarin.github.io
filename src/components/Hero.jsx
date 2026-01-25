import { Github, Mail } from "lucide-react"
import { Button } from "./Button"

export function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/portfolio/เดชนรินทร์ ไชยอักษร - resume.pdf"
    link.download = "เดชนรินทร์ ไชยอักษร - resume.pdf"
    link.click()
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl ring-4 ring-slate-100">
            <img
              src="/img/imgProfile.jpg"
              alt="Detnarin Chaiaksorn"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-xl md:text-2xl text-slate-600 mb-2">Hello, Myself</h3>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
              Detnarin Chaiaksorn
            </h1>
            <h3 className="text-xl md:text-2xl text-slate-700 mb-6">
              And I'm looking for a <span className="text-teal-600 font-semibold">Software Development</span> Internship
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              to apply academic knowledge and gain hands-on experience. I'm interested in roles such as App Developer,
              Web Developer or Full-Stack Developer, depending on alignment with my skills and the organization's needs.
              Eager to contribute effectively and grow alongside the team.
            </p>

            <div className="flex gap-4 mb-8 justify-center md:justify-start">
              <a
                href="https://github.com/Liondetnarin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=detnarin.cha@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>

            <Button onClick={handleDownloadCV}>Download CV</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
