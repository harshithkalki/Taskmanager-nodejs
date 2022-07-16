const notFound=(req,res)=>{
    res.status(404).send("route notfound!!!");
}

module.exports=notFound;