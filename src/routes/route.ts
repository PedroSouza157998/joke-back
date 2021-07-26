import { Router } from 'express';
import Controller from '../controller/Controller';

const routes = Router();

routes.post('/register', Controller.create)
routes.post('/save_joke/:id', Controller.newPost)
routes.get('/users', Controller.index)
routes.get('/user/:id', Controller.show)
routes.post('/login', Controller.login)
routes.post('/checkRegister', Controller.checkRegister)
routes.put('/putJoke', Controller.putJoke)
routes.delete('/deleteJoke', Controller.deleteJoke)
routes.get('/feed', Controller.feed)
routes.get('/public/:id', Controller.userPublic)

export default routes;