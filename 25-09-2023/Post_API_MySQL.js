const express = require('express');
const con = require('./config.js')

const app = express();

// Sending the static data through postman 
// app.post('/',(req , res)=>{
//     const data = {StudentsId : 4354 , FirstName : "Shubham" , LastName : "Shinde" , CourseTaken : "Police recruitment" , College : "MSK college"}
//     con.query("INSERT INTO Students SET ? " , data , (error , result , fields)=>{
//         if(error) throw error;
//         res.send(result);
//     })
// })

// Sending dynamic data through postman
app.use(express.json());
app.post('/',(req , res)=>{
    const data = req.body;
    con.query("INSERT INTO Students SET ? " , data , (error , result , fields)=>{
        if(error) throw error;
        res.send(result);
    })
})

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
