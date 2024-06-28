import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useState, useRef } from 'react';

function Filler() {
    // Animation controller
    const controller = useAnimation();

    // Reference to check if in view
    const ref = useRef(null)
    // Used to play animation when in view
    const inView = useInView(ref, { amount: 0.25 })

    // play animation when the content is in view
    useEffect(() => {
        if (inView) {
            controller.start("animate")
        }
    }, [inView])

    // Animations
    const containerAnimation = {
        animate: {
            transition: {
                staggerChildren: 0.20,
            }
        },
    }

    // Main version
    const fillerAnimation = {
        initial: {
            x: -200,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.65,
                ease: [0.6, 0.01, 0.40, 0.95]
            }
        }
    }

    // 2nd Version of the animation
    const fillerAnimationAlt = {
        initial: {
            x: 200,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.75,
                ease: [0.6, 0.01, 0.40, 0.95]
            }
        }
    }

    return (
        <section className="filler">
            <motion.div
                className="filler__text-container"
                ref={ref}
                variants={containerAnimation}
                initial="initial"
                animate={controller}
            >
                <motion.p variants={fillerAnimation}><strong>Growing</strong> Through Failure,</motion.p>
                <motion.p variants={fillerAnimationAlt}>Discovering <strong>New Ideas</strong>,</motion.p>
                <motion.p variants={fillerAnimation}>and</motion.p>
                <motion.p variants={fillerAnimationAlt}>Turning <strong>Passion</strong> into <strong>Projects</strong> </motion.p>
            </motion.div>
        </section>
    )
}

export default Filler;