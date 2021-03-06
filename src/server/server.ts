/**
 * Created by Derwish (derwish.pro@gmail.com) on 04.07.2016.
 * License: http://www.gnu.org/licenses/gpl-3.0.txt
 */


import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as morgan from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
// import * as expressValidator from 'express-validator';
let expressValidator = require('express-validator');
import * as http from 'http';
import * as socket from 'socket.io';

const log = require('logplease').create('server', { color: 3 });

import { EditorServerSocket } from "./editor-server-socket"
import { DashboardServerSocket } from "./dashboard-server-socket"
import app from "../app";

let isDev = process.env.NODE_ENV !== 'production';


let config = require('../../config.json');

export class Server {
    express: express.Application;
    server: http.Server;

    editorSocket: EditorServerSocket;
    dashboardSocket: DashboardServerSocket;


    constructor() {
        this.express = express();
        this.express.locals.moment = require('moment');
        if (isDev) this.connectWebPackLiveReload();
        this.middleware();
        this.routes();
        this.handeErrors();
        this.configure();
        this.start_io();
    }

    private connectWebPackLiveReload() {
        //webpack live-reloading
        var webpack = require('webpack');
        var webpackConfig = require('../../webpack.config');
        var compiler = webpack(webpackConfig);

        // Attach the dev middleware to the compiler & the server
        this.express.use(require("webpack-dev-middleware")(compiler, {
            noInfo: true, publicPath: webpackConfig.output.publicPath
        }));

        //  Attach the hot middleware to the compiler & the server
        this.express.use(require("webpack-hot-middleware")(compiler, {
            log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
        }));
    }



    private middleware() {
        // uncomment after placing your favicon in /public
        //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
        if (config.webServer.debug)
            this.express.use(morgan('dev', {
                skip: function (req, res) {
                    return res.statusCode < 400
                }
            }));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(cookieParser());
        this.express.use(expressValidator());
        //merge two static folders in root url
        this.express.use("/", express.static(__dirname + "/../../static-files"));
        this.express.use("/", express.static(__dirname + "/../public"));
    }

    private routes() {
        //api console logger
        this.express.use('/api/', function (req, res, next) {
            let send = res.send;
            (<any>res).send = function (body) {
                if (res.statusCode != 200)
                    log.warn(body);
                // else
                // log.debug(body);

                send.call(this, body);
            };
            next();
        });
        this.express.use('/', require('./routes/first-run'));
        this.express.use('/', require('./routes/index'));
        this.express.use('/dashboard', require('./routes/dashboard'));
        this.express.use('/api/dashboard', require('./routes/api-dashboard'));
        this.express.use('/editor', require('./routes/editor'));
        this.express.use('/api/editor', require('./routes/api-editor'));
    }

    private handeErrors() {
        // // catch 404 and forward to error handler
        // this.express.use(function (req, res, next) {
        //     let err = new Error('Not Found');
        //     (<any>err).status = 404;
        //     next(err);
        // });

        // error handlers
        // development error handler: will print stacktrace
        if (isDev) {
            this.express.use((err: Error & { status: number }, req: express.Request, res: express.Response, next: express.NextFunction): void => {
                log.warn(err);
                res.status(err.status || 500);
                res.render('error', { message: err.message, error: err });
            });
        }
        // production error handler: no stacktraces leaked to user
        else {
            this.express.use((err: Error & { status: number }, req: express.Request, res: express.Response, next: express.NextFunction): void => {
                log.warn(err);
                res.status(err.status || 500);
                res.render('error', { message: err.message, error: {} });
            });
        }
    }

    private configure() {

        const port = normalizePort(process.env.PORT || 1312);
        this.express.set('port', port);

        this.server = http.createServer(this.express);
        this.server.listen(port);
        this.server.on('error', onError);
        this.server.on('listening', onListening);

        // let io=socket(this.server);
        //
        //
        //
        // io.on('connection', function(socket){
        //     socket.on('chat message', function(msg){
        //         io.emit('chat message', msg+"2");
        //     });
        // });

        function normalizePort(val: number | string): number | string | boolean {
            let port: number = (typeof (val) === 'string') ? parseInt(val, 10) : val;
            if (isNaN(port)) return val;
            else if (port >= 0) return port;
            else return false;
        }

        var that = this;

        function onError(error: NodeJS.ErrnoException): void {
            if (error.syscall !== 'listen') throw error;
            let bind = (typeof (port) === 'string') ? 'Pipe ' + port : 'Port ' + port;
            switch (error.code) {
                case 'EACCES':
                    console.error(`${bind} requires elevated privileges`);
                    process.exit(1);
                    break;
                case 'EADDRINUSE':
                    console.error(`${bind} is already in use`);
                    process.exit(1);
                    break;
                default:
                    throw error;
            }
        }

        function onListening(): void {
            let addr = that.server.address();
            let bind = (typeof (addr) === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
            log.info(`Listening on ${bind}`);
        }
    }

    private start_io() {
        let io_root = socket(this.server);
        this.editorSocket = new EditorServerSocket(io_root);
        this.dashboardSocket = new DashboardServerSocket(io_root);
    }
}



