import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Project } from 'src/projects/project.dto';

@Injectable()
export class ProjectsService {
  constructor(@Inject('POSTGRES_POOL') private readonly sql: any) {}

  async getProjects(username: string) {
    try {
      const projects = await this.sql`
      SELECT * FROM projects
      WHERE username = ${username}`;
      return projects;
    } catch (error) {
      if (error)
        throw new HttpException(
          'Error getting projects',
          HttpStatus.BAD_REQUEST,
        );
    }
  }

  async addProject(username: string, project: Project) {
    try {
      const addedProject = await this.sql`
      INSERT INTO projects(username, title, tech_stack, image_url, github_client_url,github_server_url, live_url)
      VALUES(${username}, ${project.title}, ${project.tech_stack}, ${project.image_url},${project.github_client_url},${project.github_server_url},${project.live_url})
      RETURNING *`;
      return addedProject;
    } catch (error) {
      if (error)
        throw new HttpException('Error adding project', HttpStatus.BAD_REQUEST);
    }
  }
}
