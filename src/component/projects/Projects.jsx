import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import projects from "../../data.json";
import ProjectContent from '../projectcontent/ProjectContent';

function Projects() {
    // Reference to check if in view
    const ref = useRef(null)
    // Used to play animation when in view
    const inView = useInView(ref, { amount: 0.05, once: true })

    return (
        <motion.section
            className="projects"
            id="projects"
            data-inview={inView}
            ref={ref}
            initial={{
                y: 135,
            }}
            animate={{
                y: 0,
            }}
            transition={{
                duration: 1.60,
                ease: [0.6, 0.01, -0.05, 0.95]
            }}
        >
            <h2 className="projects__header-title">Projects</h2>
            <div className="projects__container">
                {projects.map((project, index) => (
                    // Flip every other product
                    <ProjectContent
                        project={project}
                        flipped={(index + 1) % 2 === 0}
                        borderBottom={index < (projects.length - 1)}
                        key={project.name + "main"}
                    />
                ))}
            </div>

        </motion.section>
    )
}

export default Projects