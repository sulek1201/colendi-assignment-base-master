import { User } from '@entities/user';
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

import { UserService } from '@services/user';

import { BalanceRequestDto } from './dto';
import {Gpa} from "@entities/gpa";
import {GpaService} from "@services/gpa";

@ApiTags('User')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly gpaService: GpaService) {}

  @ApiResponse({ status: HttpStatus.OK })
  @Post("deposit")
  async deposit(@Body() dto: BalanceRequestDto): Promise<Gpa> {
    const registerResult = await this.gpaService.deposit(dto);
    return registerResult;
  }

  @ApiResponse({ status: HttpStatus.OK })
  @Post('spend')
  async spend(@Body() dto: BalanceRequestDto): Promise<Gpa> {
    const verifyResult = await this.gpaService.spend(dto);
    return verifyResult;
  }
}
