const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/profile',(req , res)=>{
    const user = {
        name : "Omkar Hirave",
        email : "omkarhirve05@gmail.com",
        city : "Baramati",
        Phone : 9529433723
    }
    res.render('profile',{user});
})
app.listen(8080);