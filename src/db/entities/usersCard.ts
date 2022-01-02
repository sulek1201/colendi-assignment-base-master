import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';


import { BaseEntity } from './baseEntity';

@Entity('users_card')
export class UsersCard extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    cardId: string;

    @Column()
    userId: string;
}
