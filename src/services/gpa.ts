import {ForbiddenException, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Gpa} from "@entities/gpa";
import {BalanceRequestDto} from "@controllers/gpa/dto";
import {UserService} from "@services/user";

@Injectable()
export class GpaService {
    constructor( private readonly userService: UserService,
        @InjectRepository(Gpa) private readonly gpaRepository: Repository<Gpa>,
    ) {}

    async spend(dto: BalanceRequestDto): Promise<Gpa> {
        const user = await this.userService.findById(dto.userId);
        const gpa = user.gpa;
        let gpaAmount = gpa.balance
        if(gpaAmount > dto.deposit){
            gpaAmount = gpaAmount-dto.deposit;
            gpa.balance = gpaAmount;
            return await this.gpaRepository.save(gpa);
        }
        throw new ForbiddenException("Balance is not enough for this transaction.");
    }

    async deposit(dto: BalanceRequestDto): Promise<Gpa> {
        const user = await this.userService.findById(dto.userId);
        const gpa = user.gpa;
        gpa.balance = gpa.balance + dto.deposit;
        return await this.gpaRepository.save(gpa);
    }

}
