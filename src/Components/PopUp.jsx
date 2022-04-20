import imgProduct from "../images/image-product-1-thumbnail.jpg";
import trash from "../images/icon-delete.svg";

import '../Style/PopUp.css'

export default function PopUp(props) {
  return (
    <div
      className="popUp"
      style={props.show ? { display: "initial" } : { display: "none" }}
    >
      <h2 className="popUp__title">Cart</h2>

      {props.cart ? (
        <div className="popUp__main">
          <div className="main__container">
            <img
              className="img img--popUp"
              src={imgProduct}
              alt="image product"
            />
            <div>
              <p className="main__productName">Fall Limited Edition Sneakers</p>
              <p className="main__productName">
                $125.00 x {props.cart}{" "}
                <span className="main__productCost">
                  ${(props.cart * 125).toFixed(2)}
                </span>
              </p>
            </div>
            <img
              className="img--trash"
              src={trash}
              alt="delete"
              onClick={props.handleDelete}
            />
          </div>
          <button className="button button--checkout">Checkout</button>
        </div>
      ) : (
        <div className="empty__shoppingCart">Your cart is empty.</div>
      )}
    </div>
  );
}
