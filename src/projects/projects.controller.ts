import { Controller, Get, Param } from '@nestjs/common';
import { ProjectsService } from 'src/projects/projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get(':username')
  async getProjects(@Param() { username }: Record<string, string>) {
    return this.projectsService.getProjects(username);
  }
}
