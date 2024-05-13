import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Address from "./components/Address";
import Payment from "./components/Payment";
import AddProduct from "./components/AddProduct";
import Orders from "./components/Orders";


import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import AboutUs from "./components/AboutUs";
import ContactPage from "./components/ContactPage";

//this is an Stripe Script
const promise = loadStripe(
  "pk_test_51NtpK4SC02LJU5PbhUhRqC102rcyBPZkwdyEBZHZIt0Hpk4phflVkvCGiZzZsrJI7sbMNfKlhAh7pLa0OtMDUuFx009zEqatZ0"
);


function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />    
          <Route path="/address" element={<Address />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>        
      </Container>
    </Router>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default App;
