var Player = require('./player.js').Player;

var player1 = Object.create(Player);

module.exports = function(io){
	io.on('connection', function(socket){
		console.log('a user connected');

		socket.on('Get Position', function(data){
			console.log(data.x);

			// En réponse on envera les cordonées pour les mettres à jour
			io.emit('Receive Position', data);
		});

		socket.on('disconnect', function(){
			console.log('user disconnected');
		});
	});

}