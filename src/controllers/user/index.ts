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

import { CreateUserRequest, VerifyUserRequest } from './dto';

@ApiTags('User')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse({ status: HttpStatus.OK })
  @Post()
  async register(@Body() dto: CreateUserRequest): Promise<User> {
    const registerResult = await this.userService.createUser(dto);
    return registerResult;
  }

  @ApiResponse({ status: HttpStatus.OK })
  @Post('verify')
  async verifyUser(@Body() dto: VerifyUserRequest): Promise<User> {
    const verifyResult = await this.userService.verifyUser(dto);
    return verifyResult;
  }

  @ApiResponse({ status: HttpStatus.OK })
  @Get()
  async getUsers(): Promise<User[]> {
    const users = await this.userService.findAll();
    return users;
  }
}
