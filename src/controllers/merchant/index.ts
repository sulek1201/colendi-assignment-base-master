import { Merchant } from '@entities/merchant';

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
import { MerchantService } from '@services/merchant';
import {CreateMerchantRequest} from "@controllers/merchant/dto";

@ApiTags('Merchant')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('merchants')
export class MerchantController {
  constructor(private readonly merchantservice: MerchantService) {}

  @ApiResponse({ status: HttpStatus.OK })
  @Post()
  async create(@Body() dto: CreateMerchantRequest): Promise<Merchant> {
    const merchantResult = await this.merchantservice.createMerchant(dto);
    return merchantResult;
  }


  @ApiResponse({ status: HttpStatus.OK })
  @Get()
  async getMerchants(): Promise<Merchant[]> {
    const users = await this.merchantservice.findAll();
    return users;
  }
}
