import { projects } from '../data/portfolioData'

// Projects section component showcasing featured development work
export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Centred Section Header */}
      <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] text-xs uppercase tracking-widest font-semibold mb-4">
          Featured Work
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
          Recent Projects
        </h2>
        <p className="text-white/50 text-base md:text-lg">
          Applications and software systems built with full-stack Java and modern web tools.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {projects.map((project, index) => (
          <div
            key={project.id || project.number}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className={`bg-white/5 backdrop-blur-md border rounded-2xl p-8 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 group ${
              project.isFlagship
                ? 'border-red-500/40 hover:border-red-500/80 hover:shadow-[0_0_30px_rgba(255,42,42,0.2)]'
                : 'border-white/10 hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(255,42,42,0.1)]'
            }`}
          >
            <div>
              {/* Card Top: Number and Flagship Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif italic text-2xl text-red-500/60 font-bold">
                  {project.number}
                </span>
                {project.badge && (
                  <span className="inline-block px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-white text-xs font-semibold uppercase tracking-wider">
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-white group-hover:text-[#ff2a2a] transition-colors duration-200 mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-white/65 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techTags.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black text-white text-xs font-bold transition-all duration-200 border border-white/20"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>Code</span>
                </a>
              )}
              {project.links.demo ? (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title}`}
                  className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-[#ff2a2a] hover:bg-red-600 text-white text-xs font-bold transition-all duration-200 shadow-md"
                >
                  <span>Live Demo</span>
                  <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              ) : (
                <span className="text-xs text-white/40 italic">
                  Demo Coming Soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

