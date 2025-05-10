
const express = require("express");
const dotenv= require("dotenv");
const mongoose = require("mongoose")
const cors = require("cors")
const path = require('path');


const customerRouter = require('./routes/customerRouter')

const app = express();
const port = process.env.port ||2001

dotenv.config();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("mongodb is connected successfully !!!"))
.catch((error)=>console.log("mongodb connection error ", error))


app.use('/customer' , customerRouter)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.listen(port , ()=>{
    console.log(`server is runing at http:localhost:${port}`);
})


