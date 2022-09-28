const express = require('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'testnode'

    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME
});

connection.connect((err)=>{
    if(err) throw err;
    console.log("Your are now connected with mysql database....");
});

app.listen(3000,()=>{
    console.log("Listen on port 3000.....");
});

app.get('/customers',(req,res)=>{
    connection.query('SELECT * FROM customer',(err,results,fields)=>{
        if(err) throw err;
        res.json(results);
    });
});

app.get('/customer/:id',(req,res)=>{
    connection.query('SELECT * FROM customer WHERE id=?',[req.params.id],(err,results,fields)=>{
        if(err) throw err;
        res.json(results);
    });
});

app.post('/customer',(req,res)=>{
    let params = req.body;
    connection.query('INSERT INTO customer SET ?',params,(err,results,fields)=>{
        if(err) throw err;
        res.json(results);
    });
});

app.delete('/customer',(req,res)=>{
    connection.query('DELETE FROM customer WHERE id=?',[req.params.id],(err,results,fields)=>{
        if(err) throw err;
        res.end("Recore has been deleted...");
    });
});

app.put('/customer',(req,res)=>{
    connection.query('UPDATE customer SET Name=?, Address=?, Country=?, Phone=? WHERE id = ?',[req.body.Name,req.body.Address,req.body.Country,req.body.Phone,req.body.Id],params,(err,results,fields)=>{
        if(err) throw err;
        res.json(results);
    });
});