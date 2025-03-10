import { Module } from '@nestjs/common';
import { BioController } from 'src/bio/bio.controller';
import { BioService } from 'src/bio/bio.service';
import { DatabaseModule } from 'src/DbModule/db';

@Module({
  imports: [DatabaseModule],
  providers: [BioService],
  controllers: [BioController],
  exports: [BioService],
})
export class BioModule {}
