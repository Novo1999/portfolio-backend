import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Controller('user')
export class UserController {
  constructor(private userService: UsersService) {}

  @Get('all')
  async getAllUsers() {
    return await this.userService.getUserFromDb();
  }
}
