import { useState, useEffect, useRef } from "react"

import PopUp from "./PopUp"

import shoppingCart from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"

import "../Style/NavAccount.css"

export default function NavAccount(props) {
  const [showPopUp, setShowPopUp] = useState(false)

  const ref = useRef(null)

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowPopUp(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [])

  const handlePopUp = () => {
    setShowPopUp(prev => !prev)
  }

  return (
    <div className="navAccount" ref={ref}>
      <div
        className="shoppingCart_container"
        onClick={handlePopUp}
        aria-label="Open popup"
      >
        <img className="shoppingCart" src={shoppingCart} alt="Shopping-Cart" />
        {props.cart ? (
          <div className="shoppingCart__popUp">{props.cart}</div>
        ) : null}
      </div>

      <img className="avatar" src={avatar} alt="Avatar" />

      {showPopUp ? (
        <PopUp
          show={showPopUp}
          cart={props.cart}
          handleDelete={props.handleDelete}
          data={props.data}
        />
      ) : null}
    </div>
  )
}
