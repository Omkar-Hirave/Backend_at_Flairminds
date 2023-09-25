const express = require('express');
const con = require('./config');

const app = express();
// Statically update the data 
// app.put('/',(req , res)=>{
//     const data = ["Ashish","Tiwari" ,"B.Tech(E&TC)",1];
//     con.query("UPDATE Students SET firstName = ? , lastName = ? , CourseTaken = ? WHERE  StudentsId =?",data , (error , results ,fields)=>{
//         if(error) throw error
//         res.send(results);
//     })
// })
// dynamically update the data using postman 
app.use(express.json());
app.put('/:StudentsId',(req ,res)=>{
    const data = [req.body.firstName , req.body.lastName , req.body.CourseTaken , req.body.college , req.params.StudentsId];
    con.query("UPDATE Students SET firstName = ? , lastName = ? , CourseTaken = ? , College = ? WHERE  StudentsId =?",data , (error , results ,fields)=>{
                if(error) throw error
                res.send(results);
            })
})

app.listen(4040, () => {
    console.log('Server is running on http://localhost:4040');
});