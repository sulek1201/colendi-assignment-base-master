import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';


import { BaseEntity } from './baseEntity';
import { Gpa } from './gpa';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  gpaId: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true, nullable: true })
  nationalId: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: false, default: false })
  isVerified: boolean;

  @OneToOne(() => Gpa)
  gpa: Gpa;

}
