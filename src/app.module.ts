import { Module } from '@nestjs/common';
import { DatabaseModule } from '@db/module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from '@modules/user';
import { MerchantModule } from '@modules/merchant';

@Module({
  imports: [DatabaseModule, UserModule, MerchantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
