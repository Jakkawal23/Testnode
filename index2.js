const express = require('express');
const app = express();

var connection = require('./config/connection2');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(3000,()=>{
    console.log("Listen on port 3000 .... ");
});

app.get('/accounts', (req,res)=>{
    connection.query('SELECT * FROM account',(err,results,fields)=>{
        if(err) throw err;
        res.json(results);
    });
});

app.get('/account/:account_number', (req,res)=>{
    let sql = "SELECT * FROM account WHERE account_number='" + [req.params.account_number]+"'";
    connection.query(sql,(err,results,fields)=>{
        if(err) throw err;
        res.json(results);
    });
});

app.post('/account',(req,res)=>{
    let user = {
        "account_number" : req.body.account_number,  
        "branch_name" : req.body.branch_name,
        "balance" :req.body.balance
    };
    let sql = 'INSERT INTO account SET ?';
    connection.query(sql,user,(err,results,fields)=>{
        if(err) throw err;
        res.json(results);
    });
});

app.delete('/account/:account_number',(req,res)=>{
    let sql = "DELETE FROM account WHERE account_number ='" + [req.params.account_number]+"'";
    connection.query(sql,(err,results,fields)=>{
        if(err) throw err;
        res.end('Record has been deleted...');
    });
});

app.put('/account/:account_number',(req,res)=>{
    let user = {
        // "account_number" : req.params.account_number,
        "branch_name" : req.body.branch_name,
        "balance" :req.body.balance
    };
    let sql = "UPDATE account SET ? WHERE account_number = '" + [req.params.account_number]+"'";
    connection.query(sql,user,(err,results,fields)=>{
        if(err)throw err;
        res.json(results);
    });
});















