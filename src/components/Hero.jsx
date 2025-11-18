import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to enhance contrast, non-blocking */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-blue-300/80">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Website Development Studio
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight text-white">
            We craft modern, animated websites that convert
          </h1>
          <p className="mt-6 text-base sm:text-lg text-blue-200/90">
            From landing pages to full web apps, we combine motion, 3D, and best-in-class UX to elevate your brand.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-xl bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-colors">Get a Quote</a>
            <a href="/portfolio" className="px-5 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors">See Our Work</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}