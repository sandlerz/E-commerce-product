import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Ecommerce from "./App"

import "./Style/global.css"
import "./Style/breackpoint.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/E-commerce-product" element={<Ecommerce />} />
      <Route
        path="*"
        element={
          <main className="main__back">
            <p>There's nothing here!</p>
            <Link to="/E-commerce-product" className="button btn--back">Back</Link>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
)
