import { Request, Response } from 'express';
import User from '../models/User';
import Joke from '../models/Post';
import { getRepository } from 'typeorm';
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
            res.send(login + " - " + password)
        } catch (err) {
            console.log(err)
        }

    },


    async index(req: Request, res: Response) {
        const UsersRepository = getRepository(User);
        const users = await UsersRepository.find();
        res.send(users)
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
        const JokeRepository = getRepository(Joke);
        const jokes = await JokeRepository.find({ relations: ['user_id'] });
        res.send(jokes)
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
        // const { id } = req.params;
        const JokeRepository = getRepository(Joke);
        // const jokes = await JokeRepository.update({where: {"id": id}, relations:['user_id']})
        const jokes = await JokeRepository.update({ id }, {joke})
            // .then(r => {
            //     console.log(r)
            // })

        res.json(jokes)
    },
    async deleteJoke(req: Request, res: Response) {
        const { id } = req.body;
        console.log(id)
        const JokeRepository = getRepository(Joke);
        const jokes = await JokeRepository.delete({ id });

        console.log({ jokes })
        res.json(jokes)
    }
}