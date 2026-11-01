import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnicalSkills from './components/TechnicalSkills'
import Leadership from './components/Leadership'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <TechnicalSkills />
      <Leadership />
    </div>
  )
}

export default App
