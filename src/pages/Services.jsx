import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { Code2, Globe, ShoppingCart, Wand2, LineChart } from 'lucide-react'

const services = [
  { icon: Code2, title: 'Custom Web Apps', desc: 'Highly interactive React/Next.js applications tailored to your workflow.' },
  { icon: Globe, title: 'Marketing Websites', desc: 'Fast, SEO-friendly landing pages and multi-page sites that convert.' },
  { icon: ShoppingCart, title: 'E‑commerce', desc: 'Beautiful storefronts with smooth carts, checkout and analytics.' },
  { icon: Wand2, title: 'Brand & UI', desc: 'Design systems, components and motion that feel uniquely yours.' },
  { icon: LineChart, title: 'Optimization', desc: 'Performance audits, Core Web Vitals and conversion rate improvements.' },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <section className="pt-28 pb-16 mx-auto max-w-7xl px-6">
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="mt-3 text-blue-200/80 max-w-2xl">We blend aesthetics with engineering. Choose a package or mix-and-match for a perfect fit.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 p-6 bg-white/5"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 grid place-items-center mb-4">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}