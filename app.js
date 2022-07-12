//imports
const express = require('express');
const tasks=require('./routes/tasks');
const connectDB=require('./db/connect');
const Task= require('./models/Task');
require('dotenv').config();
//setup
const app=express();

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(3000,()=>console.log("server up and running..."));
    } catch (error) {
        console.log(error);
    }
}

start();

//middleware
app.use(express.static('public'));
app.use(express.json());

//routes
app.use('/api/v1/tasks',tasks)
