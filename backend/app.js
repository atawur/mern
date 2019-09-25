const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv').config(); 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//Routers
app.use('/api/users',require('./route/userRouter'));

app.get('/',(req,res)=>{
    res.status(200).json({
        message:'server is runnig.........'
    })
})
var port = process.env.PORT;
app.listen(port,()=>{
    mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true},()=>{
        console.log("DB running on : "+port)
    });
    console.log("server is runnign on port : "+port);
})