import { Request, Response } from 'express';
import User from '../models/User';
import {getRepository} from 'typeorm';
export default {
    async create(req: Request, res: Response) {
        const {name, login, password} = req.body;
        const UsersRepository = getRepository(User);
        const user = UsersRepository.create({name, login, password})
        
        await UsersRepository.save(user)
        console.log(`usuário ${name} criado`)
        res.send(login+" "+password)
        
    },
    async index(req: Request, res: Response){
        const UsersRepository = getRepository(User);
        const users = await UsersRepository.find();
        res.send(users)
    },
    async show(req: Request, res: Response){
        const {id} = req.params
        const UsersRepository = getRepository(User);
        const users = await UsersRepository.findOneOrFail(id);
        res.send(users)
    }
}