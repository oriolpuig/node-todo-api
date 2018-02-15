import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cors from 'cors';

import config from './config';
import dbConnect from './db';
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

if (process.env.NODE_ENV === 'test') {
    dbConnect(app, config.test_db, config.test_port);
} else {
    dbConnect(app, config.db, config.port);
}
