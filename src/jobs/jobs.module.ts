
import { AuthModule } from '../auth/auth.module.js';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsController } from './jobs.controller.js';
import { JobsService } from './jobs.service.js';
import { Job } from './job.entity.js';

@Module({
 imports: [
  TypeOrmModule.forFeature([Job]),
  AuthModule,
],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
