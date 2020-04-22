const app = require('express')();
const http = require('http').createServer(app);
const socket = require('socket.io')(http);
const port = 80;

http.listen(port, () => {
  console.log('listening on *:' + port);
});

app.get('/', (req, res) => {
  res.send('conectefd');
});

let data = [];

socket.of("/chat").on('connection', (socket) => {
  console.log('a user connected');

  socket.on('getData', obj => {
    data.push(obj);
    socket.emit('getData', data); console.log(data);
  });
  socket.on('send', obj => {
    data.push(obj)
    socket.emit('send', data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

