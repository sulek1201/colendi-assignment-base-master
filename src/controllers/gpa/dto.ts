import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import {Long} from "typeorm";

export class BalanceRequestDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    name: 'userId',
    description: 'id of the user',
    nullable: false,
    example: '12',
  })
  userId: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    name: 'deposit',
    description: 'deposit of amount',
    nullable: false,
    example: '1000',
  })
  deposit: number;
}




