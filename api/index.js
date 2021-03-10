import 'dotenv/config';
import express from 'express';
import database from './config/database';
import route from './routes/router';

const app = express();

database.connect();

app.set('json spaces', 2);
app.use(express.json());
app.use(route);
app.listen(process.env.PORT, () => console.log(`Server running at: http://localhost:8007/users`));
