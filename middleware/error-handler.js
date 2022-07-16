const errorHandlerMiddleware=(err,req,res,next)=>{
    res.status(500).json({msg:err})
}

module.exports=errorHandlerMiddleware