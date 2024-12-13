// server.js
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });


server.on('connection', (socket) => {
    console.log('Kliens csatlakozott.');

    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
        var randomValue = (getRandom(-20,50)).toFixed(0); // Véletlenszerű szám 0-100 között

        socket.send(randomValue);
    }, 2000);

    socket.on('close', () => {
        clearInterval(interval);
        console.log('Kliens lecsatlakozott.');
    });
});



console.log('WebSocket szerver fut a 8080-as porton.');