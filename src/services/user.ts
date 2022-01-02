import { CreateUserRequest, VerifyUserRequest } from '@controllers/user/dto';
import { Gpa, GpaType } from '@entities/gpa';
import { User } from '@entities/user';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Gpa) private readonly gpaRepository: Repository<Gpa>,
  ) {}

  async createUser(dto: CreateUserRequest): Promise<User> {
    let user = new User();
    let gpa = new Gpa();
    gpa.balance = 0;
    gpa.type = GpaType.USER;
    gpa = await this.gpaRepository.save(gpa);

    user.firstName = dto.firstName;
    user.lastName = dto.lastName;
    user.isVerified = false;
    user.gpaId = gpa.id;
    user.phoneNumber = dto.phoneNumber;
    user = await this.userRepository.save(user);
    return user;
  }

  async verifyUser(dto: VerifyUserRequest): Promise<User> {
    const user = await this.findById(dto.userId);
    user.isVerified = true;
    user.nationalId = dto.nationalId;
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  findById(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }
}
