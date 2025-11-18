import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

const projects = [
  { title: 'Fintech SaaS', tags: ['Next.js', 'Framer', 'Stripe'] },
  { title: '3D Product Site', tags: ['Spline', 'Three', 'Vite'] },
  { title: 'E‑commerce', tags: ['Shopify', 'Headless', 'Analytics'] },
  { title: 'Agency Landing', tags: ['React', 'Tailwind', 'SEO'] },
  { title: 'Web App Dashboard', tags: ['React', 'Charts', 'Auth'] },
  { title: 'Portfolio', tags: ['Motion', '3D', 'CMS'] },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <section className="pt-28 pb-16 mx-auto max-w-7xl px-6">
        <h1 className="text-4xl font-bold">Our Work</h1>
        <p className="mt-3 text-blue-200/80 max-w-2xl">A selection of recent projects across industries.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 mb-4 grid place-items-center text-blue-200/60 text-sm">
                Preview
              </div>
              <h3 className="font-semibold">{p.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-blue-200/80">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}