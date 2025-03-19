import { Module } from '@nestjs/common';
import { DatabaseModule } from '../DbModule/db';
import { BioController } from './bio.controller';
import { BioService } from './bio.service';

@Module({
  imports: [DatabaseModule],
  providers: [BioService],
  controllers: [BioController],
  exports: [BioService],
})
export class BioModule {}
