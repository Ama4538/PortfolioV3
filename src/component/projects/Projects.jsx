import { useEffect, useRef } from "react"
import { useInView } from 'react-intersection-observer';

function Projects() {
    const {ref, inView} = useInView({
        threshold: 0.25
    })

    return (
        <section
            className= "projects"
            data-inview = {inView}
            ref={ref}
        >
            <h2 className="projects__header-title">Selected Projects</h2>
        </section>
    )
}

export default Projects