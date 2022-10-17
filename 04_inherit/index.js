const express = require(`express`);
const hbs = require(`hbs`);
const waxon = require(`wax-on`);

let app = express();
app.set(`view engine`,`hbs`);
app.use(express.static(`public`))

waxon.on(hbs.handlebars);
waxon.setLayoutPath('./views/layouts');

app.get(`/`,(req,res)=>{
    res.render(`home`);
})

app.get(`/:route`,(req,res)=>{
    let routename = req.params.route
    res.render(routename);
})

app.listen(3000,()=>{
    console.log(`Server is Live`);
})