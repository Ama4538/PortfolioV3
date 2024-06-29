import { motion, useAnimation, useInView, useTransform, useScroll } from "framer-motion";
import { useEffect, useState, useRef } from 'react';

function Skills() {
    // State used to determine if the animation is complete to show border
    const [showBorder, setShowBorder] = useState(false)
    const [defaultPercent, setDefaultPercent] = useState("");

    // Animation controller
    const controller = useAnimation();

    // Reference to check if in view
    const ref = useRef(null)

    // Scroll Animation
    const { scrollYProgress } = useScroll({
        target: ref,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["0", `${defaultPercent}`])

    // Used to play animation when in view
    const inView = useInView(ref, { amount: 0.10 })

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

    // Media Query 
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 576) {
                setDefaultPercent("-275.5%");
            } else if (window.innerWidth >= 576 && window.innerWidth <= 767) {
                setDefaultPercent("-195.5%");
            } else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
                setDefaultPercent("-140.5%");
            } else if (window.innerWidth >= 992 && window.innerWidth <= 1199) {
                setDefaultPercent("-102.5%");
            } else {
                setDefaultPercent("-85%");
            }
        };

        // Call the function initially to set the default amount
        handleResize();

        // Add an event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    // Animation
    const skillsAnimation = {
        animate: {
            transition: {
                delayChildren: 0.25,
                staggerChildren: 0.25,
            }
        },
    }

    const contentAnimation = {
        initial: {
            y: 20,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.60,
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