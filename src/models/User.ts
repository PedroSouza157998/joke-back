import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Joke from './Post';

@Entity('users')
export default class User{
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name:string;
    
    @Column()
    login: string;

    @Column()
    password: string;

    @OneToMany(() => Joke, joke => joke.user_id)
    @JoinColumn({name: "user_id"})
    jokes: Joke[];
}