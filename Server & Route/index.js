const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Hello Home");
    }
    else if(req.url=="/about"){
        res.end("About");
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"}); 
        res.end("404");
    }
    
})
server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening 8000");
});