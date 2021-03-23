import express from 'express';
import Login from '../controller/login';

const route = express.Router();

const routeLogin = new Login();

route.get('/home', routeLogin.get);
route.post('/home/login', routeLogin.post);

export default route;