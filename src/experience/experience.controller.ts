import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ExperienceCreator } from 'src/experience/experience.dto';
import { ExperienceService } from 'src/experience/experience.service';

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
