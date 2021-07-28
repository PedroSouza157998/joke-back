import { Request, Response } from 'express';
import User from '../models/User';
import Joke from '../models/Post';
import { getRepository, Not } from 'typeorm';
export default {

    async create(req: Request, res: Response) {
        try {
            const { name, login, password } = req.body
            console.log(name);
            console.log(login);
            console.log(password);

            const UsersRepository = getRepository(User);
            const user = UsersRepository.create({ name, login, password })

            await UsersRepository.save(user)
            console.log(`usuário ${name} criado`)
            res.json(user)
        } catch (err) {
            console.log(err)
        }

    },
    async index(req: Request, res: Response){
        const UsersRepository = getRepository(User);
        const users = UsersRepository.find()
        res.json(users)
    },

    async show(req: Request, res: Response) {
        const { id } = req.params
        const UserRepository = getRepository(User);
        const users = await UserRepository.findOneOrFail(id);
        res.send(users)
    },


    async login(req: Request, res: Response) {
        const { login, password } = req.body;
        const UsersRepository = getRepository(User);
        const users = await UsersRepository.find({ where: { "login": login, "password": password } });
        res.json(users)

    },

    async newPost(req: Request, res: Response) {
        try {
            const { joke } = req.body;
            const date = new Date();
            const user_id = req.params;
            const JokeRepository = getRepository(Joke);
            const post = JokeRepository.create({ joke, user_id, date });
            await JokeRepository.save(post)
            res.json(post)
        } catch (error) {
            res.json(error)
        }
    },
    async feed(req: Request, res: Response) {
        const { id } = req.body;
        
        const JokeRepository = getRepository(Joke);
        const jokesUser = await JokeRepository.find({where: {user_id: {id: (id)} } ,relations: ['user_id']});
        const jokesOutherUsers = await JokeRepository.find({where: {user_id: {id: Not(id)}},relations: ['user_id']});
        res.send([jokesUser, jokesOutherUsers])
    },
    async userPublic(req: Request, res: Response) {
        const { id } = req.params
        const JokeRepository = getRepository(Joke);
        const jokes = await JokeRepository.find({ where: { "user_id": { "id": id } }, relations: ['user_id'] });
        res.send(jokes)
    },
    async checkRegister(req: Request, res: Response) {
        const { login } = req.body;
        const UsersRepository = getRepository(User);
        const users = await UsersRepository.find({ where: { "login": login } });
        res.json(users)

    },
    async putJoke(req: Request, res: Response) {
        const { joke, id } = req.body;
        const JokeRepository = getRepository(Joke);
        const jokes = await JokeRepository.findOneOrFail(id)
        jokes.joke = joke;
        JokeRepository.save(jokes)
        res.json(jokes)
    },
    async deleteJoke(req: Request, res: Response) {
        try {
            const { id } = req.body;
            
            const JokeRepository = getRepository(Joke);
            await JokeRepository.delete({ id });
            res.json({
                success: true,
                message: "Transação realizada com sucesso",
            })
        } catch (error) {
            res.json({
                success: false,
                message: "Transação falhou",
                error 
            })
        }
    },
    async jokesFromUser (req: Request, res: Response) {
        const { id } = req.body
        const JokeRepository = getRepository(Joke);
        const jokes = await JokeRepository.find({where: {"user_id": id}})
        res.json(jokes)
    }
}