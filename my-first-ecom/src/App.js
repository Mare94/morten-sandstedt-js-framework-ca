import React from "react";
import { Routes, Route, } from "react-router-dom";
import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import ProductPage from "./pages/ProductPage.js";

function App() {
  return (
    
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<ProductPage />} />
          <Route path="*" element={<Route not found />} />
        </Route>
      </Routes>
    
  )
}

export default App;