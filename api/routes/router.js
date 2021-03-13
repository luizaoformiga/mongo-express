import express from 'express';
import Login from '../controller/login';

const route = express.Router();

const routeSign = new Login();

route.get('/', routeSign.get);
route.post('/login', routeSign.post);

export default route;