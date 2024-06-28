import { useEffect } from 'react'
import Lenis from 'lenis'
import Nav from "../nav/Nav.jsx"
import Header from "../header/Header"
import Projects from "../projects/Projects.jsx"
import Filler from "../filler/Filler.jsx"
import About from "../about/About.jsx"
import Skills from '../skills/Skills.jsx'
import Contact from '../contact/Contact.jsx'

function App() {
    // Lenis Smooth Scrolling
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <main className="main">
            <Nav />
            <Header />
            <Projects />
            <Filler />
            <About />
            <Skills />
            <Contact />
        </main>
    )
}

export default App
