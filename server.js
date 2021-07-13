var express = require('express');
var app =express();
var server = require('http').createServer(app);
app.get('/',function (re,res,ex){
    res.sendFile(__dirname + "/public/index.html");


});
app.use(express.static('public'));
app.listen(4000,()=>{
    console.log("sever is listening on port 4000");
});
var io = require('socket.io')(server);
console.log('111')
io.on('connect',function (socket){
    console.log('1222');
    console.log(' A new client has been connected...')
    socket.on('join',function (data) {
        console.log(data);
    })
})