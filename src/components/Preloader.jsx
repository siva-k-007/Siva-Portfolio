import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

// Preloader component with sliding red shutter and water-fill text reveal
export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  // Timer to dismiss preloader after water-fill animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex items-center justify-center pointer-events-auto"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Inner Brand Name Container */}
          <motion.div
            className="relative text-5xl md:text-7xl font-black tracking-tighter select-none"
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Background Base Copy */}
            <span className="text-red-900/30">
              {personalInfo.brandName}
              <span>.</span>
            </span>

            {/* Foreground Water-Fill Copy */}
            <motion.span
              className="absolute inset-0 text-white"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}
            >
              {personalInfo.brandName}
              <span className="text-black">.</span>
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

