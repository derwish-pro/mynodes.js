(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./public/nodes/utils", "path", "./modules/web-server/server", "./public/nodes/container"], factory);
    }
})(function (require, exports) {
    "use strict";
    require('source-map-support').install();
    const utils_1 = require("./public/nodes/utils");
    /**
     * Created by Derwish (derwish.pro@gmail.com) on 04.07.2016.
     */
    console.log("-------- MyNodes ----------");
    const path = require("path");
    global.__rootdirname = path.resolve(__dirname);
    const server_1 = require("./modules/web-server/server");
    utils_1.default.debug("Server started at port " + server_1.server.server.address().port, "SERVER");
    // import 'modules/debug/configure'
    // import {App} from '/modules/web-server/server'
    // import 'modules/mysensors/gateway'
    // import 'modules/web-server/server'
    //
    // //mysensors gateway
    // // if (config.gateway.mysensors.serial.enable) {
    // // 	mys_gateway.connectToSerialPort(config.gateway.mysensors.serial.port, config.gateway.mysensors.serial.baudRate);
    // // }
    //
    //
    const container_1 = require("./public/nodes/container");
    // let rootContainer=require('./public/nodes/rootContainer');
    container_1.rootContainer.socket = server_1.server.socket.io;
    require('./public/nodes/nodes');
    require('./public/nodes/nodes/main');
    require('./public/nodes/nodes/debug');
    require('./public/nodes/nodes/math');
    require('./modules/test').test();
});
//# sourceMappingURL=app.js.map