const express = require(`express`);
const hbs = require(`hbs`);
const waxon = require(`wax-on`);

let app = express();
app.set(`view engine`,`hbs`)
app.use(express.static(`public`));

waxon.on(hbs.handlebars);
waxon.setLayoutPath(`./views/layout`);

app.get(`/`,(req,res)=>{
    res.render(`landing`);
})

app.get(`/:route`,(req,res)=>{
    let routeName = req.params.route;
    res.render(routeName);
})

app.listen(3000,()=>{
    console.log(`Server is Live`);
})