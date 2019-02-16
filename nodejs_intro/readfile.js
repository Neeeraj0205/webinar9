const fs=require("fs");
fs.readFile( __dirname + "/myfie.txt",function(err,data){
    if(err) 
    throw err
console.log(data)
})