import { useState } from "react"

function Nav() {
    // State used to manage the menu status for smaller screens
    const [menuStatus, setMenuStatus] = useState(false)

    return (
        <nav className="nav">
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
            </ul>
        </nav>
    )
}

export default Nav