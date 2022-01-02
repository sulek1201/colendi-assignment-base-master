import { Gpa, GpaType } from '@entities/gpa';
import { Merchant } from '@entities/merchant';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MerchantService {
  constructor(
    @InjectRepository(Merchant) private readonly merchantRepository: Repository<Merchant>,
    @InjectRepository(Gpa) private readonly gpaRepository: Repository<Gpa>,
  ) {}

  async createMerchant(dto: any): Promise<Merchant> {
    let merchant = new Merchant();
    let gpa = new Gpa();
    gpa.balance = 0;
    gpa.type = GpaType.BUSINESS;
    gpa = await this.gpaRepository.save(gpa);
    merchant.merchantName = dto.merchantName;
    merchant.gpaId = gpa.id;
    merchant.merchantCategoryCode = dto.merchantCategoryCode;

    merchant = await this.merchantRepository.save(merchant);
    return merchant;
  }

  async findAll(): Promise<Merchant[]> {
    return await this.merchantRepository.find();
  }
}
