import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import {Long} from "typeorm";




export class LimitCardRequest {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        name: 'cardId',
        description: 'card id of Card',
        nullable: false,
        example: '12',
    })
    cardId: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        name: 'amount',
        description: 'amount of Card',
        nullable: false,
        example: '1000',
    })
    amount: Long;

}


