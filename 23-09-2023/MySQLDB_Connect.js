// Connecting to the mysql database to fetch data 
const mysql= require("mysql");

const con = mysql.createConnection({
  host:"localhost",
  user:"Omkar",
  password:"Omkar@123",
  database:"test"
});

con.connect((err)=>{
  if(err)
  {
    console.log(err);
    console.warn("You are not yet connected....")
  }else{
    console.warn("Connected to database successfully...!!!")
  }
})

con.query("select * from students",(err,result)=>{
  if(err)
  {
    console.warn("some error")
  }
  else{
    console.warn(result)
  }
})
