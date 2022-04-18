import Navbar from "./Components/Navbar";
import NavAccount from "./Components/NavAccount";
import ProductImg from "./Components/ProductImg";
import ProductDescription from "./Components/ProductDescription.jsx"

import './Style/Ecommerce.css'

function Ecommerce() {
  return (
    <div className="e-commerce">
      <header>
        <Navbar/>
        <NavAccount/>
      </header>
      <main>
        <ProductImg/>
        <ProductDescription/>
      </main>
    </div>
  );
}

export default Ecommerce;
