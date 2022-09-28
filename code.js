// function hello(name){
//     console.log("Hello " + name);
// }

// hello("Jakkawal");

//***************test module***************
// var testlog = require('./logger');
// testlog.log("Jakkawal");

//***************FS Module***************
// var fs =require('fs');

// fs.readFile('package.json',"utf-8",(err,data)=>{
//     console.log(data);
//     console.log("File opend!!");
// });

//***************Http module***************	
// var http = require('http');

// http.createServer((req,res)=>{
//     if(req.url=='/'){
//         res.write("Hello");
//         res.end();  
//         console.log("Finished request root");   
//     }
//     if(req.url=='/api/course'){
//         res.write("List all course");
//         res.end();
//         console.log("Finished request course");
//     }
// }).listen(3000);

// console.log("Listening on port 3000.....");

//***************Express***************
// const express = require('express');
// const res = require('express/lib/response');
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// var books = [
//     {
//         "id": "1",
//         "title" : "C programming"
//     },
//     {
//         "id": "2",
//         "title" : "JAVA programming"
//     }
// ]

// app.post('/book',(req,res)=>{
//     books.push(req.body);
//     res.send(req.body);
// });


// app.get('/',(req,res)=>{
//     res.send("Hello world form root");
// });
// app.get('/books',(req,res)=>{
//     res.json(books);
// });
// app.get('/book/:id',(req,res)=>{
//     // res.send("Book id : " + req.params.id);
//     res.send(books.find(book=>book.id==req.params.id));
// });

// app.listen(3000,()=>{
//     console.log("Listenon port 3000... ");
// })


