
var socket = io.connect('http://localhost:4000');
socket.on('connect',function (data) {
    socket.emit('join','Hi server form client');
})