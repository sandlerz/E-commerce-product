import { useMediaQuery } from "react-responsive"
import { useState } from "react"

import Logo from "../images/logo.svg"
import hamburgerNav from "../images/icon-menu.svg"
import closeBurger from "../images/icon-close.svg"

import "../Style/Navbar.css"

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 })
  return isDesktop ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 })
  return isMobile ? children : null
}

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(true)

  const handleBurger = () => {
    setToggleNav(prev => !prev)
  }

  const transform = { transform: "translateX(0)" }
  const opacity = { opacity: "0.7" }
  const zIndex = { zIndex: "-1000" }

  return (
    <nav>
      <Desktop>
        <img className="logo" src={Logo} />
        <ul className="navbar">
          <li className="navbar__item">Collections</li>
          <li className="navbar__item">Men</li>
          <li className="navbar__item">Women</li>
          <li className="navbar__item">About</li>
          <li className="navbar__item">Contact</li>
        </ul>
      </Desktop>
      <Mobile>
        {
          <img
            className="hamburgerIcon"
            src={toggleNav ? hamburgerNav : closeBurger}
            onClick={handleBurger}
          />
        }
        <ul className="navbar" style={!toggleNav ? transform : null}>
          <li className="navbar__item">Collections</li>
          <li className="navbar__item">Men</li>
          <li className="navbar__item">Women</li>
          <li className="navbar__item">About</li>
          <li className="navbar__item">Contact</li>
        </ul>
        <img className="logo" src={Logo} />
        <div
          className="bgMobile"
          style={!toggleNav ? opacity : zIndex}
          onClick={handleBurger}
        ></div>
      </Mobile>
    </nav>
  )
}
