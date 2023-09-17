import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./CartContext";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import CakesPage from "./pages/CakesPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Logout from "./components/auth/Logout";
import CartBadge from "./components/cart/CartBadge";
import CartPage from "./pages/CartPage";
import CartDetailsView from "./components/cart/CartDetailsView";
import CartItemList from "./components/cart/CartItemList";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PaymentForm from "./components/checkout/PaymentForm";
import BillPay from "./components/checkout/BillPay";

const App = () => {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cakes" element={<CakesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/cartbadge" element={<CartBadge />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cartdetails" element={<CartDetailsView/>} />
          <Route path="/cartitems" element={<CartItemList/>} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/paymentform" element={<PaymentForm />} />
          <Route path="/billpay" element={<BillPay />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;


