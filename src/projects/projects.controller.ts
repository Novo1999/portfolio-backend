import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { Project } from './project.dto';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get(':username')
  async getProjects(@Param() { username }: Record<string, string>) {
    return this.projectsService.getProjects(username);
  }

  @UseGuards(AuthGuard)
  @Post(':username')
  async addProject(
    @Param() { username }: Record<string, string>,
    @Body() project: Project,
  ) {
    return this.projectsService.addProject(username, project);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  async editProject(
    @Param() { id }: Record<string, string>,
    @Body() project: Project,
  ) {
    return this.projectsService.editProject(id, project);
  }
}
