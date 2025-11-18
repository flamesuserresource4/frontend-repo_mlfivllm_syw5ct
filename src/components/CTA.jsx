import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_50%,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-1">
          <div className="rounded-[calc(theme(borderRadius.3xl)-4px)] bg-slate-900 p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white">Ready to build something great?</h3>
                <p className="mt-3 text-blue-100/90">Tell us about your project and we'll send a tailored plan within 24 hours.</p>
              </div>
              <motion.form
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onSubmit={(e) => { e.preventDefault(); alert('Thanks! We\'ll reach out shortly.'); }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60" placeholder="Your name" required />
                <input type="email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60" placeholder="Email" required />
                <input className="sm:col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60" placeholder="Website or brand" />
                <button className="sm:col-span-2 px-5 py-3 rounded-xl bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-colors">Get my plan</button>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}