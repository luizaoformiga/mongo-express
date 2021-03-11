import 'dotenv/config';
import express from 'express';
import database from './database/database';
import route from './routes/router';
import { verifyToken } from './middlewares/auth';

const app = express();

database.connect()

app.set('json spaces', 2);

app.use(express.json());
app.use(route);
app.use(verifyToken);

app.listen(process.env.PORT, () => console.log(`Server running at: http://localhost:8088/users`));
