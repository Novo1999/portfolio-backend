import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { DatabaseModule } from 'src/DbModule/db';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DatabaseModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
