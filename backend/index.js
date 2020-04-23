const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 80;

http.listen(port, () => {
  console.log('listening on *:' + port);
});

app.get('/', (req, res) => {
  res.send('conectefd');
});

let data = [];

io.of("/chat").on('connection', (socket) => {
  console.log('a user connected ' + socket.id);
  socket.on('send', obj => {
    data.push(obj)

    console.log(socket.id);
    const filter = data.filter(e => {
      e.id === socket.id ? e.isPerson = true : e.isPerson = false
      return e;
    });

    socket.broadcast.emit('send', filter);
  });

  socket.on('getData', obj => {
    data.push(obj);
    socket.emit('getData', data);
  });
  socket.emit('getData', socket.id);

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

