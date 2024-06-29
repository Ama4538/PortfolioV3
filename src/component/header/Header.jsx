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
                staggerChildren: 0.075,
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
        <header className="header"
            id="header">
            <motion.div
                className="header__row"
                variants={headerRowAnimation}
                initial="initial"
                animate="animate"
            >
                <div className="header__title-container">
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
                </div>
                <motion.p
                    className="header-row__message message-large"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1,
                        delay: 1.55,
                        ease: "easeInOut"
                    }}
                >
                    <em>"Sucking at something is the first step towards being sorta good at something."</em>
                    - Jake the Dog
                </motion.p>
            </motion.div>
            <Marquee text={"Driven by Curiosity and Innovation, Transforming Ideas into Reality."} />
            <motion.p
                    className="header-row__message message-mobile"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1,
                        delay: 1.55,
                        ease: "easeInOut"
                    }}
                >
                    <em>"Sucking at something is the first step towards being sorta good at something."</em>
                    - Jake the Dog
                </motion.p>
        </header>
    )
}

export default Header