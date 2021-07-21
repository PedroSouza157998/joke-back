import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}