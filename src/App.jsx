// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login-signup" element={<LoginSignup />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<ShopCategory />} />
      </Routes>
    </Router>
  );
}

export default App;
