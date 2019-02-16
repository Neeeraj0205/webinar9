const fs= require("fs");
fs.writeFile(__dirname+ "/myfie.txt","some data",function(err){
    if(err)
    throw err
    console.log("file is written")
})