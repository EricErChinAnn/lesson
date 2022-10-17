const express = require('express');

let app = express();
app.set(`view engine`,`hbs`);
app.use(express.static(`public`));

app.get("/", function(req,res){
  res.send("Hello world");
})

app.listen(3000, function(){
  console.log("Server has started");
});

app.get('/color/:colorname',(req,res)=>{
    let colorname = req.params.colorname;
    res.render(`index.hbs`,{
        "colorname":colorname
    })
})

app.get("/:routeName", function(req,res){
    let route = req.params.routeName
    res.render(route);
  })
