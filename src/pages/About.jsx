import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <section className="pt-28 pb-16 mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} viewport={{once:true}}>
            <h1 className="text-4xl font-bold">About Our Studio</h1>
            <p className="mt-4 text-blue-200/80">We’re a lean, senior team obsessed with craft and outcomes. We partner with startups and brands to ship polished websites that feel alive.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {['Design', 'Development', 'Motion', 'Strategy'].map(s => (
                <div key={s} className="rounded-2xl border border-white/10 p-4 bg-white/5">
                  <p className="text-sm text-blue-200/80">Focus</p>
                  <p className="font-semibold">{s}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{duration:0.5, delay:0.1}} viewport={{once:true}}>
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500/30 to-indigo-500/20 border border-white/10" />
          </motion.div>
        </div>
      </section>
    </div>
  )
}