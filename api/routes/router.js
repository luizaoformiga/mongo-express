import express from 'express';
import UserControl from '../controller/userControl';

const route = express.Router();
const userRoute = new UserControl();

route.post('/users', userRoute.post);
route.get('/users', userRoute.get);
route.get('/users/:id', userRoute.getId);

export default route;