const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('new connection', socket.id);

  //on 'read'
  socket.on('incoming-file', (file) => {
    // console.log(file);
    socket.broadcast.emit('file-read', file);
  });

  //on 'error'
  socket.on('file-error', (error) => {
    console.error(error);
    socket.broadcast.emit('error-message', error);
  });

  //on 'save'
  
});

