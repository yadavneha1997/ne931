var http = require("http");
var url = require('url');
var fs = require('fs');
var io = require('socket.io');

var server = http.createServer(function(request, response){
    var path = url.parse(request.url).pathname;

var listener = io.listen(server);
listener.sockets.on('connection', function(socket){
    socket.emit('message', {'message': 'gud evng'});
});

var socket = io.connect();

socket.on('message', function(data){
    console.log(data.message);
});

setInterval(function(){
    console.log('gd evng');
}, 1000);


io.sockets.on('connection', function(socket){
    //send data to client
    setInterval(function(){
        socket.emit('date', {'date': new Date()});
    }, 1000);
});

server.listen(8001);
});
io.listen(server);