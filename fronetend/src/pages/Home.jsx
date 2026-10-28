
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import TechStack from '../components/TechStack'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default Home
