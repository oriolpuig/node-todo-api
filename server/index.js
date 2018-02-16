import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cors from 'cors';

import config from './config';
import dbConnect from './db';
import getRoutes from './routes';
const app = express();
let server = null;

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

// API Routes
getRoutes(app);

// DB Initialize
if (process.env.NODE_ENV === 'test') {
	server = dbConnect(app, config.test_db, config.test_port);
} else {
	server = dbConnect(app, config.db, config.port);
}

export {
	app,
	server,
};
