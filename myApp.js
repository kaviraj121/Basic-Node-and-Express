var express = require('express');
var app = express();
require('dotenv').config();
var bodyParser = require('body-parser')

app.use(function(req,res,next){
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 

console.log( "Hello World");

app.use(express.static(__dirname + "/public"));
app.get('/',(request,response)=>{
    response.sendFile( __dirname + "/views/index.html");
});

app.get('/json', (req, res)=>{
    const message = (process.env.MESSAGE_STYLE === 'uppercase') ? 'HELLO JSON' : 'Hello json';
    res.json({
         message 
        });
});

function getCurrentTimeString(){
    return new Date().toString();
}
app.get("/now", function(req,res,next){

    req.time =getCurrentTimeString();
    next();
},function(req,res){
    res.json({time: req.time});
});

app.get("/:word/echo",function(req,res){
    res.json({echo: req.params.word});
});

app.get("/name", function(req,res){
    res.json({ name: req.query.first + " " + req.query.last});
});

app.post("/name",function(req,res){
    res.json({ name: req.body.first + " " + req.body.last});
});
























 module.exports = app;
