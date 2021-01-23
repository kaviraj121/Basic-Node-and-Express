var express = require('express');
var app = express();

console.log( "Hello World");


app.get('/',(request,response)=>{
    response.send( "Hello Express");
});































 module.exports = app;
