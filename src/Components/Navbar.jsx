import Logo from "../images/logo.svg"
import '../Style/Navbar.css'

export default function Navbar() {
  return(
    <nav>
      <img className="nav-img" src={Logo}/>
      <ul className="nav-list">
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}