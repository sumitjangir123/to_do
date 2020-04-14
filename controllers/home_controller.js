const db=require('../config/mongoose');
const todoList=require('../models/todo_list');

//home controller
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

//adding controller
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

//delete controller
module.exports.delete_tasks=function(req,res){

    for(i in req.query.id){

        let id=req.query.id;

        todoList.findByIdAndDelete(id,function(err){
                if(err){
                    console.log("error in deleting task from database !!! ");
                    return;
                }
        });
    }
    return res.redirect('back');
}