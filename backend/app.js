const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());

//Import routes
const product = require("./routes/productRoutes");

//error middleware
app.use(errorMiddleware);

//app use
app.use("/api/v1", product);
module.exports = app;