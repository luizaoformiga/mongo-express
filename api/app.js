import express from 'express';
import database from './database/database';
import route from './routes/router';
import cors from 'cors';
    
const app = express();

database.connect();

app.set('json spaces', 2);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(route);
app.use(cors());

export default app;