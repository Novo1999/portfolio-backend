import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { User } from 'src/users/interfaces/users.interface';

@Injectable()
export class UsersService {
  constructor(@Inject('POSTGRES_POOL') private readonly sql: any) {}
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async addOne(username: string, password: string) {
    if (this.users.find((user) => user.username === username))
      throw new HttpException('User Already Exists', HttpStatus.FORBIDDEN);
    this.users.push({
      userId: this.users.length + 1,
      username,
      password,
    });

    return {
      message: 'Added new user',
      username,
    };
  }

  async getUserFromDb(): Promise<any> {
    return await this.sql`SELECT * FROM users`;
  }
}
