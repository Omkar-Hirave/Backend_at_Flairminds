const express = require('express');
const con = require('./config.js');
const app = express();

app.get('/',(req , res)=>{
    con.query("SELECT * FROM Students",(err,result)=>{
        if(err){
            res.send("Something wrong with the data....")
        }else{  
            res.send(result);
        }
    })    
})

app.listen(8080);
