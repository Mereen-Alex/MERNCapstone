import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import CakesPage from "./pages/CakesPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import UserProfile from "./components/auth/UserProfile";
import Logout from "./components/auth/Logout";
import CartBadge from "./components/cart/CartBadge";
import CartDetailsView from "./components/cart/CartDetailsView";
import CartItemList from "./components/cart/CartItemList";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PaymentForms from "./components/checkout/PaymentForms";
import BillPay from "./components/checkout/BillPay";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cakes" element={<CakesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/logout" element={<Logout />} /> 
        <Route path="/cartbadge" element={<CartBadge />} />
        <Route path="/register" element={<RegisterPage />} />        
        <Route path="/cartdetails" element={<CartDetailsView />} />
        <Route path="/cartitems" element={<CartItemList />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/paymentforms" element={<PaymentForms />} />
        <Route path="/billpay" element={<BillPay />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default App;
