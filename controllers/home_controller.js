const db=require('../config/mongoose');
const todoList=require('../models/todo_list');

// const app=express();
// app.use(express.urlencoded());

module.exports.home=function(req,res){

    todoList.find({},function(err,list_After){
        if(err){
            console.log(" error in fetching contacts from database !!!");
            return;
        }
        return res.render('home', {
            task_list: list_After,
            title:"TODO APP"
        });
    })
}

module.exports.add_in_list=function(req,res){

    todoList.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date},
        function(err,newTask){
            if(err){
                console.log('error in creating task !!!');
                return;
            }

            console.log("*****",newTask);
            return res.redirect('back');
        })
}