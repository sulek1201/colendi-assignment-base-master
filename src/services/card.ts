import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Card} from "@entities/card";
import {UsersCard} from "@entities/usersCard";
import {CancelCardRequest, CreateCardRequest, ReissueCardRequest} from "@controllers/card/dto";
import {CardTransaction} from "@entities/cardTransaction";

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card) private readonly cardRepository: Repository<Card>,
    @InjectRepository(UsersCard) private readonly usersCardRepository: Repository<UsersCard>,
    @InjectRepository(CardTransaction) private readonly cardTransactionRepository: Repository<CardTransaction>,
  ) {}

  async createCard(dto: CreateCardRequest): Promise<Card> {
    let card = new Card();
    const usersCard = new UsersCard();
    const cardTransaction = new CardTransaction()
    card.cvv = dto.cvv;
    card.gpaId = dto.gpaId;
    card.pan = dto.pan;
    card.expiresAt = dto.expiresAt;
    card = await this.cardRepository.save(card);
    usersCard.userId = dto.userId;
    usersCard.userId = card.token;
    await this.usersCardRepository.save(usersCard);
    cardTransaction.amount = dto.amount;
    cardTransaction.cardToken = card.token;
    await this.cardTransactionRepository.save(cardTransaction);
    return card;
  }

  async findAll(): Promise<Card[]> {
    return await this.cardRepository.find();
  }

  async findById(id: string): Promise<Card> {
    return await this.cardRepository.findOne({where: {id}});
  }


  async reIssuedCard(dto: ReissueCardRequest): Promise<Card> {
    const oldCard = await this.findById(dto.cardId);
    let updatedCard = new Card();
    updatedCard = oldCard;
    updatedCard.cvv = dto.newCvv;
    updatedCard.expiresAt = dto.newExpiresAt;
    await this.cardRepository.update(oldCard.token, updatedCard);
    return updatedCard;
  }

  async cancelCard(dto: CancelCardRequest): Promise<Card> {
    let card = await this.findById(dto.cardId);
    card.status = false;
    card = await this.cardRepository.save(card);
    return card;
  }
}
