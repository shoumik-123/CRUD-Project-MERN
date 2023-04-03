// basic
const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyParser = require('body-parser');


// Security Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');


// Database
const mongoose = require('mongoose');
const path = require("path");




// Security middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp());



// body-parser middleware Implement
app.use(bodyParser.json())


// Request rate limit
const limiter = rateLimit({windowMs:15*60*1000 , max:3000});
app.use(limiter);





//Mongodb DB connection
let URI="mongodb+srv://<username>:<password>@cluster0.dgnt28p.mongodb.net/CRUD?retryWrites=true&w=majority";
let OPTION = {user:'shoumik123' ,pass: 'shoumik123' ,autoIndex:true}
mongoose.connect(URI,OPTION).then(() => {
    console.log("Database Connected")
}).catch((err) => {
    console.log("Database Connection Failed", err)
})





//Managing front end routing
app.use(express.static('client/build'))
app.get("*", function (req, res) {
    // req.sendFile(path.resolve(__dirname,'client','build','index.html'))
    res.sendFile(path.resolve(__dirname,'client/build/index.html'))
})


//Routing Implement
app.use("/api/v1",router)



// undefined route
app.use("*", (req,res)=>{
    res.status(404).json({status: "Failed" ,data :"Not found"})
})



module.exports = app;



