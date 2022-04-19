import { useMediaQuery } from "react-responsive"
import { useState } from "react"

import Logo from "../images/logo.svg"
import hamburgerNav from '../images/icon-menu.svg'
import closeBurger from '../images/icon-close.svg'

import '../Style/Navbar.css'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 })
  return isDesktop ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 })
  return isMobile ? children : null
}

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false)

  const handleBurger = () => {
    setToggleNav(prev => !prev)
  }

  const transform = {transform: "translateX(0)"}
  const opacity = {opacity: "0.7"}
  const zIndex = {zIndex: "-1000"}

  return(
    <nav>
      <Desktop>
        <img className="nav-img-logo" src={Logo}/>
        <ul className="nav-list">
          <li className="nav-item">Collections</li>
          <li className="nav-item">Men</li>
          <li className="nav-item">Women</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
        </ul>
      </Desktop>
      <Mobile>
        <div className="bg-mobile" style={!toggleNav ? opacity : zIndex} onClick={handleBurger}></div>
        {<img className="nav-icon-hamburger" src={toggleNav ? hamburgerNav : closeBurger} onClick={handleBurger}/>}
        <ul className="nav-list-mobile" style={!toggleNav ? transform : null}>
          <li className="nav-item">Collections</li>
          <li className="nav-item">Men</li>
          <li className="nav-item">Women</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
        </ul>
        <img className="nav-img-logo" src={Logo}/>
      </Mobile>
    </nav>
  )
}