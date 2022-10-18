const express = require(`express`);
const hbs = require(`hbs`);
const waxon = require(`wax-on`);

let app = express();
app.set(`view engine`,`hbs`);

waxon.on(hbs.handlebars);
waxon.setLayoutPath(`./views/layout`);

app.listen(3000,()=>{
    console.log(`Server is Live`);
})

app.get(`/`,(req,res)=>{
    res.render(`index`);
})