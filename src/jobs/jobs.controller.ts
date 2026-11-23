
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

import { JobsService } from './jobs.service.js';
import { CreateJobDto } from './dto/create-job.dto.js';
import { UpdateJobDto } from './dto/update-job.dto.js';

import { Roles } from '../auth/roles.decorator.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { JwtAuthGuard } from '../auth/jwt-auth/jwt-auth.guard.js';

@Controller('job-positions')
@UseGuards(JwtAuthGuard, RolesGuard)
export class JobsController {
  constructor(
    private readonly jobsService: JobsService,
  ) {}

  // Get all jobs
  @Get()
  findAll() {
    return this.jobsService.findAll();
  }

  // Get a job by ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.jobsService.findOne(id);
  }

  // Create a job (Admin only)
  @Post()
  @Roles('admin')
  create(@Body() data: CreateJobDto) {
    return this.jobsService.create(data);
  }

  // Update a job (Admin only)
  @Patch(':id')
  @Roles('admin')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateJobDto,
  ) {
    return this.jobsService.update(id, data);
  }

  // Delete a job (Admin only)
  @Delete(':id')
  @Roles('admin')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.jobsService.remove(id);
  }
}
