import { Router } from 'express';
import LoginController from '../controller/login';

const route = Router();
const routerLogin = new LoginController();

route.get('/home', routerLogin.get);
route.post('/home/sign', routerLogin.post);
route.put('/home/sign/:id', routerLogin.put);
route.patch('/home/sign/:id', routerLogin.patch);
route.delete('/home/sign/:id', routerLogin.delete);

export default route;