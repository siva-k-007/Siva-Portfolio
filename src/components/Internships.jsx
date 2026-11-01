import { internshipsList } from '../data/portfolioData'

// Internships section component displaying work experience
export default function Internships() {
  if (!internshipsList || internshipsList.length === 0) {
    return null
  }

  return (
    <section
      id="experience"
      className="bg-[#050505] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden border-t border-white/5"
    >
      {/* Centred Header */}
      <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] text-xs uppercase tracking-widest font-semibold mb-4">
          Experience
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
          Internships &amp; Training
        </h2>
        <p className="text-white/50 text-base md:text-lg">
          Hands-on development experience and practical industry training.
        </p>
      </div>

      {/* Internships List */}
      <div className="max-w-4xl mx-auto space-y-6">
        {internshipsList.map((item, index) => (
          <div
            key={item.organization + index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-2xl font-black text-white">
                  {item.role}
                </h3>
                <span className="text-lg font-bold text-[#ff2a2a]">
                  {item.organization}
                </span>
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-mono font-medium self-start md:self-auto">
                {item.duration}
              </span>
            </div>

            {/* Skills Gained */}
            {item.skills && item.skills.length > 0 && (
              <div className="mb-4">
                <span className="text-xs uppercase tracking-wider text-white/50 font-semibold block mb-2">
                  Key Competencies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            {item.tech && item.tech.length > 0 && (
              <div>
                <span className="text-xs uppercase tracking-wider text-white/50 font-semibold block mb-2">
                  Technologies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

