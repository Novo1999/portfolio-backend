import { Module } from '@nestjs/common';
import { DatabaseModule } from '../DbModule/db';
import { UserController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService],
  controllers: [UserController],
  exports: [UsersService],
})
export class UsersModule {}
