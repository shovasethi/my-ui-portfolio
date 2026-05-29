import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Projects from "./components/Project";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/About" element={<About/>} />
        <Route path = "/Skills" element={<Skills/>} />
        <Route path = "/Projects" element={<Projects/>} />
        <Route path = "/Experience" element={<Experience/>} /> 
        <Route path = "/Contact" element={<Contact/>} />
        <Route path = "/Footer" element={<Footer/>} />
      </Routes>
    </div>
  )
}

export default App