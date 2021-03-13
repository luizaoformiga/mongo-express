import express from 'express';
import Login from '../controller/login';

const route = express.Router();

const routeSign = new Login();

route.get('/login', routeSign.get);
route.post('/sign', routeSign.post);

export default route;