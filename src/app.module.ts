import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { BioModule } from 'src/bio/bio.module';
import { BioService } from 'src/bio/bio.service';
import { DatabaseModule } from 'src/DbModule/db';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [DatabaseModule, AuthModule, UsersModule, BioModule],
  controllers: [AppController],
  providers: [AppService, UsersService, BioService],
})
export class AppModule {}
