//imports
const express = require('express');
require('./db/connect');
const tasks=require('./routes/tasks')

//setup
const app=express();
app.listen(3000,()=>{
    console.log("server up and running...");
});

//middleware
app.use(express.static('public'));
app.use(express.json());

//routes
app.use('/api/v1/tasks',tasks)
