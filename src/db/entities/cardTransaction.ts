import {Entity, PrimaryGeneratedColumn, Column, OneToOne, Long} from 'typeorm';


import { BaseEntity } from './baseEntity';
import {Merchant} from "@entities/merchant";
import {Gpa} from "@entities/gpa";



@Entity('card_transactions')
export class CardTransaction extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    @Column()
    id: string;

    @Column()
    merchantId: string;


    @Column({ nullable: false })
    cardToken: string;

    @Column()
    amount: Long;

}
