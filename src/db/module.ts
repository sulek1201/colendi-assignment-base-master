import { Gpa } from '@entities/gpa';
import { Merchant } from '@entities/merchant';
import { User } from '@entities/user';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import dbConfig from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: dbConfig.host,
      database: dbConfig.database,
      port: 3306,
      username: dbConfig.username,
      password: dbConfig.password,
      logging: dbConfig.logging,
      extra: {
        decimalNumbers: true,
      },
      synchronize: false,
      keepConnectionAlive: true,
      supportBigNumbers: true,
      bigNumberStrings: false,
      entities: [User, Gpa, Merchant],
    }),
  ],
})
export class DatabaseModule {}
