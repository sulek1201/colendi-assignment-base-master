import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';


import { BaseEntity } from './baseEntity';
import { Gpa } from './gpa';

@Entity('merchants')
export class Merchant extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  gpaId: string;

  @Column()
  merchantName: string;

  @Column()
  merchantCategoryCode: number;

  @ManyToOne(() => Gpa)
  gpa: Gpa;

}
