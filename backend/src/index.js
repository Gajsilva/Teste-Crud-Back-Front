const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const server = require('http').Server(app);
const io = require('socket.io')(server);


app.use((req, res, next) =>{
    req.io = io;
    
    next();
});

app.use(cors());
app.use(require('./routes'));

server.listen(port, () => {
    console.log(`Servidor rodando na porta de conexão ${port}.`)
  })
