import { useMediaQuery } from "react-responsive"
import { useState } from "react"
import { NavLink } from "react-router-dom"

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
        <img className="logo" src={Logo} alt="Logo" />
        <ul className="navbar">
          <li className="navbar__item">
            <NavLink to="/collections">Collections</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/men">Men</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/women">Women</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </Desktop>
      <Mobile>
        {
          <img
            className="hamburgerIcon"
            src={toggleNav ? hamburgerNav : closeBurger}
            onClick={handleBurger}
            aria-hidden="true"
            alt="*"
          />
        }
        <ul className="navbar" style={!toggleNav ? transform : null}>
          <li className="navbar__item">
            <NavLink to="/collections">Collections</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/men">Men</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/women">Women</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <img className="logo" src={Logo} alt="Logo" />
        <div
          className="bgMobile"
          style={!toggleNav ? opacity : zIndex}
          onClick={handleBurger}
        ></div>
      </Mobile>
    </nav>
  )
}
