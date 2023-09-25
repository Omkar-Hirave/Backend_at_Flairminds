const mysql = require('mysql');
const con = mysql.createConnection({
    host : 'localhost' , 
    user : "Omkar",
    password : "Omkar@123",
    database : "test"
});
console.log("Connected successfully....");

module.exports = con; 