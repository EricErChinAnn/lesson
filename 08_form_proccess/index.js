const express = require(`express`);
const { handlebars } = require("hbs");
const hbs = require(`hbs`);
const waxon = require(`wax-on`);

let app = express();
app.set(`view engine`,`hbs`);
app.use(express.static(`public`));
waxon.on(hbs.handlebars);
waxon.setLayoutPath(`./views/layout`);

app.use(express.urlencoded({
    "extended":false
}))

app.listen(3000,()=>{
    console.log(`Server is Live`);
})

app.get(`/`,(req,res)=>{
    res.render(`home`);
})

app.post(`/`,(req,res)=>{
    console.log(req.body);
    let foodName = req.body.foodName;
    let cal = req.body.cal;
    let meal = req.body.meal;
    let selectedTag = null;
    if(req.body.tags){
        if(Array.isArray(req.body.tags)){
            selectedTag = req.body.tags;
        } else {
            selectedTag = [req.body.tags];
        }
    } else {
        selectedTag=[];
    }
    res.render(`foodinfo`,{
        "foodName": foodName,
        "cal": cal,
        "meal": meal,
        "selectedTags": selectedTag
    })
    // res.send(`${foodName} has ${cal}cal for ${meal}, the meal is ${selectedTag}`);
})