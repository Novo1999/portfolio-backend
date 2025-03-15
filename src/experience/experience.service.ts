import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ExperienceCreator } from 'src/experience/experience.dto';

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

  async editUserExp(username: string, exp: ExperienceCreator) {
    try {
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
      WHERE username = ${username}
      RETURNING *`;
      return editedExp;
    } catch (error) {
      if (error) throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
