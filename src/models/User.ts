import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('users')
export default class User{
    
    @PrimaryColumn('increment')
    id: number;
    
    @Column()
    name:string;
    
    @Column()
    login: string;

    @Column()
    password: string;
}