const mongoose = require("mongoose")


const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUndefinedTopology: true,
        useCreateIndex: true,
    }).then((data) => {
        console.log(`Mongoose Connected with server: ${data.connection.host}`)
    }).catch((err) => {
        console.log(err)
    })
}