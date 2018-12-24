//funciones de tiempo real
var socket = io();

//Funcion que ocurre cuando te conectas al servidor
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
//Cuando perdemos la coneccion con el servidor
socket.on('disconnect', function() {
    console.log('Perdimos conección con el servidor');
});
//Enviar informacion 
socket.emit('enviarMensaje', {
    usuario: 'Samuel',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor', mensaje);
});