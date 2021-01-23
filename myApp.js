var express = require('express');
var app = express();

console.log( "Hello World");

app.use(express.static(__dirname + "/public"));
app.get('/',(request,response)=>{
    response.sendFile( __dirname + "/views/index.html");
});

app.get('/json', (req, res)=>{
    const message = (process.env.MESSAGE_STYLE == 'uppercase') ? 'HELLO JSON' : 'Hello json';
    res.json({
         message 
        });
});

























 module.exports = app;
