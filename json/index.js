const fs=require("fs");
const bioData={
    name:"vinod",
    age:26
}
const jsonData=JSON.stringify(bioData);
console.log(jsonData);

fs.writeFile("json1.json",jsonData,(err)=>{
    console.log("File created");
})

const objData=JSON.parse(jsonData);
console.log(objData);

fs.readFile("json1.json","UTF-8",(err,data)=>{
    console.log(data);
})
