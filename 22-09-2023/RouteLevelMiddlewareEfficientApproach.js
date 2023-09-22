const express = require('express');
const reqFilter = require('./middlewareFunctionFile.js')
const app = express();
const route = express.Router();

route.use(reqFilter);

route.get('/' , (req,res)=>{
    res.send('<h1>Welcome to the home page</h1>');
})
app.get('/about' , (req,res)=>{
    res.send('<h1>Welcome to the about page</h1>');
})
app.get('/help' , (req,res)=>{
    res.send('<h1>Welcome to the help page</h1>');
})
app.get('/users',(req,res)=>{
    res.send("<h1>welcome to the users page</h1>");
})
route.get('*',(req,res)=>{
    res.send("<h1>Page you are looking for not found</h1>");
})
app.use('/' , route);
app.listen(8080);
