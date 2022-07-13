const Task= require('../models/Task');


const getAllTasks=async (req,res)=>{
    try{
        const data=await Task.find({});
        res.status(200).json({tasks:data});
    }catch(error){
        res.status(500).json({msg:error});
    }
    // res.send("all filessss");
}

const createTask=async (req,res)=>{
    try{
        const task= await Task.create(req.body);
        res.status(201).json({task});
    }catch(error){
        res.status(500).json({msg:error});
    }

}

const getTask=async(req,res)=>{
    // res.json({id:req.params.id});
    try{
        const id=req.params.id;
        const task=await Task.findById(id);
        // const task=await Task.findOne({_id:id});
        if(!task){
            return res.status(404).json({msg:"no task with that Id"})
        }
        res.status(200).json({task});
    }catch(error){
        res.status(500).json({msg:error});
    }
}

const updateTask=async (req,res)=>{
    try {
        const id=req.params.id;
        const task=await Task.findOneAndUpdate({_id:id},req.body,{new:true,
        runValidators:true});
        if(!task){
            return res.status(404).json({msg:"no task with that Id"})
        }
        res.status(200).json({task});
    } catch (error) {
        
    }
}

const deleteTask=async (req,res)=>{
    try{
        const id=req.params.id;
        const task=await Task.findOneAndDelete({_id:id});
        // const task=await Task.findOne({_id:id});
        if(!task){
            return res.status(404).json({msg:"no task with that Id"})
        }
        res.status(200).json({status:'ok'});
    }catch(error){
        res.status(500).json({msg:error});
    }
}


module.exports={
    getAllTasks,getTask,updateTask,deleteTask,createTask
}