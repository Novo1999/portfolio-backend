import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { DatabaseModule } from 'src/DbModule/db';
import { AppController } from './app.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
