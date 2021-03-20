import express from 'express';
import 'dotenv/config';
import database from './database/database';
import route from './routes/router';
import cors from 'cors';
    
const app = express();
const port = process.env.PORT || 3795;
// http://localhost:3795

database.connect();

app.set('json spaces', 2);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(route);
app.use(cors());

app.listen(port, () => console.log(`Server running ${port}`));