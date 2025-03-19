import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ExperienceCreator } from './experience.dto';

@Injectable()
export class ExperienceService {
  constructor(@Inject('POSTGRES_POOL') private readonly sql: any) {}

  async getExperience(username: string) {
    try {
      const exp = await this.sql`
      SELECT * FROM experience
      WHERE username = ${username}`;
      return exp;
    } catch (error) {
      if (error) throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async addUserExp(username: string, exp: ExperienceCreator) {
    try {
      const newExp = await this.sql`
      INSERT INTO experience(username, company_name, tech_stack, company_website, timeline, role, responsibilites, job_type)
      VALUES(${username}, ${exp.company_name}, ${exp.tech_stack}, ${exp.company_website}, ${exp.timeline}, ${exp.role} ,${exp.responsibilites}, ${exp.job_type})
      RETURNING *`;
      return newExp;
    } catch (error) {
      if (error) throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async editUserExp(id: string, exp: ExperienceCreator) {
    try {
      const expRow = await this.sql`
      SELECT EXISTS(SELECT 1 FROM experience WHERE id=${id})`;

      const expExists = expRow[0]?.exists;

      if (!expExists) throw new NotFoundException('Experience Not Found');

      const editedExp = await this.sql`
      UPDATE experience
      SET
       company_name = ${exp.company_name},
       tech_stack = ${exp.tech_stack},
       company_website = ${exp.company_website},
       timeline = ${exp.timeline},
       role = ${exp.role},
       responsibilites = ${exp.responsibilites},
       job_type = ${exp.job_type}
      WHERE id = ${id}
      RETURNING *`;
      return editedExp;
    } catch (error) {
      if (error) throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
