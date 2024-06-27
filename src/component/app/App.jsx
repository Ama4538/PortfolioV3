import Nav from "../nav/Nav.jsx"
import Header from "../header/Header"
import Projects from "../projects/Projects.jsx"
import Filler from "../filler/Filler.jsx"
import About from "../about/About.jsx"

function App() {
    return (
        <main className="main">
            <Nav />
            <Header />
            <Projects />
            <Filler />
            <About />
        </main>
    )
}

export default App
