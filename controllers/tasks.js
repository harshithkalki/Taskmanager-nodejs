const Task= require('../models/Task');


const getAllTasks=(req,res)=>{
    res.send("all filessss");
}

const createTask=async (req,res)=>{
    const task= await Task.create(req.body);
    res.status(201).json({task});
}

const getTask=(req,res)=>{
    res.json({id:req.params.id});
}

const updateTask=(req,res)=>{
    res.json({id:req.params.id,"method":req.method});
}

const deleteTask=(req,res)=>{
    res.json({id:req.params.id,"method":req.method});
}


module.exports={
    getAllTasks,getTask,updateTask,deleteTask,createTask
}