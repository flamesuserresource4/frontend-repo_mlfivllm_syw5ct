import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function supportsWebGL2() {
  try {
    const canvas = document.createElement('canvas')
    const gl2 = canvas.getContext && canvas.getContext('webgl2')
    return !!gl2
  } catch {
    return false
  }
}

export default function Hero() {
  const [webgl2, setWebgl2] = useState(null)

  useEffect(() => {
    setWebgl2(supportsWebGL2())
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {webgl2 === null ? (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        ) : webgl2 ? (
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        ) : (
          <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.35) 0, transparent 40%), radial-gradient(circle at 80% 30%, rgba(147,197,253,0.25) 0, transparent 45%), radial-gradient(circle at 50% 80%, rgba(14,165,233,0.25) 0, transparent 50%)',
              }}
            />
            <div className="relative z-10 flex h-full items-center justify-center">
              <div className="mx-6 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-blue-100 backdrop-blur">
                <p className="text-sm">Interactive 3D preview requires a modern browser with WebGL 2 support.</p>
                <p className="mt-1 text-xs text-blue-200/80">You’re seeing a lightweight fallback experience.</p>
              </div>
            </div>
          </div>
        )}
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
