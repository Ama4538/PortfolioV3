import { useState } from "react";
import { motion } from "framer-motion"

function Marquee({ text }) {
    // State used to manage playing the marquee
    const [activeStatus, setActiveStatus] = useState(false);

    // Create array for each word
    const textArray = text.split(" ");
    // Help generate animation for the first 3 words because the rest are off screen
    const textArrayStart = textArray.slice(0, 3);

    // Marquee Animations
    const marqueeAnimation = {
        animate: {
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.1,
            }
        }
    }

    const letterAnimation = {
        initial: {
            y: 400,
        },
        animate: {
            y: 0,
            transition: {
                duration: 1,
                ease: [0.6, 0.01, -0.05, 0.95]
            }
        }
    }

    return (
        <div
            className="marquee"
            data-active={activeStatus}
        >
            {/* Double print each text array */}
            <motion.ul
                className="marquee__content"
                variants={marqueeAnimation}
                initial="initial"
                animate="animate"
                onAnimationComplete={() => {
                    setActiveStatus(true);
                }}
            >
                {/* First 3 words */}
                {textArrayStart.map(word => (
                    <li key={word + "marquee"}>
                        {word.split("").map((letter, index) => (
                            <motion.span
                                key={letter + "marquee" + index}
                                variants={letterAnimation}
                            > {letter}</motion.span>
                        ))}
                    </li>
                ))}

                {/* Rest of the words */}
                {textArray.slice(3).map((element, index) => {
                    return (
                        <li key={element + "marquee"}>{element}</li>
                    )
                })}
            </motion.ul>

            {/* Normal copy */}
            <ul className="marquee__content">
                {textArray.map((element) => {
                    return (
                        <li key={element + "marquee" + textArray.length}>{element}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Marquee