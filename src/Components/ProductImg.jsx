import { useState } from "react"
import { useMediaQuery } from "react-responsive"

import close from "../images/icon-close.svg"
import right from "../images/next.svg"
import left from "../images/prev.svg"
import "../Style/ProductImg.css"
import WindowOverlay from "./WindowOverlay"

export default function ProductImg({ data }) {
  const [imgState, setImg] = useState(0)
  const [show, setShow] = useState(false)

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
      onClick={() => handleFull(index)}
      alt="Product-Image"
    />
  ))

  const handleFull = id => {
    setImg(id)
  }

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 501 })
    return isDesktop ? children : null
  }

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 500 })
    return isMobile ? children : null
  }

  return (
    <div className="productImg">
      <Desktop>
        <img
          className="img img--big"
          src={img}
          alt="Product-image"
          onClick={() => setShow(true)}
        />
        <div className="thumbnail__container">{thumbnailImg}</div>

        <WindowOverlay
          data={data}
          onClick={() => setShow(false)}
          show={show}
          handleFull={handleFull}
        />
      </Desktop>
      <Mobile>
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
      </Mobile>
    </div>
  )
}
