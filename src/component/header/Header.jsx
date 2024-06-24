import { motion } from "framer-motion"
import Marquee from "../marquee/Marquee"

function Header() {
    // Title used to generate spans for animations
    const title = "Kevin Ly";
    const titleArray = title.split("");

    // Animations
    const headerRowAnimation = {
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
        <header className="header">
            <motion.div
                className="header__row"
                variants={headerRowAnimation}
                initial="initial"
                animate="animate"
            >
                {titleArray.map(letter => {
                    return (
                        <motion.span
                            className="header-row__title"
                            style={{ whiteSpace: 'pre' }}
                            key={letter + "title"}
                            variants={letterAnimation}
                        >{letter}</motion.span>
                    )
                })}
                <motion.p
                    className="header-row__message"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1,
                        delay: 1.85,
                        ease: "easeInOut"
                    }}
                >
                    <em>"Sucking at something is the first step towards being sorta good at something."</em>
                    - Jake the Dog
                </motion.p>
            </motion.div>
            <Marquee text={"Driven by Curiosity and Innovation, Transforming Ideas into Reality"} />
        </header>
    )
}

export default Header