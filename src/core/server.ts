import express, { Express } from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import lusca from 'lusca';
import cors from 'cors';
import * as routes from '../routes';

export const app: Express = express();

app.use(compression());
app.use(bodyParser.raw());
app.use(bodyParser.text({ type: ['*/xml'], limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.options('*', cors());

app.use('/', routes.rootRouter);
app.use('/blog', routes.blogRouter);
app.use('/images', routes.imageRouter);
