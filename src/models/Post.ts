import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import User from './User';

@Entity('jokes')
export default class Joke{
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    joke: string;
    
    @Column()
    date: Date;

    @ManyToOne(() => User, user => user.jokes)
    @JoinColumn({name: "user_id"})
    user_id: User;
}