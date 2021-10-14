const express = require("express")
const app = express()
app.use(express.json())

//Import routes
const product = require("./routes/productRoutes")



//app use
app.use("/api/v1", product)
module.exports = app