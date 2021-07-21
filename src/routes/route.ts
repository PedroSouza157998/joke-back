import { Router } from 'express';
import Controller from '../controller/Controller';

const routes = Router();

routes.post('/register', Controller.create)
routes.get('/jokes', Controller.index)
routes.get('/joke/:id', Controller.show)

export default routes