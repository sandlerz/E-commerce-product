import { useState, useEffect } from "react";

import Navbar from "./Components/Navbar";
import NavAccount from "./Components/NavAccount";
import ProductImg from "./Components/ProductImg";
import ProductDescription from "./Components/ProductDescription.jsx";
import getData from "./data";

import "./Style/Ecommerce.css";

function Ecommerce() {
  const [cart, setCart] = useState(0);
  const [data, setData] = useState(getData());

  useEffect(() => {
    setData(getData());
  }, []);

  const handleDelete = () => {
    setCart(0);
  };

  const handleCart = count => {
    setCart(prev => prev + count)
  }

  return (
    <div className="e-commerce">
      <header>
        <Navbar />
        <NavAccount handleDelete={handleDelete} cart={cart} data={data.shoes} />
      </header>
      <main>
        <ProductImg data={data.shoes.images}/>
        <ProductDescription 
          data={data}
          handleCart={handleCart}
        />
      </main>
    </div>
  );
}

export default Ecommerce;
