import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/DbModule/db';
import { ExperienceController } from 'src/experience/experience.controller';
import { ExperienceService } from 'src/experience/experience.service';

@Module({
  imports: [DatabaseModule],
  providers: [ExperienceService],
  controllers: [ExperienceController],
  exports: [ExperienceService],
})
export class ExperienceModule {}
