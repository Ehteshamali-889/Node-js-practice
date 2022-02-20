const EventEmitter=require("events");
const event=new EventEmitter();

// event.on('sayMyName',()=>{
//     console.log("I am Ehtesham Ali")
// })

// event.on('sayMyName',()=>{
//     console.log("I am Ehtesham Ali")
// })
// event.on('sayMyName',()=>{
//     console.log("I am Ehtesham Ali")
// })

// event.emit("sayMyName")

event.on('checkPage',(sc,msg)=>{
    console.log(`Status code ${sc} and page is ${msg}`);
})

event.emit("checkPage",200,"ok");