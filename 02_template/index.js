const express = require(`express`);

let app = express();

app.set(`view engine`, `hbs`);

app.use(express.static(`public`));

app.get("/",(req,res)=>{
    res.render(`index.hbs`);
})

app.listen(3000,()=>{
    console.log(`server is up`);
})

app.get(`/greeting/:firstname/:lastname`,(req,res)=>{
    let firstname = req.params.firstname;
    let lastname = req.params.lastname;
    res.render(`greeting`,{
        "firstname":firstname,
        "lastname":lastname
    })
})