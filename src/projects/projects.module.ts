import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/DbModule/db';
import { ProjectsController } from 'src/projects/projects.controller';
import { ProjectsService } from 'src/projects/projects.service';

@Module({
  imports: [DatabaseModule],
  providers: [ProjectsService],
  controllers: [ProjectsController],
  exports: [ProjectsService],
})
export class ProjectsModule {}
