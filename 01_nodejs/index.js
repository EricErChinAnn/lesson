
const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send(`Hello`)
})

app.listen(3000, function(){
    console.log(`Server is up`);
})