import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from '@services/user';
import { UserController } from '@controllers/user';
import { User } from '@entities/user';
import { Gpa } from '@entities/gpa';

@Module({
  imports: [TypeOrmModule.forFeature([User, Gpa])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
