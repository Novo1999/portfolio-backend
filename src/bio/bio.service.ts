import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class BioService {
  constructor(@Inject('POSTGRES_POOL') private readonly sql: any) {}

  async getUserBio(username: string) {
    try {
      const bio = await this.sql`
      SELECT bio, username FROM bio
      WHERE username = ${username}`;
      return bio;
    } catch (error) {
      if (error) throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async editUserBio(username: string, bio: string) {
    try {
      const editedBio = await this.sql`
      UPDATE bio
      SET bio = ${bio}
      WHERE username = ${username}
      RETURNING bio`;
      return editedBio;
    } catch (error) {
      if (error) throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
