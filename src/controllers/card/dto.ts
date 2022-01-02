import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import {Long} from "typeorm";

export class CreateCardRequest {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        name: 'gpaId',
        description: 'gpa id of Merchant',
        nullable: false,
        example: '10',
    })
    gpaId: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        name: 'pan',
        description: 'pan',
        nullable: false,
        example: 'Anil',
    })
    pan: string;

    @IsNotEmpty()
    @ApiProperty({
        name: 'cvv',
        nullable: false,
        description: 'cvv.',
        example: '112',
    })
    cvv: string;

    @IsNotEmpty()
    @ApiProperty({
        name: 'expiresAt',
        nullable: false,
        description: 'expire date of card.',
        example: '04/25',
    })
    expiresAt: string;

    @IsNotEmpty()
    @ApiProperty({
        name: 'userId',
        nullable: false,
        description: 'id of user',
        example: '123',
    })
    userId: string;

    @IsNotEmpty()
    @ApiProperty({
        name: 'amount',
        nullable: false,
        description: 'amount of card',
        example: '1000',
    })
    amount: Long;
}

export class CancelCardRequest {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        name: 'cardId',
        description: 'card id of Card',
        nullable: false,
        example: '12',
    })
    cardId: string;
}

export class ReissueCardRequest {
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
        name: 'newCvv',
        description: 'new cvv of Card',
        nullable: false,
        example: '12',
    })
    newCvv: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        name: 'newExpiresAt',
        description: 'new cvv of Card',
        nullable: false,
        example: '12',
    })
    newExpiresAt: string;

}
