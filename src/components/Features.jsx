import { motion } from 'framer-motion'
import { Sparkles, Gauge, ScanLine, Smartphone, Layers, Zap } from 'lucide-react'

const features = [
  { icon: Sparkles, title: 'Modern Aesthetics', desc: 'Clean, minimal, and on-brand designs with subtle 3D and tasteful motion.' },
  { icon: Gauge, title: 'Performance First', desc: 'Optimized for speed, accessibility, and SEO to boost your reach.' },
  { icon: ScanLine, title: '3D & Interactions', desc: 'Spline, micro-interactions and scroll-based animations that delight.' },
  { icon: Smartphone, title: 'Responsive & Mobile', desc: 'Perfect on every screen with thoughtful mobile-first layouts.' },
  { icon: Layers, title: 'CMS or Custom', desc: 'Integrations with your CMS, or fully custom React apps when you need it.' },
  { icon: Zap, title: 'Fast Delivery', desc: 'Agile sprints and clear milestones to ship faster without surprises.' },
]

export default function Features() {
  return (
    <section className="relative py-20 bg-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why brands choose us</h2>
          <p className="mt-3 text-blue-200/80">A technology-first studio focused on impact</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-800/40 p-6 backdrop-blur-sm"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 grid place-items-center mb-4">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}