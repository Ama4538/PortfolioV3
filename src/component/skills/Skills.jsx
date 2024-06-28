import { motion, useAnimation, useInView, useTransform, useScroll } from "framer-motion";
import { useEffect, useState, useRef } from 'react';

function Skills() {
    // State used to determine if the animation is complete to show border
    const [showBorder, setShowBorder] = useState(false)

    // Animation controller
    const controller = useAnimation();

    // Reference to check if in view
    const ref = useRef(null)

    // Scroll Animation
    const { scrollYProgress } = useScroll({
        target: ref,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["0", "-87.5%"])

    // Used to play animation when in view
    const inView = useInView(ref)

    // Text used to generate title
    const title = "Technical Skills";
    const titleArray = title.split("");

    // Array for each skills
    const skillsArray = ["Java", "Javascript", "HTML", "CSS", "React", "C"]

    // play animation when the content is in view
    useEffect(() => {
        if (inView) {
            controller.start("animate")
        }
    }, [inView])

    // Animation
    const skillsAnimation = {
        animate: {
            transition: {
                delayChildren: 0.50,
                staggerChildren: 0.25,
            }
        },
    }

    const contentAnimation = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.75,
                ease: [0.6, 0.01, 0.40, 0.95]
            }
        },
    }

    const titleAnimation = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.15,
                ease: "easeInOut"
            }
        },
    }

    return (
        <section
            className="skills"
            ref={ref}
        >
            <article className="skills__container">
                <motion.div
                    className="skills__title-container"
                    variants={{
                        animate: {
                            transition: {
                                staggerChildren: 0.05,
                            }
                        },
                    }}
                    initial="initial"
                    animate={controller}
                    onAnimationComplete={() => { setShowBorder(true) }}
                    data-border={showBorder}
                >
                    {titleArray.map((letter, index) => (
                        <motion.span
                            className="skills__title"
                            key={"skillsLetter" + letter + index}
                            variants={titleAnimation}
                        >{letter}</motion.span>
                    ))}
                </motion.div>

                <motion.ul
                    className="skills__container-inner"
                    style={{ x }}
                    variants={skillsAnimation}
                    initial="initial"
                    animate={controller}
                >
                    {skillsArray.map(skill => (
                        <motion.li
                            key={skill}
                            variants={contentAnimation}
                        >
                            <div className="skills__skill-box">
                                <p className="skills__skill-name">{skill}</p>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </article>
        </section>
    )
}

export default Skills