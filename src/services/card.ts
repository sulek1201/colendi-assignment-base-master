import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Card} from "@entities/card";
import {UsersCard} from "@entities/usersCard";
import {CancelCardRequest, CreateCardRequest, ReissueCardRequest} from "@controllers/card/dto";

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card) private readonly cardRepository: Repository<Card>,
    @InjectRepository(UsersCard) private readonly usersCardRepository: Repository<UsersCard>,
  ) {}

  async createCard(dto: CreateCardRequest): Promise<Card> {
    let card = new Card();
    const usersCard = new UsersCard();
    card.cvv = dto.cvv;
    card.gpaId = dto.gpaId;
    card.pan = dto.pan;
    card.expiresAt = dto.expiresAt;
    card = await this.cardRepository.save(card);
    usersCard.userId = dto.userId;
    usersCard.userId = card.token;
    await this.usersCardRepository.save(usersCard);
    return card;
  }

  async findAll(): Promise<Card[]> {
    return await this.cardRepository.find();
  }

  async findById(id: string): Promise<Card> {
    return await this.cardRepository.findOne({where: {id}});
  }

  async cancelCard(dto: CancelCardRequest): Promise<Card> {
    let card = await this.findById(dto.cardId);
    card.status = false;
    card = await this.cardRepository.save(card);
    return card;
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
}
