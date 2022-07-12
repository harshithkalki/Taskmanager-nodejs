const mongoose=require('mongoose');


const dburl='mongodb://localhost:27017/taskmanager';
mongoose.connect(dburl)
.then(()=>{
    console.log("CONNECTED TO THE DB...");
})
.catch((err)=>{
    console.log(err)
})