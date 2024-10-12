import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useState, useRef } from 'react';

function About() {
    // State used to determine if the animation is complete to show border
    const [showBorder, setShowBorder] = useState(false)

    // Animation controller
    const controller = useAnimation();

    // Reference to check if in view
    const ref = useRef(null)

    // Used to play animation when in view
    const inView = useInView(ref)

    // Text used to generate title
    const title = "Get to Know Me";
    const titleArray = title.split("");

    // play animation when the content is in view
    useEffect(() => {
        if (inView) {
            controller.start("animate")
        }
    }, [inView])

    // Animations
    const aboutAnimation = {
        animate: {
            transition: {
                staggerChildren: 0.05,
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
                duration: 0.75,
                delay: 1,
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
        <motion.section
            className="about"
            id="about"
            ref={ref}
            variants={{
                animate: {
                    y: 0,
                    opacity: 1,
                }
            }}
            initial={{
                y: 80,
                opacity: 0,
            }}
            animate={controller}
            transition={{
                duration: 0.50,
                ease: [0.6, 0.01, 0.40, 0.95]
            }}
        >
            <motion.div
                className="about__title-container"
                variants={aboutAnimation}
                initial="initial"
                animate={controller}
                onAnimationComplete={() => { setShowBorder(true) }}
                data-border={showBorder}
            >
                {titleArray.map((letter, index) => (
                    <motion.span
                        className="about__title"
                        key={"AboutLetter" + letter + index}
                        variants={titleAnimation}
                    >{letter}</motion.span>
                ))}
            </motion.div>
            <div className="about__text-container">
                <motion.p
                    variants={contentAnimation}
                    initial="initial"
                    animate={controller}
                >
                    I'm a Computer Science student at George Mason University with a passion for solving complex problems by breaking them into manageable, logical steps. My coursework in data Structures, object-oriented programming, software engineering, and computer systems and programming has equipped me with a strong foundation in software development and problem-solving.
                    In my free time, I enjoy playing video games, working out, and diving into new programming concepts. My experiences as a Barista and Retail Cashier have helped me develop strong communication, multitasking, and customer service skills, which I bring into collaborative and team-oriented environments.
                </motion.p>
            </div>
        </motion.section>
    )
}

export default About