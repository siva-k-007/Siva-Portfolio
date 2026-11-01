import { softSkillsList } from '../data/portfolioData'

// Soft Skills section component highlighting personal and team attributes
export default function SoftSkills() {
  return (
    <section
      id="soft-skills"
      className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden border-t border-white/5"
    >
      {/* Header */}
      <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] text-xs uppercase tracking-widest font-semibold mb-4">
          Core Strengths
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
          Soft Skills
        </h2>
        <p className="text-white/50 text-base md:text-lg">
          Essential professional habits that drive productive collaboration and quality delivery.
        </p>
      </div>

      {/* Grid of Soft Skills */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {softSkillsList.map((skill, index) => (
          <div
            key={skill.name}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="text-4xl block mb-4" role="img" aria-label={skill.name}>
                {skill.icon}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                {skill.name}
              </h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mt-2">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
