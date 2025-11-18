import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="border-t border-white/10 py-8 text-center text-blue-300/70">
        © {new Date().getFullYear()} BlueWeb Studio — All rights reserved.
      </footer>
    </div>
  )
}