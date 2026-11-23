
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';

import { JobApplicationsService } from './job-applications.service.js';

import { CreateJobApplicationDto } from './dto/create-job-application.dto.js';
import { UpdateJobApplicationDto } from './dto/update-job-application.dto.js';

import { JwtAuthGuard } from '../auth/jwt-auth/jwt-auth.guard.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { Roles } from '../auth/roles.decorator.js';

@Controller('job-applications')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
export class JobApplicationsController {
  constructor(
    private readonly jobApplicationsService: JobApplicationsService,
  ) {}

  // Get all job applications
  @Get()
  findAll() {
    return this.jobApplicationsService.findAll();
  }

  // Get a job application by ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.jobApplicationsService.findOne(id);
  }

  // Create a job application
  @Post()
  create(@Body() data: CreateJobApplicationDto) {
    return this.jobApplicationsService.create(
      data.applicantId,
      data.jobId,
    );
  }

  // Update application status
  @Patch(':id')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateJobApplicationDto,
  ) {
    return this.jobApplicationsService.updateStatus(
      id,
      data.status,
    );
  }

  // Delete a job application
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.jobApplicationsService.remove(id);
  }
}
