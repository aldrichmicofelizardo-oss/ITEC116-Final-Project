
import { AuthModule } from '../auth/auth.module.js';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicantsController } from './applicants.controller.js';
import { ApplicantsService } from './applicants.service.js';
import { Applicant } from './applicant.entity.js';

@Module({
  imports: [
  TypeOrmModule.forFeature([Applicant]),
  AuthModule,
],
  controllers: [ApplicantsController],
  providers: [ApplicantsService],
  exports: [ApplicantsService],
})
export class ApplicantsModule {}
