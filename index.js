const express = require('express');
const app = express();

var connection = require('./config/connection');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(3000,()=>{
    console.log("Listen on port 3000 .... ");
});

app.get('/customers', (req,res)=>{
    connection.query('SELECT * FROM customer',(err,results,fields)=>{
        if(err) throw err;
        res.json(results);
    })
})

app.get('/customers/name', (req,res)=>{
    connection.query('SELECT Name FROM customer',(err,results,fields)=>{
        if(err) throw err;
        res.json(results);
    })
})

app.get('/customer/:id', (req,res)=>{
    let sql = 'SELECT * FROM customer WHERE id=' + [req.params.id];
    connection.query(sql,(err,results,fields)=>{
        if(err) throw err;
        res.json(results);
    })
})

app.post('/customer',(req,res)=>{
    let user = {
        "name" : req.body.name,
        "address" : req.body.address,
        "country" :req.body.country,
        "phone" : req.body.phone
    };
    let sql = 'INSERT INTO customer SET ?';
    connection.query(sql,user,(err,results,fields)=>{
        if(err) throw err;
        res.json(results);
    })
});

app.delete('/customer/:id',(req,res)=>{
    let sql = 'DELETE FROM customer WHERE id =' + [req.params.id];
    connection.query(sql,(err,results,fields)=>{
        if(err) throw err;
        res.end('Record has been deleted...');
    })
});

app.put('/customer/:id',(req,res)=>{
    let user = {
        "name" : req.body.name,
        "address" : req.body.address,
        "country" :req.body.country,
        "phone" : req.body.phone
    };
    let sql = 'UPDATE customer SET ? WHERE id = ?';
    connection.query(sql,[user,req.params.id],(err,results,fields)=>{
        if(err)throw err;
        res.json(results);
    });

});















