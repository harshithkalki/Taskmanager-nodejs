//imports
const express = require('express');
const tasks=require('./routes/tasks');
const connectDB=require('./db/connect');
const notFound=require('./middleware/not-found');
const errorHandlerMiddleware= require('./middleware/error-handler');
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

app.use(notFound)
app.use(errorHandlerMiddleware);