
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TechStack from '../components/TechStack'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <TechStack />
      </main>

      <Footer />
    </div>
  )
}

export default Home
