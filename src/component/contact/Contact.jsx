import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion";

function Contact() {
    // State used to get mouse X position for the copy message
    const [mouseXLocation, setMouseXLocation] = useState(50)
    // State used to manage the email message itself
    const [emailMessage, setEmailMessage] = useState("Copy Email Address");

    // Reference to the email and message container
    const emailRef = useRef(null)
    const messageRef = useRef(null)

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

    // Handle mouse location
    function handleLocation(event) {
        if (emailRef && messageRef) {
            // Get the mouse X position relative to the container and turning into a percent
            const emailBounds = emailRef.current.getBoundingClientRect();
            const mouseXLocation = event.clientX - emailBounds.x;
            const messageBounds = messageRef.current.getBoundingClientRect();
            const messageBoundsSides = (messageBounds.width) / 2

            // Checking if message is in bounds
            if ((mouseXLocation - messageBoundsSides >= 0 && mouseXLocation + messageBoundsSides <= emailBounds.width)) {
                setMouseXLocation(mouseXLocation)
            }
        }
    }

    // Handle the copying of the email
    const copyToClipBoard = async () => {
        try {
            await navigator.clipboard.writeText('Voldableprism09@outlook.com');
            setEmailMessage("Email Address Copied")
        } catch (error) {
            console.error('Copy failed', error);
        }
    }

    // Animations
    const containerAnimation = {
        animate: {
            transition: {
                staggerChildren: 0.125,
            }
        }
    }

    const contentAnimation = {
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
        <section
            className="contact"
            id="contact"
            ref={ref}
        >
            <motion.div
                className="contact__text-container"
                variants={containerAnimation}
                initial="initial"
                animate={controller}
            >
                <motion.p variants={contentAnimation}>Innovation Starts</motion.p>
                <motion.p variants={contentAnimation}>With Curiosity</motion.p>
                <motion.p variants={contentAnimation}>Let's Talk</motion.p>
            </motion.div>
            <motion.div
                className="contact__button-container"
                variants={{
                    animate: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.80,
                            duration: 0.75,
                        }
                    }
                }}
                initial={{
                    opacity: 0,
                    y: 80,
                }}
                animate={controller}
            >
                <button
                    className="contact__email"
                    ref={emailRef}
                    onMouseMove={(event) => { handleLocation(event); }}
                    onClick={() => { copyToClipBoard() }}
                >Voldableprism09@outlook.com</button>
                <div
                    className="contact__email-message"
                    style={{ left: mouseXLocation }}
                    ref={messageRef}
                >{emailMessage}</div>
            </motion.div>
            <footer className="contact__footer-container">
                <motion.ul
                    className="contact-footer__link-container"
                    variants={{
                        animate: {
                            y: 0,
                            transition: {
                                duration: 0.75,
                                delay: 0.90,
                                ease: [0.6, 0.01, -0.05, 0.95]
                            }
                        }
                    }}
                    initial={{ y: 80 }}
                    animate={controller}
                >
                    <li ><a
                        className="contact-footer__link"
                        href="https://www.linkedin.com/in/kevin-ly-6b98ba203/"
                        target="_blank"
                    >Linkedin</a></li>
                    <li><a
                        className="contact-footer__link"
                        href="https://github.com/Ama4538?tab=repositories"
                        target="_blank"
                    >Github</a></li>
                </motion.ul>
            </footer>
        </section>
    )
}

export default Contact