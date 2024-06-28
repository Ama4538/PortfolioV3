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
                delayChildren: 0.50,
                staggerChildren: 0.05,
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
                duration: 1,
                delay: 1.25,
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
                duration: 0.25,
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
                    I'm a Computer Science student at George Mason University. I love taking big problems, breaking them down into smaller pieces, and solving them one by one. I've completed courses in data structures, object-oriented programming, and low-level programming, giving me a solid foundation in software development.  In my free time, I enjoy playing video games, working out, and exploring different programming frameworks. I have also worked as a Barista and a Retail Cashier, experiences that have taught me the value of hard work, customer service, and multitasking.
                </motion.p>
            </div>
        </motion.section>
    )
}

export default About