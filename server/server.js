const express = require('express'); //Es un pequeño framework para web
const socketIO = require('socket.io'); //Nos ayuda a recivir y enviar respuestas en tiempo real
const http = require('http');

const path = require('path'); //Nos ayuda a armar los caminos

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
//IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);

//Saber cuando se conecta un usuario
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});