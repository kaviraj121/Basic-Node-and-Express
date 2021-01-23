var express = require('express');
var app = express();

console.log( "Hello World");

app.use(express.static(__dirname + "/public"));
app.get('/',(request,response)=>{
    response.sendFile( __dirname + "/views/index.html");
});



























 module.exports = app;
