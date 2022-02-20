const fs = require("fs");
const http=require("http");
const server=http.createServer((req,res)=>{
    const data=fs.readFileSync(`${__dirname}/userapi.json`,"utf-8")
        // console.log(data);
    const objdata=JSON.parse(data);
    if(req.url=="/"){
        res.end("Hello Home");
    }
    else if(req.url=="/about"){
        res.end("About");
    }
    else if(req.url=="/userapi"){
        res.writeHead(200,{"Content-type":"application/json"});
            // res.end(data);
            res.end(objdata[0].name);
        // res.end("Userapi");
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"}); 
        res.end("404");
    }
    
})
server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening 8000");
});