const express = require('express');
const path = require('path');
const app = express();

// app.use(express.static(__dirname));
// When we have to display static content 
app.get('',(req , res)=>{
    res.send("Welcome user to the next page...");
    // res.sendFile(`${__dirname}/index.html`);
})
app.get('/about',(req , res)=>{
    res.sendFile(`${__dirname}/about.html`);
})
app.get('/help',(req , res)=>{
    res.sendFile(`${__dirname}/help.html`);
})
app.get('*',(req , res)=>{
    res.sendFile(`${__dirname}/404_Page.html`);
})

app.listen(8080);
