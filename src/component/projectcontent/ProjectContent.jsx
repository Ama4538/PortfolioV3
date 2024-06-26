import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from 'react';

function ProjectContent({ project, flipped }) {
    // State used to determine if the animation is complete to show border
    const [showBorder, setShowBorder] = useState(false)

    // Animation controller
    const controller = useAnimation();

    // Used to see if content is in view
    const { ref, inView } = useInView({
        threshold: 0.10
    })

    // play animation when the content is in view
    useEffect(() => {
        if (inView) {
            controller.start("animate")
        }

    }, [inView])

    // Animations
    const contentAnimation = {
        initial: {
            y: 200,
            filter: "blur(200px)",
        },
        animate: {
            y: 0,
            filter: "blur(0)",
            transition: {
                duration: 1,
                ease: [0.6, 0.01, 0.40, 0.95]
            }
        }
    }

    const rightColumnAnimation = {
        animate: {
            transition: {
                staggerChildren: 0.20,
            }
        },
    }

    return (
        <article
            className="projectcontent"
            ref={ref}
            data-flip={flipped}
        >
            <motion.h3
                className="projectcontent__title"
                variants={contentAnimation}
                initial="initial"
                animate={controller}
            >{project.name}</motion.h3>
            <motion.div
                className="projectcontent__image-container"
                variants={{
                    animate: {
                        height: "100%",
                        opacity: 1
                    }
                }}
                initial={{
                    height: 0,
                    opacity: 0
                }}
                animate={controller}
                transition={{
                    duration: 1,
                    delay: 1,
                    ease: [0.6, 0.01, 0.40, 0.95]
                }}
            >
                <img
                    className="projectcontent__image"
                    src={`./project-images/${project.image}`}
                    alt={`image screenshot of ${project.name}`}
                />
            </motion.div>

            <motion.div
                className="projectcontent__right-column"
                variants={rightColumnAnimation}
                initial="initial"
                animate={controller}
                onAnimationComplete={() => { setShowBorder(true) }}
                data-border={showBorder}
            >
                <motion.h4
                    className="projectcontent__description-title"
                    variants={contentAnimation}
                >{project.category}</motion.h4>
                <motion.p
                    className="projectcontent__description"
                    variants={contentAnimation}
                >{project.description}</motion.p>

                <motion.ul 
                    className="projectcontent__tag-container"
                    variants={contentAnimation}
                >
                    {project.tags.map(tag => (
                        <li
                            className="projectcontent__tag"
                            key={project.name + project.tag}
                        >{tag}</li>
                    ))}

                </motion.ul>

                <ul className="projectcontent__link-container">
                    <li className="projectcontent__link-item">
                        <motion.a
                            className="projectcontent__link"
                            href={project.liveLink}
                            target="__blank"
                            variants={contentAnimation}
                        > See It Live</motion.a>
                    </li>
                    <li className="projectcontent__link-item">
                        <motion.a
                            className="projectcontent__link"
                            href={project.liveLink}
                            target="__blank"
                            variants={contentAnimation}
                        > View The Code</motion.a>
                    </li>
                </ul>
            </motion.div>

        </article>
    )
}

export default ProjectContent;