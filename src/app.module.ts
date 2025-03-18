import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { DatabaseModule } from 'src/DbModule/db';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/projects.service';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [DatabaseModule, AuthModule, UsersModule, ProjectsModule],
  controllers: [AppController, ProjectsController],
  providers: [AppService, ProjectsService],
})
export class AppModule {}
