var express = require('express');
var app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
var players = {};
app.use(express.static(__dirname + '/public'));


// First of all I will add the new pages death mode and the simple mode.
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket) {
    console.log('a user connected');
    // create a new player and add it to our players object
    players[socket.id] = { /// socket id is the random thiung bro
        rotation: 0,
        x: Math.floor(Math.random() * 700) + 50,
        y: Math.floor(Math.random() * 500) + 50,
        playerId: socket.id,
        team: (Math.floor(Math.random() * 2) == 0) ? 'red' : 'blue'
    };
    // send the players object to the new player
    console.log(players[socket.id]);
    socket.emit('currentPlayers', players);
    // update all other players of the new player
    socket.broadcast.emit('newPlayer', players[socket.id]);

    // when a player disconnects, remove them from our players object
    socket.on('disconnect', function() {
        console.log('user disconnected');
        // remove this player from our players object
        Socker.emit('disconnect', socket.id);

        delete players[socket.id];
        // emit a message to all players to remove this player
    });
});
http.listen(8081, function() {
    console.log(`Listening on ${http.address().port}`);
});