import { useState } from "react"

import close from "../images/icon-close.svg"
import right from "../images/next.svg"
import left from "../images/prev.svg"

import "../Style/ProductImg.css"

export default function WindowOverlay({ data, onClick, show, handleFull }) {
  const [imgState, setImg] = useState(0)

  const img = data.path[`${imgState}`]

  const thumbnailImg = data.path_thumbnail.map((image, index) => (
    <img
      className={
        img == data.path[index]
          ? "img img--thumbnail img--thumbnail--selected"
          : "img img--thumbnail"
      }
      src={image}
      key={index}
      onClick={() => setImg(index)}
      alt="Product-Image"
    />
  ))

  return (
    <div
      className="newWindow"
      style={show ? { display: "flex" } : { display: "none" }}
    >
      <div className="newWindow__container">
        <img
          src={close}
          className="img imgClose"
          onClick={onClick}
          alt="Close-Window"
        />

        <div className="imgBig__container">
          <div
            className="arrow--left arrow__container"
            onClick={() => setImg(prev => (prev === 0 ? 3 : prev - 1))}
          >
            <img className="arrow" src={left} aria-hidden="true" />
          </div>

          <img className="img img--big" src={img} alt="product" />

          <div
            className="arrow--right arrow__container"
            onClick={() => setImg(prev => (prev === 3 ? 0 : prev + 1))}
          >
            <img className="arrow" src={right} aria-hidden="true" />
          </div>
        </div>

        <div className="thumbnail__container">{thumbnailImg}</div>
      </div>
    </div>
  )
}
