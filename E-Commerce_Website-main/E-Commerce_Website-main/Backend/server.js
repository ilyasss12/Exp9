const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const Products = require("./Products");
const Users = require("./Users");
const Orders = require("./Orders");
const stripe = require("stripe")(
  "sk_test_51NtpK4SC02LJU5Pbzd70hGDGQaLpSJuE4waufdulYLVzibKCZRTD9gUBGc0ui09TC3ZOkANA0k0mNMjjyJZZLVls00d3iBGJ50"
);

const app = express();
const port = process.env.PORT || 8000;


//middlewares
app.use(express.json());
app.use(cors());

// Connection URL
const connection_url = "mongodb+srv://abhaysingh21904:Abhay%402009@cluster0.ymigmjn.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=AtlasApp";

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//API 
app.get('/', (req, res) => res.status(200).send("Hello, World!"));

// Add product
app.post("/products/add", async (req, res) => {
  try {
    const productDetail = req.body;

    console.log("Product Detail >>>>", productDetail);

    const createdProduct = await Products.create(productDetail);
    res.status(201).send(createdProduct);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

app.get("/products/get", async (req, res) => {
  try {
    const products = await Products.find().exec();
    res.status(200).send(products);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

// API for SIGNUP
app.post("/auth/signup", require('./signup'));

// API for LOGIN
app.post("/auth/login", require('./login'));

// API for PAYMENT
app.post("/payment/create", async (req, res) => {
  const total = req.body.amount;  // Assuming amount is in rupees

  // Convert rupees to paise (cents)
  const amountInPaise = total * 100;

  console.log("Payment Request received for this rupees", total);

  const payment = await stripe.paymentIntents.create({
    amount: amountInPaise,  // Send the amount in cents
    currency: "inr",
  });

  res.status(201).send({
    clientSecret: payment.client_secret,
  });
});

// API  to add ODER DETAIL

// ... (existing code)

// API to add ORDER DETAIL
app.post("/orders/add", async (req, res) => {
  try {
    const { basket, price, email, address } = req.body;

    const orderDetail = {
      products: basket,
      price: price,
      address: address,
      email: email,
    };

    const createdOrder = await Orders.create(orderDetail);
    console.log("Order added to database:", createdOrder);
    res.status(201).send(createdOrder);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

// API to get user's orders based on email
app.post("/orders/get", async (req, res) => {
  try {
    const { email } = req.body;

    const userOrders = await Orders.find({ email: email });
    res.status(200).send(userOrders);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});



app.listen(port, () => console.log("listening on the port", port));
