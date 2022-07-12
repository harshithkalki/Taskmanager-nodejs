//imports
const express = require('express');
const mongoose=require('mongoose');
const tasks=require('./routes/tasks')

//setup
const app=express();
const dburl='mongodb://localhost:27017/taskmanager';

//database
mongoose.connect(dburl)
.then((res)=>{
    console.log("server connected");
    app.listen(3000);
})
.catch((err)=>{
    console.log(err);
})

//middleware
app.use(express.static('public'));
app.use(express.json());

//routes
app.use('/api/v1/tasks',tasks)
