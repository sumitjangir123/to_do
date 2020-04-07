const mongoose=require('mongoose');

const todoListSchema= new mongoose.Schema({
    description:{
        type:String
    },
    category:{
        type:String
    },
    date:{
        type:Date
    }
});

const todoList=mongoose.model('todoList',todoListSchema);
module.exports=todoList