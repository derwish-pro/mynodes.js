/**
 * Created by Derwish (derwish.pro@gmail.com) on 04.07.2016.
 * License: http://www.gnu.org/licenses/gpl-3.0.txt
 */

let socketio = require('socket.io');
let gateway = require('./gateway');


module.exports.listen = function (app) {
	io = socketio.listen(app).of('/mysensors');


	gateway.on('newNode', function (node) {
		// io.emit('newNode', node);
	});

	gateway.on('newSensor', function (node) {
		// io.emit('newSensor', node);
	});

	gateway.on('sensorUpdated', function (sensor, property) {
		// io.emit('sensorUpdated', sensor, property);
	});

	gateway.on('nodeUpdated', function (node, property) {
		// io.emit('nodeUpdated', node, property);
	});

	// io.on('connection', function (socket) {
	// 	debug("new user connected");
    //
	// 	socket.on('disconnect', function () {
	// 		debug("user disconnected");
	// 	});
	// });


	return io
};