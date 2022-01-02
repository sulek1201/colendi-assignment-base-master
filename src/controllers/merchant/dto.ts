import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMerchantRequest {
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
        name: 'merchantName',
        description: 'name of the merchant',
        nullable: false,
        example: 'Anil',
    })
    merchantName: string;

    @IsNotEmpty()
    @ApiProperty({
        name: 'merchantCategoryCode',
        nullable: false,
        description: 'Category code of Merchant.',
        example: '+12',
    })
    merchantCategoryCode: number;

}


