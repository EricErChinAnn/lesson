const express = require('express');

// 1. SETUP
let app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));

// 2. ROUTES
app.get("/", function(req, res) {
  res.render("index");
})

// 3. LISTEN
app.listen(3000, function() {
  console.log("Server is Live");
})