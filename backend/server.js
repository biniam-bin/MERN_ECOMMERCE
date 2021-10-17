const app = require("./app")
const dotenv = require("dotenv")
const connectDatabase = require("./config/database")

//Handling Uncaught errror
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
})




dotenv.config({path: "backend/config/config.env"})
connectDatabase()
const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT}`)
})

process.on("unhandledRejection", (err)=> {
    console.log(`Error:${err}`)
    server.close(() => {
        process.exit(1);
    })
})