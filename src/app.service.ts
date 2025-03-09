import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('POSTGRES_POOL') private readonly sql: any) {}

  async getTable(): Promise<any[]> {
    return await this.sql`SELECT * FROM bio`;
  }
}
