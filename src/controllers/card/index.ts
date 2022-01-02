import { Card } from '@entities/card';

import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  ClassSerializerInterceptor,
  HttpStatus,
  Get,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {CancelCardRequest, CreateCardRequest} from "@controllers/card/dto";
import {CardService} from "@services/card";

@ApiTags('Card')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @ApiResponse({ status: HttpStatus.OK })
  @Post("createCard")
  async create(@Body() dto: CreateCardRequest): Promise<Card> {
    const cardRequest = await this.cardService.createCard(dto);
    return cardRequest;
  }


  @ApiResponse({ status: HttpStatus.OK })
  @Get("gerCards")
  async getCards(): Promise<Card[]> {
    const cards = await this.cardService.findAll();
    return cards;
  }

  @ApiResponse({ status: HttpStatus.OK })
  @Post("cancelCard")
  async cancelCards(@Body() dto: CancelCardRequest): Promise<Card> {
    const cards = await this.cardService.cancelCard(dto);
    return cards;
  }
}
