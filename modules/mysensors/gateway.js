var debug = require('debug')('gateway:mys');
var debugErr = require('debug')('gateway:mys:[ERROR]');
debugErr.color = 1;

var split = require("split");


module.exports.serialGateway = function (portName, baudRate) {
	if (!portName) throw new Error("portName is not defined!");
	baudRate = baudRate || 115200;

	var SerialPort = require("serialport").SerialPort;
	var port = new SerialPort(portName, {baudrate: baudRate}, false);

	function connect() {
		debug("Connecting to " + portName + " at " + baudRate + " ...");
		port.open();
	}

	port.on("open", function () {
		debug("Connected");
	});

	port.on("error", function (err) {
		debugErr("Connection failed. " + err);
		setTimeout(connect, 1000);
	});

	port.on("close", function () {
		debug("Connection closed. ");
	});

	port.on("disconnect", function (err) {
		debug("Disconnected. " + err);
	});

	connect();

	return new Gateway(port);
};


function Gateway(port) {
	this.port = port;
	this.nodes = [];

	port.pipe(split()).on("data", this._readPortData);
}


Gateway.prototype._readPortData = function (data) {
	debug(data);
};