import Navbar from './components/Navbar/Navbar'
import Container from './components/Container'
import Presentation from './components/Presentation/Presentation'
import Slider from './components/Slider/Slider'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <div className=' h-full'>
      <Container>
        <Navbar />
        <Presentation />
      </Container>
      <Slider />
      <Container>
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </div>
  )
}
