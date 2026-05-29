import Landing from "../components/Landing"
import About from "../components/About"
import Skills from "../components/Skills"
import Project from "../components/Project"
import Experience from "../components/Experience"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Home = () => {
  return (
        <div id="home">
        <Landing />
        <About />
        <Skills />
        <Project />
        <Experience />
        <Contact />
        <Footer />
        </div>
    
  )
}

export default Home