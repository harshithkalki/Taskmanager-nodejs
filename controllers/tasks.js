


const getAllTasks=(req,res)=>{
    res.send("all filessss");
}

const createTask=(req,res)=>{
    res.json(req.body);
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