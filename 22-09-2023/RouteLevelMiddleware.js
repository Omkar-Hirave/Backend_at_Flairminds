const express = require('express');
const reqFilter = require('./middlewareFunctionFile.js')
const app = express();
// app.use(reqFilter);

app.get('/' ,reqFilter, (req,res)=>{
    res.send('<h1>Welcome to the home page</h1>');
})
app.get('/about' ,reqFilter , (req,res)=>{
    res.send('<h1>Welcome to the about page</h1>');
})
app.get('/help' , (req,res)=>{
    res.send('<h1>Welcome to the help page</h1>');
})

app.get('/users',(req,res)=>{
    res.send("<h1>welcome to the users page</h1>");
})

app.listen(8080);
