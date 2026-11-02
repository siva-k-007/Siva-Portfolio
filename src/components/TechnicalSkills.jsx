import { FaJava, FaCode } from 'react-icons/fa'
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiCursor,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { technicalSkills } from '../data/portfolioData'

// Logo for each skill, matched by the skill name used in portfolioData.js
// To add a new logo: import it above and add a line here
const skillIcons = {
  Java: { Icon: FaJava, color: '#f89820' },
  Python: { Icon: SiPython, color: '#3776ab' },
  JavaScript: { Icon: SiJavascript, color: '#f7df1e' },
  TypeScript: { Icon: SiTypescript, color: '#3178c6' },
  HTML: { Icon: SiHtml5, color: '#e34f26' },
  CSS: { Icon: SiCss, color: '#1572b6' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#06b6d4' },
  MySQL: { Icon: SiMysql, color: '#4479a1' },
  MongoDB: { Icon: SiMongodb, color: '#47a248' },
  Git: { Icon: SiGit, color: '#f05032' },
  GitHub: { Icon: SiGithub, color: '#ffffff' },
  Postman: { Icon: SiPostman, color: '#ff6c37' },
  'VS Code': { Icon: VscVscode, color: '#007acc' },
  Cursor: { Icon: SiCursor, color: '#ffffff' },
  // Antigravity has no public logo icon, so it uses a generic code icon
  Antigravity: { Icon: FaCode, color: '#8ab4f8' },
}

// Individual skill badge pill
export function SkillBadge({ name }) {
  const icon = skillIcons[name]

  return (
    <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-red-600/20 transition-colors duration-200">
      {/* Technology logo (skipped if no logo is defined for this skill) */}
      {icon && (
        <icon.Icon
          className="w-4 h-4 shrink-0"
          style={{ color: icon.color }}
          aria-hidden="true"
        />
      )}
      {name}
    </span>
  )
}

// Category skill card containing grouped badges
export function SkillCard({ category, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_0_25px_rgba(255,42,42,0.15)] transition-all duration-300"
    >
      <h3 className="text-lg font-black uppercase text-white pb-3 border-b border-white/10 mb-4 tracking-wider">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} />
        ))}
      </div>
    </div>
  )
}

// Main Technical Skills section
export default function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Blurred background glow circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Centred Section Header */}
      <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] text-xs uppercase tracking-widest font-semibold mb-4">
          Technical Stack
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
          My Skillset
        </h2>
        <p className="text-white/50 text-base md:text-lg">
          Technologies, frameworks, and developer tools I leverage to build robust applications.
        </p>
      </div>

      {/* Responsive Categories Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {technicalSkills.categories.map((category, index) => (
          <SkillCard
            key={category.title}
            category={category}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

