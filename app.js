var list1 =[1,2];
console.log(list1);
// Requiring express NPM
const express = require('express');
const app = express();

// Requiring body-parser npm

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// Static public directory to hold css, images & external js files

app.use(express.static("public"));

// Root route - Displays home page

app.get("/", function(req, res){
  res.sendFile(__dirname + '/poker.html');
});

//join route - Displays Hand page

app.get("/join.html", function(req, res){
  res.sendFile(__dirname + '/hand.html');
});

// server listening on port 3000 locally and env.port for heroku

app.listen(process.env.PORT || 3000, function(){
  console.log("Crazy Poker is running");
});
