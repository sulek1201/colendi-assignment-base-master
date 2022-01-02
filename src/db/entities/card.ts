import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from 'typeorm';


import { BaseEntity } from './baseEntity';
import {Gpa} from "@entities/gpa";



@Entity('card')
export class Card extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    @Column()
    token: string;

    @Column({ unique: true })
    gpaId: string;

    @OneToOne(() => Gpa)
    gpa: Gpa;

    @Column({ nullable: false })
    pan: string;

    @Column({ nullable: false })
    cvv: string;

    @Column({ nullable: false })
    expiresAt: string;

    @Column({ nullable: false})
    status: boolean;

    @Column({ nullable: true})
    allowedMccs: boolean;


}
