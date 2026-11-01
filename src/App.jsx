import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Leadership from './components/Leadership'
import { leadershipList } from './data/portfolioData'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      {leadershipList && leadershipList.length > 0 && <Leadership />}
    </>
  )
}

export default App
