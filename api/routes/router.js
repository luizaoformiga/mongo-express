import express from 'express';
import UserControl from '../controller/userControl';

const route = express.Router();
const userRoute = new UserControl();

route.post('/users', userRoute.post);
route.get('/users', userRoute.get);
route.get('/users/:id', userRoute.getId);
route.put('/users', userRoute.put);
route.patch('users/:id', userRoute.patch);
route.delete('/users/:id', userRoute.delete);

export default route;