import express from 'express';
import database from './config/database';
import route from './routes/router';

const app = express();
const port = 9008;

app.use(express.json());
app.use(route);

database.connect();

app.listen(port, () => console.log('Server running at: http://localhost:9008/users'));
