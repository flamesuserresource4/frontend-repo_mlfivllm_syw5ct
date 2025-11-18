import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <section className="pt-28 pb-16 mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-bold">Let’s talk</h1>
        <p className="mt-3 text-blue-200/80">Tell us about your goals and we’ll craft a plan. We usually reply in a few hours.</p>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
          onSubmit={(e)=>{e.preventDefault(); alert('Message sent!')}}
        >
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60" placeholder="Name" required />
          <input type="email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60" placeholder="Email" required />
          <input className="sm:col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60" placeholder="Company / Website" />
          <textarea rows="5" className="sm:col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60" placeholder="Project details" />
          <button className="sm:col-span-2 px-5 py-3 rounded-xl bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-colors">Send message</button>
        </motion.form>
      </section>
    </div>
  )
}