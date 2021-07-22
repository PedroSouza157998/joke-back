import { Router } from 'express';
import Controller from '../controller/Controller';

const routes = Router();

routes.post('/register', Controller.create)
routes.get('/users', Controller.index)
routes.get('/user/:id', Controller.show)

export default routes