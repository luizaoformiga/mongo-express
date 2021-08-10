import express from 'express';
import cors from 'cors';
import database from '@/database';
import route from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(route);

database.connect();

export default app;  