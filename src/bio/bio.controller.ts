import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { BioService } from './bio.service';


@Controller('/bio')
export class BioController {
  constructor(private readonly bioService: BioService) {}

  @Get(':username')
  async getBio(@Param() username: Record<string, string>) {
    return this.bioService.getUserBio(username.username);
  }

  @UseGuards(AuthGuard)
  @Patch(':username')
  async editBio(
    @Param() username: Record<string, string>,
    @Body() bio: Record<string, string>,
  ) {
    return this.bioService.editUserBio(username.username, bio.bio);
  }
}
