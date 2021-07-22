import { Router } from 'express';
import Controller from '../controller/Controller';

const routes = Router();

routes.post('/register', Controller.create)
routes.post('/save_joke/:id', Controller.newPost)
routes.get('/users', Controller.index)
routes.get('/user/:id', Controller.show)
routes.get('/login', Controller.login)
routes.get('/feed', Controller.feed)

export default routes;