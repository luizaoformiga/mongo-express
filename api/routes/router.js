import express from 'express';
import Login from '../controller/login';

const route = express.Router();

const routeLogin = new Login();

route.get('/sign', routeLogin.get);
route.post('/login', routeLogin.post);

export default route;