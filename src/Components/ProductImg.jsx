import { useState } from "react";

import close from "../images/icon-close.svg";
import right from "../images/next.svg";
import left from "../images/prev.svg";
import "../Style/ProductImg.css";

export default function ProductImg(props) {
  const [imgState, setImg] = useState(0);
  const [show, setShow] = useState(false);

  const img = props.data.path[`${imgState}`];

  const thumbnailImg = props.data.path_thumbnail.map((image, index) => (
    <img
      className={
        img == props.data.path[index]
          ? "img img--thumbnail img--thumbnail--selected"
          : "img img--thumbnail"
      }
      src={image}
      key={index}
      onClick={() => handleFull(index)}
    />
  ));

  const handleFull = (id) => {
    setImg(id);
  };

  return (
    <div className="productImg">
      <img
        className="img img--big"
        src={img}
        alt="product"
        onClick={() => setShow(true)}
      />
      <div className="thumbnail__container">{thumbnailImg}</div>

      {/* Window Overlay */}
      <div
        className="newWindow"
        style={show ? { display: "flex" } : { display: "none" }}
      >
        <div className="newWindow__container">
          <img
            src={close}
            className="img imgClose"
            onClick={() => setShow(false)}
          />

          <div className="imgBig__container">
            <div
              className="arrow--left arrow__container"
              onClick={() => setImg((prev) => (prev === 0 ? 3 : prev - 1))}
            >
              <img className="arrow" src={left} alt="" />
            </div>

            <img className="img img--big" src={img} alt="product" />

            <div
              className="arrow--right arrow__container"
              onClick={() => setImg((prev) => (prev === 3 ? 0 : prev + 1))}
            >
              <img className="arrow" src={right} alt="" />
            </div>
          </div>

          <div className="thumbnail__container">{thumbnailImg}</div>
        </div>
      </div>
    </div>
  );
}
