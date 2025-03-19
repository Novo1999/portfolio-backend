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
import { ExperienceCreator } from './experience.dto';
import { ExperienceService } from './experience.service';

@Controller('experience')
export class ExperienceController {
  constructor(private readonly expService: ExperienceService) {}

  @Get(':username')
  async getExp(@Param() { username }: Record<string, string>) {
    return this.expService.getExperience(username);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  async editExp(
    @Param() { id }: Record<string, string>,
    @Body() experience: ExperienceCreator,
  ) {
    return this.expService.editUserExp(id, experience);
  }
  @UseGuards(AuthGuard)
  @Post(':username')
  async addExp(
    @Param() { username }: Record<string, string>,
    @Body() experience: ExperienceCreator,
  ) {
    return this.expService.addUserExp(username, experience);
  }
}
