import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Gpa } from '@entities/gpa';
import { Merchant } from '@entities/merchant';
import { MerchantService } from '@services/merchant';
import { MerchantController } from '@controllers/merchant';

@Module({
  imports: [TypeOrmModule.forFeature([Gpa, Merchant])],
  providers: [MerchantService],
  controllers: [MerchantController],
  exports: [MerchantService],
})
export class MerchantModule {}
