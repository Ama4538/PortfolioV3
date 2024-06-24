import { useState } from "react"
import { motion } from "framer-motion"

function Nav() {
    // State used to manage the menu status for smaller screens
    const [menuStatus, setMenuStatus] = useState(false)

    return (
        <motion.nav 
            className="nav"
            initial = {{
                y: -400,
            }}
            animate = {{
                y: 0,
            }}
            transition={{
                duration: 1,
                delay: 1.05,
                ease: [0.6, 0.01, -0.05, 0.95]
            }}
        >
            <h3 className="nav__title"> Kevin </h3>
            <ul
                className="nav__menu-container"
                data-menu={menuStatus}
            >
                <li className="nav__button-container">
                    <button
                        className="nav__button"
                        onClick={() => { setMenuStatus(!menuStatus) }}
                    />
                </li>
                <li className="nav__menu-item">
                    <a
                        href=""
                        className="nav__link"
                    >Projects</a>
                </li>
                <li className="nav__menu-item">
                    <a
                        href=""
                        className="nav__link"
                    >About</a>
                </li>
                <li className="nav__menu-item">
                    <a
                        href=""
                        className="nav__link"
                    >Contact</a>
                </li>
            </ul>
        </motion.nav>
    )
}

export default Nav