import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Project } from './project.dto';

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

  async editProject(id: string, project: Project) {
    try {
      const expRow = await this.sql`
      SELECT EXISTS(SELECT 1 FROM projects WHERE id=${id})`;

      const expExists = expRow[0]?.exists;

      if (!expExists) throw new NotFoundException('Project Not Found');

      const editedProject = await this.sql`
      UPDATE projects
      SET
       title = ${project.title},
       tech_stack = ${project.tech_stack},
       image_url = ${project.image_url},
       github_client_url = ${project.github_client_url},
       github_server_url = ${project.github_server_url},
       live_url = ${project.live_url}
      WHERE id = ${id}
      RETURNING *`;
      return editedProject;
    } catch (error) {
      if (error) throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
