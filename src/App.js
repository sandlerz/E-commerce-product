import { useState } from "react";

import Navbar from "./Components/Navbar";
import NavAccount from "./Components/NavAccount";
import ProductImg from "./Components/ProductImg";
import ProductDescription from "./Components/ProductDescription.jsx";

import "./Style/Ecommerce.css";

function Ecommerce() {
  const [cart, setCart] = useState(10);
  const handleDelete = () => {
    setCart(0);
  };

  return (
    <div className="e-commerce">
      <header>
        <Navbar />
        <NavAccount handleDelete={handleDelete} cart={cart} />
      </header>
      <main>
        <ProductImg />
        <ProductDescription />
      </main>
    </div>
  );
}

export default Ecommerce;
