import { User } from '@entities/user';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {UsersCard} from "@entities/usersCard";

@Injectable()
export class UsersCardsService {
    constructor(
        @InjectRepository(UsersCard) private readonly usersCardsRepository: Repository<UsersCard>,
    ) {}

    async findAll(userId: string): Promise<UsersCard[]> {
        return await this.usersCardsRepository.find({ where: { userId } });
    }

}
