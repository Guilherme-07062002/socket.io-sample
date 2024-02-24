import { Server } from 'socket.io';
import express from 'express';
import http from 'http';

const app = express();
const server = http.createServer(app);

const io = new Server(server);

io.on('connection', async (socket) => {
  console.log('a user connected');

  socket.on('click button', async (data) => {
    console.log(`server received: ${data}`);
    io.emit('click button', data);
  })
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
  console.log('\nlistening on 3000');
});