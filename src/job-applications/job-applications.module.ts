
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JobApplicationsController } from './job-applications.controller.js';
import { JobApplicationsService } from './job-applications.service.js';

import { JobApplication } from './job-application.entity.js';
import { Applicant } from '../applicants/applicant.entity.js';
import { Job } from '../jobs/job.entity.js';

import { AuthModule } from '../auth/auth.module.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      JobApplication,
      Applicant,
      Job,
    ]),
    AuthModule,
  ],
  controllers: [JobApplicationsController],
  providers: [JobApplicationsService],
})
export class JobApplicationsModule {}
