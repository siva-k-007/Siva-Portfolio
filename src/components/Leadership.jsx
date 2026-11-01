import { leadershipList } from '../data/portfolioData'

// Individual timeline item component
export function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16">
      {/* Even Index: Card on Left */}
      {isEven ? (
        <>
          <div
            data-aos="fade-right"
            className="w-full pl-12 md:pl-0 md:w-[45%] md:text-right"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(255,42,42,0.15)] transition-all duration-300 group">
              <div className="flex mb-3 md:justify-end">
                <span className="inline-block px-3 py-1 rounded-full bg-[#ff2a2a]/15 text-[#ff2a2a] text-xs font-semibold uppercase tracking-wider border border-[#ff2a2a]/30">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#ff2a2a] transition-colors duration-200 mb-1">
                {item.title}
              </h3>
              <p className="font-mono text-xs uppercase tracking-wider text-red-400 font-semibold mb-3">
                {item.role}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>

          {/* Glowing Red Dot */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_12px_#ff2a2a] border-2 border-black z-20" />

          {/* Empty Spacer on Right */}
          <div className="hidden md:block md:w-[45%]" />
        </>
      ) : (
        <>
          {/* Odd Index: Empty Spacer on Left */}
          <div className="hidden md:block md:w-[45%]" />

          {/* Glowing Red Dot */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_12px_#ff2a2a] border-2 border-black z-20" />

          {/* Card on Right */}
          <div
            data-aos="fade-left"
            className="w-full pl-12 md:pl-0 md:w-[45%] md:text-left"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(255,42,42,0.15)] transition-all duration-300 group">
              <div className="flex mb-3 md:justify-start">
                <span className="inline-block px-3 py-1 rounded-full bg-[#ff2a2a]/15 text-[#ff2a2a] text-xs font-semibold uppercase tracking-wider border border-[#ff2a2a]/30">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#ff2a2a] transition-colors duration-200 mb-1">
                {item.title}
              </h3>
              <p className="font-mono text-xs uppercase tracking-wider text-red-400 font-semibold mb-3">
                {item.role}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// Leadership & Engagement section component
export default function Leadership() {
  if (!leadershipList || leadershipList.length === 0) {
    return null
  }

  return (
    <section
      id="leadership"
      className="bg-[#0a0a0a] relative overflow-hidden pt-24 pb-28 px-6 md:px-12 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"
    >
      {/* Torn-paper divider at the top */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-8 md:h-12 rotate-180 fill-[#ff2a2a]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L50,40 L100,10 L150,35 L200,15 L250,45 L300,20 L350,40 L400,10 L450,35 L500,15 L550,40 L600,10 L650,35 L700,20 L750,45 L800,15 L850,40 L900,10 L950,35 L1000,15 L1050,40 L1100,20 L1150,45 L1200,10 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Header Centred */}
      <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-20 relative z-20">
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] text-xs uppercase tracking-widest font-semibold mb-4">
          Activities
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
          Leadership &amp; Engagement
        </h2>
        <p className="text-white/50 text-base md:text-lg">
          Collaborative initiatives, technical symposiums, and peer community engagement.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* 2px Gradient Center/Left Line */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />

        {/* List of items */}
        {leadershipList.map((item, index) => (
          <LeadershipItem key={item.title || index} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

