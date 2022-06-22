const { append } = require('express/lib/response');
const express = require('express');
// const fs = require('fs');
// const http = require('http');
const path = require('path');
const port =8000;

const db = require('./views/config/mongoose');
const todo = require('./views/config/todo');

const app = express();

// const bodyParser = require('body-parser');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use('/views',express.static('views'));



var todolist =[
    {
    task:"cooking",
    date:11-10-2022,
    description:"......",
    category:"Family"
},
  {
    task:"dancing",
    date:10-10-2022,
    description:"......",
    category:"Personal"
},
{
    task:"study",
    date:12-10-2022,
    description:"......",
    category:"Academics"
}
]  



app.post('/create-list',function(req,res){

     todolist.push(req.body);

    return res.redirect('back');
    //     task: req.body.task,
    //     timeslot: req.body.timeslot,
    //     description:req.body.description
    // },
    //  function(err, todolist){
    //     if(err){console.log('Error in creating a todolist!')
    //         return;}
    //         console.log('******', todolist);
    //         return res.redirect('back');
    // })
    

 });

 app.get('/',function(req,res){
    //console.log('from the get route controller:',req.myName);
    // todolist.find({},function(err,task)
    // {
    //     if (err){
    //         console.log("Error in Tasks");
            
    //     }
        return res.render('home',{
            to_do_list:todolist
        });
    });
 //});
app.listen(port,function(err){
    if(err){
        console.log("Error",err);
    }
    console.log("Yupp,my server is running on port",port);
});


 app.get('/delete-list',function(req,res){
    console.log(req.query);
    let task = req.query.task;


    let todolistindex = todolist.findIndex(todolist => todolist.task == task);

    if(todolistindex != -1){
        todolist.splice(todolistindex, 1);
    }

   

    // todolist.findAndDelete(task, function(err){
    //     if(err){
    //         console.log('error in deleting the object');
    //         return;
    //     }
        return res.redirect('back');
    });
//});

