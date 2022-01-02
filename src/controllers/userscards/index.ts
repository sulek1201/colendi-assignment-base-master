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


import {UsersCard} from "@entities/usersCard";
import {UsersCardsService} from "@services/usersCard";

@ApiTags('UsersCards')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('userscards')
export class UsersCardsController {
  constructor(private readonly usersCardsService: UsersCardsService) {}


  @ApiResponse({ status: HttpStatus.OK })
  @Get("getUsersCards")
  async getUsersCards(@Body() userId:string): Promise<UsersCard[]> {
    const usersCards = await this.usersCardsService.getUsersCards(userId);
    return usersCards;
  }

}
