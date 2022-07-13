const mongoose=require('mongoose');

const TaskSchema= new mongoose.Schema({
    name: {
        type:String,
        required:true,
        trim:true,
        maxlength:[20,"name cannot be more than 20 char"]
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task', TaskSchema);