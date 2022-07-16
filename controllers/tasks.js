const Task= require('../models/Task');
const asyncwrapper=require('../middleware/async');


const getAllTasks= asyncwrapper(async (req,res)=>{
    const tasks=await Task.find({});
    // res.status(200).json({status:"success",data:{tasks,nbHits: tasks.length}});
    res.status(200).json({tasks});
})

const createTask= asyncwrapper(async (req,res)=>{
        const task= await Task.create(req.body);
        res.status(201).json({task});
})

const getTask=asyncwrapper(async(req,res)=>{
    // res.json({id:req.params.id});
        const id=req.params.id;
        const task=await Task.findById(id);
        // const task=await Task.findOne({_id:id});
        if(!task){
            return res.status(404).json({msg:"no task with that Id"})
        }
        res.status(200).json({task});
})

const updateTask=asyncwrapper(async (req,res)=>{
        const id=req.params.id;
        const task=await Task.findOneAndUpdate({_id:id},req.body,{new:true,
        runValidators:true});
        if(!task){
            return res.status(404).json({msg:"no task with that Id"})
        }
        res.status(200).json({task});
})

const deleteTask=asyncwrapper(async (req,res)=>{
        const id=req.params.id;
        const task=await Task.findOneAndDelete({_id:id});
        // const task=await Task.findOne({_id:id});
        if(!task){
            return res.status(404).json({msg:"no task with that Id"})
        }
        res.status(200).json({status:'ok'});
})


module.exports={
    getAllTasks,getTask,updateTask,deleteTask,createTask
};