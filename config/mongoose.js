const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/todo_list_data');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error connecting to db'));
db.once('open',function(){
    console.log('sucessfully connected to the database ');
});