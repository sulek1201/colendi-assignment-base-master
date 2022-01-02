import { Merchant } from '@entities/merchant';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Card} from "@entities/card";
import {CardTransaction} from "@entities/cardTransaction";
import {LimitCardRequest} from "@controllers/cardTransaction/dto";

@Injectable()
export class CardTransactionService {
  constructor(
    @InjectRepository(Merchant) private readonly cardRepository: Repository<Card>,
    @InjectRepository(Merchant) private readonly cardTransactionRepository: Repository<CardTransaction>,
  ) {}


  async findById(cardId: string): Promise<CardTransaction> {
    return await this.cardTransactionRepository.findOne({where: {cardId}});
  }

  async limitCard(dto: LimitCardRequest): Promise<CardTransaction> {
    let cardTransaction = await this.findById(dto.cardId);
    cardTransaction.amount = dto.amount;
    cardTransaction = await this.cardRepository.save(cardTransaction);
    return cardTransaction;
  }

}
