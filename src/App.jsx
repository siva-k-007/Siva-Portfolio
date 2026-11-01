import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Leadership from './components/Leadership'
import { leadershipList } from './data/portfolioData'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      {leadershipList && leadershipList.length > 0 && <Leadership />}
    </>
  )
}

export default App
