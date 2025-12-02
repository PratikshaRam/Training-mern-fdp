require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

//db
connectDB();

// middleware
app.use(cors());
app.use(express.json());

//routed
app.get("/", (req, res) => {
    res.send("Mern ecommerce app is running");
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/product", require("./routes/productRoutes"));
app.use("/api/order", require("./routes/orderRoutes"));

//global error handler
app.use((err, req, res, next) => {
    console.error("globalerror",err);
    res.status(500).json({ message: "Server Error" });
});
