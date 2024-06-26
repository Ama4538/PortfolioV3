import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import projects from "../../data.json";
import ProjectContent from '../projectcontent/ProjectContent';

function Projects() {
    // Used to play animation when in view
    const { ref, inView } = useInView({
        threshold: 0.15
    })

    return (
        <motion.section
            className="projects"
            data-inview={inView}
            ref={ref}
            initial={{
                y: 80,
            }}
            animate={{
                y: 0,
            }}
            transition={{
                duration: 1,
                delay: 1.05,
                ease: [0.6, 0.01, -0.05, 0.95]
            }}
        >
            <h2 className="projects__header-title">Projects</h2>
            <ProjectContent project={projects[0]} />

        </motion.section>
    )
}

export default Projects