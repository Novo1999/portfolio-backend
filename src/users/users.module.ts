import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/DbModule/db';
import { UserController } from 'src/users/users.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService],
  controllers: [UserController],
  exports: [UsersService],
})
export class UsersModule {}
