import express from 'express';
import Login from '../controller/login';

const route = express.Router();

const routeLogin = new Login();

route.get('/', routeLogin.get);
route.post('/sign', routeLogin.post);

export default route;