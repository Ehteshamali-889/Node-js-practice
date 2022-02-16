const fs=require("fs");
// fs.writeFile("read.txt","today is day",(err)=>{
//     console.log("File is created");
// })

// fs.appendFile("read.txt","So great day",(err)=>{
//     console.log("File is created");
// })
fs.readFile("read.txt","UTF-8",(err,data)=>{
    console.log(data);
})