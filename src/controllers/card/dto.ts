import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

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