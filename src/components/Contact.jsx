import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  emailjsConfig,
  personalInfo,
  socialLinks,
} from '../data/portfolioData'

// Contact section component with parallax background text and EmailJS form
export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  // Parallax scroll effect for the giant background word
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  // Handle form submission via EmailJS or mailto fallback
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const form = formRef.current
    const firstName = form.querySelector('#firstName')?.value?.trim() || ''
    const lastName = form.querySelector('#lastName')?.value?.trim() || ''
    const email = form.querySelector('#email')?.value?.trim() || ''
    const message = form.querySelector('#message')?.value?.trim() || ''

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      // Fallback: open mail client directly
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=Portfolio message from ${firstName} ${lastName}&body=${encodeURIComponent(
          `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
        )}`,
        '_blank'
      )
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Parallax Giant "Contact" Text in Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 top-0 pointer-events-none z-0 flex justify-center"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* Red Card in Front */}
      <div className="w-full flex justify-end relative z-10">
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white rounded-tl-3xl shadow-2xl"
        >
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/20">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/80">
              Reach Me
            </span>
            {socialLinks.instagram ? (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                DM on Instagram
              </a>
            ) : (
              <a
                href={socialLinks.linkedin || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                Connect on LinkedIn
              </a>
            )}
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column: Input Fields */}
              <div className="flex flex-col gap-8">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs uppercase tracking-widest text-white/70 mb-2 font-semibold"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="first_name"
                    required
                    placeholder="Your first name"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/60 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs uppercase tracking-widest text-white/70 mb-2 font-semibold"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="last_name"
                    placeholder="Your last name"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/60 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-widest text-white/70 mb-2 font-semibold"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    placeholder="your.email@example.com"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/60 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Right Column: Message Textarea */}
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-widest text-white/70 mb-2 font-semibold"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  placeholder="Tell me about your project, opportunity, or idea..."
                  className="w-full flex-1 bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/60 focus:border-white focus:outline-none resize-none min-h-[140px] transition-colors"
                />
              </div>
            </div>

            {/* Bottom Form Actions & Notes */}
            <div className="flex flex-col gap-6 pt-4 border-t border-white/20">
              {/* Permission Checkbox */}
              <div className="flex items-start space-x-3 text-xs text-white/80">
                <input
                  type="checkbox"
                  id="permission"
                  required
                  defaultChecked
                  className="mt-0.5 rounded accent-white cursor-pointer"
                />
                <label
                  htmlFor="permission"
                  className="cursor-pointer select-none"
                >
                  I agree that my submitted information may be used to respond
                  to this inquiry.
                </label>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <p className="text-xs text-white/80">
                    Your message will be sent directly to my inbox. I typically
                    respond within 24-48 hours.
                  </p>
                  <p className="text-xs text-white/60 mt-1">
                    Urgent inquiries:{' '}
                    <a
                      href={`mailto:${personalInfo.emails.primary}`}
                      className="underline hover:text-white font-medium"
                    >
                      {personalInfo.emails.primary}
                    </a>
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`rounded-full px-8 py-3.5 font-bold transition-all duration-300 inline-flex items-center space-x-3 text-sm tracking-wide ${
                    status === 'sending'
                      ? 'bg-white/20 border border-white/30 text-white/80 cursor-wait'
                      : status === 'success'
                        ? 'bg-green-600 border border-green-400 text-white shadow-lg'
                        : status === 'error'
                          ? 'bg-red-950 border border-red-500 text-red-200'
                          : 'group border-2 border-white text-white hover:bg-white hover:text-[#ff2a2a] cursor-pointer'
                  }`}
                >
                  {status === 'sending' && (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      <span>Sending...</span>
                    </>
                  )}
                  {status === 'success' && <span>Sent Successfully ✓</span>}
                  {status === 'error' && <span>Failed — Try Again</span>}
                  {status === 'idle' && (
                    <>
                      <span>Send Message</span>
                      <svg
                        className="w-4 h-4 fill-none stroke-current group-hover:translate-x-1.5 transition-transform"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

