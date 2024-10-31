import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useState, useRef } from 'react';

function ProjectContent({ project, flipped, borderBottom }) {
    // State used to determine if the animation is complete to show border
    const [showBorder, setShowBorder] = useState(false)

    // Animation controller
    const controller = useAnimation();

    // Reference to check if in view
    const ref = useRef(null)
    // Used to play animation when in view
    const inView = useInView(ref, { amount: 0.05 })

    // play animation when the content is in view
    useEffect(() => {
        if (inView) {
            controller.start("animate")
        }
    }, [inView])

    // Animations
    const rightColumnAnimation = {
        animate: {
            transition: {
                staggerChildren: 0.10,
            }
        },
    }

    const contentAnimation = {
        initial: {
            y: 200,
            filter: "blur(200px)",
        },
        animate: {
            y: 0,
            filter: "blur(0)",
            transition: {
                duration: 0.75,
                ease: [0.6, 0.01, 0.40, 0.95]
            }
        }
    }

    return (
        <article
            className="projectcontent"
            ref={ref}
            data-flip={flipped}
            data-borderbottom={borderBottom}
            data-border={showBorder}
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
                    duration: 0.75,
                    delay: 0.50,
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
                    {project.tags.map((tag, index) => (
                        <li
                            className="projectcontent__tag"
                            key={project.name + index}
                        >{tag}</li>
                    ))}

                </motion.ul>

                <motion.ul
                    className="projectcontent__link-container"
                    variants={contentAnimation}
                >
                    {project.liveLink
                        ? <li className="projectcontent__link-item">
                            <a
                                className="projectcontent__link"
                                href={project.liveLink}
                                target="__blank"
                            > See It Live</a>
                        </li>
                        : <></>
                    }

                    {project.codeLink != 'Contact me for access'
                        ? <li className="projectcontent__link-item">
                            <a
                                className="projectcontent__link"
                                href={project.codeLink}
                                target="__blank"
                            > View The Code</a>
                        </li>
                        : <li className="projectcontent__link-item">
                            <a
                                className="projectcontent__link projectcontent__link-none"
                            > {project.codeLink}</a>
                        </li>
                    }

                </motion.ul>
            </motion.div>

        </article>
    )
}

export default ProjectContent;