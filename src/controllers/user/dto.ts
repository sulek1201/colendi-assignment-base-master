import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserRequest {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    name: 'firstName',
    description: 'First name of the user',
    nullable: false,
    example: 'John',
  })
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    name: 'lastName',
    description: 'Last name of the user',
    nullable: false,
    example: 'Doe',
  })
  lastName: string;

  @IsNotEmpty()
  @ApiProperty({
    name: 'phoneNumber',
    nullable: false,
    description: 'Mobile phone number.',
    example: '+905012345678',
  })
  phoneNumber: string;

}

export class VerifyUserRequest {
  @IsNotEmpty()
  @ApiProperty({ name: 'nationalId' })
  nationalId: string;

  @IsNotEmpty()
  @ApiProperty()
  userId: string;
}

export class UserResponse {
  @ApiResponseProperty({ example: '43b3cdc9-c913-4b09-9e3f-bf28772550a5' })
  id: string;

  @ApiResponseProperty({ example: 'John' })
  firstName: string;

  @ApiResponseProperty({ example: 'Doe' })
  lastName: string;

  @ApiResponseProperty({ example: 'johh.doe@colendi.com' })
  email: string;
}


