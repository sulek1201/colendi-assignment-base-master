import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


import { BaseEntity } from './baseEntity';

export enum GpaType {
  'USER' = 0,
  'BUSINESS' = 1,
}

@Entity('gpas')
export class Gpa extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: GpaType;

  @Column()
  balance: number;

}
