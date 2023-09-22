const express = require('express');
const app = express();

const reqFilter = (req, res, next) => {
    const age = req.query.age;
    if (!age) {
        res.send("Please enter age");
    } else if (age < 18) {
        res.send("You cannot access this page, sorry...");
    } else {
        // res.send("So you are " + age + " years old");
        next();
    }
}

app.use(reqFilter);

app.get('/' , (req,res)=>{
    res.send('<h1>Welcome to the home page</h1>');
})

app.get('/users',(req,res)=>{
    res.send("<h1>welcome to the users page</h1>");
})

app.listen(8080);
