import { useState } from "react"

import minus from "../images/icon-minus.svg"
import plus from "../images/icon-plus.svg"
import cart from "../images/icon-cart.svg"

import "../Style/productDescription.css"

export default function ProductDescription({ data, handleCart }) {
  const [count, setCount] = useState(0)

  const { companyName, shoes } = data
  const { name, price, discount, description } = shoes

  const handleMinus = () => {
    setCount(prev => (prev === 0 ? 0 : prev - 1))
  }

  const handlePlus = () => {
    setCount(prev => prev + 1)
  }

  const handleButton = () => {
    handleCart(count)
    setCount(0)
  }

  const sale = (price * discount) / 100

  return (
    <div className="ProductDescription">
      <h4 className="companyName">{companyName}</h4>
      <h1 className="ProductDescription__name">{name}</h1>
      <p className="ProductDescription__description">{description}</p>
      <div className="price">
        <div className="price__current">
          <p className="current__price">
            <span>${sale.toFixed(2)}</span>
          </p>
          <div className="current_discount">
            <span>{discount}%</span>
          </div>
        </div>
        <div className="price_previous">
          <span>${price.toFixed(2)}</span>
        </div>
      </div>
      <div className="btn__container">
        <div className="counter_container">
          <div
            onClick={handleMinus}
            className="counter"
            aria-labels="remove one to cart"
          >
            <img src={minus} alt="button-minus" />
          </div>
          <span className="count__sum">{count}</span>
          <div
            onClick={handlePlus}
            className="counter"
            aria-labels="add one to cart"
          >
            <img src={plus} alt="button-plus" />
          </div>
        </div>
        <button className="button button--add" onClick={handleButton}>
          <img src={cart} alt="*" aria-hidden="true" /> Add to cart
        </button>
      </div>
    </div>
  )
}
