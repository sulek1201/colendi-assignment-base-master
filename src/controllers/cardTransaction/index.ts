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
import {LimitCardRequest} from "@controllers/cardTransaction/dto";
import {CardService} from "@services/card";
import {CardTransaction} from "@entities/cardTransaction";
import {CardTransactionService} from "@services/cardTransaction";

@ApiTags('Card')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('cards')
export class MerchantController {
  constructor(private readonly cardTransactionService: CardTransactionService) {}



  @ApiResponse({ status: HttpStatus.OK })
  @Post("cancelCard")
  async limitCard(@Body() dto: LimitCardRequest): Promise<CardTransaction> {
    const cards = await this.cardTransactionService.limitCard(dto);
    return cards;
  }
}
