import 'dotenv/config';
import express from 'express';
import database from './database/database';
import route from './routes/router';
import cors from 'cors';
    
const app = express();
const port = 7769;

database.connect();

app.set('json spaces', 2);

app.use(express.json());
app.use(route);
app.use(cors());

app.listen(port, () => console.log(`Server running at: 7769`));